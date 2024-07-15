import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getImages } from "../../features/images/searchThunk";
import { fetchedImages, fetchStatus } from "../../features/images/searchSlice";
import { Like } from "../Icons/Like";
import { Download } from "../Icons/Download";

export const MainContent = () => {

  interface Image {
    urls: {
        regular: string;
    };
    width: number;
    height: number;
    likes: number;
    created_at: string;
    alt_description: string;
}

    const handleEmailClick = () => {
        window.open('mailto:jaimehu.dev@gmail.com');
    }

    const dispatch = useAppDispatch();
    const images: Image[] = useAppSelector(fetchedImages);
    const status = useAppSelector(fetchStatus);
    const [ isFavorite, setFavorite ] = useState<boolean>(false)

    useEffect(() => {
      if (status === "idle") {
        dispatch(getImages());
      } else if (status === "fulfilled") {
        return
      }
    }, [dispatch, images])

    const pictures = images.map((imagen: Image, index) => {
        const info = {
            url: imagen.urls.regular,
            width: imagen.width,
            height: imagen.height,
            likes: imagen.likes,
            date: imagen.created_at,
            description: imagen.alt_description
        }
        return (
            <div className="main">
                <img src={info.url} alt={info.description}/>
                <div className="overlay">
                    <div className="overlay-text">{info.description}</div>
                    <Like 
                        url={info.url} 
                        width={info.width} 
                        height={info.height} 
                        likes={info.likes} 
                        date={info.date} 
                        description={info.description}
                        isFavorite={isFavorite}
                        setFavorite={setFavorite}  />
                    <Download />
                </div>
            </div>
        )
    })

    return <>
        <main>
            {pictures}  
            <section className="contact">
                <div>
                    <h2>Contáctame</h2>
                    <p>Si tienes alguna sugerencia o idea para mejorar la página, ¡no dudes en contactarme! Estaré encantado de leerte.</p>
                    <button onClick={handleEmailClick}>¡Contacta conmigo!</button>
                </div>
            </section>
        </main>
    </>
}