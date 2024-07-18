import { Download } from "../Icons/Download";
import { Like } from "../Icons/Like";

export const GalleryMainContent = () => {

    const favorites = JSON.parse(localStorage.getItem('favoritePhotos') || '[]');
    
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
                <div className="main-gallery">
                    <img src={info.url} alt={info.description}/>
                    <div className="overlay overlay-gallery">
                        <Like info={info}/>
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