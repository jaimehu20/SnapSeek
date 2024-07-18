import { useEffect, useState } from "react";
import { Download } from "../Icons/Download";
import { Like } from "../Icons/Like";

export const GalleryMainContent = () => {

    const favorites = JSON.parse(localStorage.getItem('favoritePhotos') || '[]');
    const [hidden, setHidden] = useState(Array(favorites.length).fill(false));

    const toggleImg = (index: number) => {
        let newHidden = [...hidden];
        newHidden[index] = !newHidden[index];
        setHidden(newHidden);
    };
    
    const pics = favorites.map((image:any, index:number) => {
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
                <div className={!hidden[index] ? 'main-gallery' : 'main-gallery-disabled'} key={index}>
                    <img src={info.url} alt={info.description}/>
                    <div className="overlay overlay-gallery">
                        <Like info={info} index={index} toggleImg={toggleImg}/>
                        <Download url={info.url} description={info.description}/>
                    </div>
                        <ul>
                            <li>{`${info.description}.`}</li>
                            <li>{`Width: ${info.width}px`}</li>
                            <li>{`Height: ${info.height}px`}</li>
                            <li>{`Likes: ${info.likes}`}</li>
                        </ul>
                </div>
            </>
        )
    })

    return <>
        <main>
            {pics}
        </main>
    </>
}