import { useEffect, useState } from "react";
import { Download } from "../Icons/Download";
import { Like } from "../Icons/Like";
import { Edit } from "../Icons/Edit";
import { EmptyGallery } from "./EmptyGallery";
import { Modal } from "../Modal/Modal";

export const GalleryMainContent = () => {

    
    const [ prueba, setPrueba ] = useState<[]>([])
    const [shouldUpdate, setShouldUpdate] = useState(false);
    const [ showModal, setShowModal ] = useState<boolean>(false)
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    useEffect(() => {
      const favorites = JSON.parse(localStorage.getItem('favoritePhotos') || '[]');
      setPrueba(favorites);
    }, []);

    useEffect(() => {
        if (shouldUpdate) {
          setPrueba((prevPrueba) => {
            const updatedFavorites = JSON.parse(localStorage.getItem('favoritePhotos') || '[]');
            return updatedFavorites;
          });
          setShouldUpdate(false);
        }
      }, [shouldUpdate]);

    const pics = prueba.map((image:any, index:number) => {
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
                            <li>{`${info.description}.`}<Edit info={info} onEdit={() => setSelectedImageIndex(index)}/></li>
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
            {prueba.length === 0 ? <EmptyGallery /> : pics}
        </main>
    </>
}