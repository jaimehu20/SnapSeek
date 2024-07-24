import React, { useEffect, useState } from "react";
import { Download } from "../Icons/Download";
import { Like } from "../Icons/Like";
import { Edit } from "../Icons/Edit";
import { EmptyGallery } from "./EmptyGallery";
import { Modal } from "../Modal/Modal";

interface Image {
    url: string;
    width: number;
    height: number;
    likes: number;
    date: string;
    description: string;
}

export const GalleryMainContent : React.FC = () => {

    const [ myPics, setMyPics ] = useState<Image[]>([])
    const [shouldUpdate, setShouldUpdate] = useState<boolean>(false);
    const [ showModal, setShowModal ] = useState<boolean>(false)
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
    const [ sortBy, setSortBy ] = useState<string>("");

    useEffect(() => {
      const favorites = JSON.parse(localStorage.getItem('favoritePhotos') || '[]');
      setMyPics(favorites);
    }, []);

    useEffect(() => {
        if (shouldUpdate) {
          setMyPics((prevMypics) => {
            const updatedFavorites = JSON.parse(localStorage.getItem('favoritePhotos') || '[]');
            return updatedFavorites;
          });
          setShouldUpdate(false);
        }
      }, [shouldUpdate]);

    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSortBy(event.target.value);
    }

    const sortedPics = sortBy ? [...myPics].sort((a: any, b: any) => {
        if (sortBy === 'fecha') {
            return new Date(a.date).getTime() - new Date(b.date).getTime();
        } else if (sortBy === 'likes') {
            return a.likes - b.likes;
        }
        return 0;
    }) : myPics;

    const pics = sortedPics.map((image:any, index:number) => {
        const info = {
            url: image.url,
            width: image.width,
            height: image.height,
            likes: image.likes,
            date: image.date,
            description: image.description
        }

        return (
            <>  
                <div className='main-gallery' key={index}>
                    <img src={info.url} alt={info.description}/>
                    <div className="overlay overlay-gallery">
                        <Like info={info} setShouldUpdate={setShouldUpdate}/>
                        <Download url={info.url} description={info.description}/>
                    </div>
                    <ul>
                            <li>{`${info.description}.`}<Edit onEdit={() => setSelectedImageIndex(index)}/></li>
                            <li>{`Width: ${info.width}px`}</li>
                            <li>{`Height: ${info.height}px`}</li>
                            <li>{`Likes: ${info.likes}`}</li>
                            <li>{`Date ${info.date.slice(0, 10)}`}</li>
                    </ul>
                </div>
                {selectedImageIndex === index && (
                    <Modal showModal={true} setShowModal={() => setSelectedImageIndex(null)} info={info} setShouldUpdate={setShouldUpdate}/>
                )}
            </>
        )
    })

    return <>
        <main>
            <div className="select">
                <select onChange={handleSelect}>
                    <option value="" disabled selected>Ordenar por</option>
                    <option value="fecha" >Fecha</option>
                    <option value="likes">Likes</option>
                </select>
            </div>
            {myPics.length === 0 ? <EmptyGallery /> : pics}
        </main>
    </>
}