import { useAppSelector } from "../../app/hooks"
import { myPics } from "../../features/favorites/favoriteSlice"
import { Download } from "../Icons/Download";
import { EditIcon } from "../Icons/Edit";
import { Like } from "../Icons/Like";

export const GalleryMainContent = () => {

    const favorites:object[] = useAppSelector(myPics);
    
    const pics = favorites.map((image, index) => {
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
                        <Like 
                            url={info.url} 
                            width={info.width} 
                            height={info.height} 
                            likes={info.likes} 
                            date={info.date} 
                            description={info.description}  />
                        <Download url={info.url} description={info.description}/>
                    </div>
                    <ul>
                        <li>{`${info.description}.`}</li>
                        <li>{`Width: ${info.width}px`}</li>
                        <li>{`Height: ${info.height}px`}</li>
                        <li>{`Likes: ${info.likes}`}</li>
                        <li>{`Date: ${info.date.slice(0, 10)}`}</li>
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