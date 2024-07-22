import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getImages } from "../../features/images/searchThunk";
import { fetchedImages, fetchStatus, searchedImages } from "../../features/images/searchSlice";
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
    const search = useAppSelector(searchedImages);

    useEffect(() => {
      if (status === "idle") {
        dispatch(getImages());
      } else if (status === "fulfilled") {
        return
      }
    }, [dispatch, images])

    const pictures = images.map((img: Image, index:number) => {
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

    const prueba = search.map((img: Image, index:number) => {
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
                <p>Loading...</p>
            ) : (
                prueba.length === 0 ? pictures : prueba
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