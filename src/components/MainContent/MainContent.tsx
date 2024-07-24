import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getImages } from "../../features/images/searchThunk";
import { fetchedImages, fetchStatus, searchedImages } from "../../features/images/searchSlice";
import { Like } from "../Icons/Like";
import { Download } from "../Icons/Download";
import { LoadingContent } from "../Icons/LoadingContent";
import { ImageFromAPI } from "../../utils/interfaces";

export const MainContent : React.FC = () => {

    const handleEmailClick = () => {
        window.open('mailto:jaimehu.dev@gmail.com');
    }

    const dispatch = useAppDispatch();
    const images: ImageFromAPI[] = useAppSelector(fetchedImages);
    const status : string = useAppSelector(fetchStatus);
    const search : ImageFromAPI[] = useAppSelector(searchedImages);

    useEffect(() => {
      if (status === "idle") {
        dispatch(getImages());
      } else if (status === "fulfilled") {
        return
      }
    }, [dispatch, images])

    const pictures = images.map((img: ImageFromAPI, index:number) => {
        const info = {
            url: img.urls.regular,
            width: img.width,
            height: img.height,
            likes: img.likes,
            date: img.created_at,
            description: img.alt_description
        }
        return (
            <div className="main">
                <img src={info.url} alt={info.description}/>
                <div className="overlay">
                    <div className="overlay-text">{info.description}</div>
                    <Like info={info} />
                    <Download url={info.url} description={info.description}/>
                </div>
            </div>
        )
    })

    const customPics = search.map((img: ImageFromAPI, index:number) => {
        const info = {
            url: img.urls.regular,
            width: img.width,
            height: img.height,
            likes: img.likes,
            date: img.created_at,
            description: img.alt_description
        }
        return (
            <div className="main">
                <img src={info.url} alt={info.description}/>
                <div className="overlay">
                    <div className="overlay-text">{info.description}</div>
                    <Like info={info} />
                    <Download url={info.url} description={info.description}/>
                </div>
            </div>
        )
    })

    return <>
        <main>
            {pictures.length === 0 ? (
                <div className="loading">
                    <LoadingContent />
                </div>
            ) : (
                customPics.length === 0 ? pictures : customPics
            )}
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