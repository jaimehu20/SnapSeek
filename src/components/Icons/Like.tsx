import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { addFavorite, removeFavorite } from "../../features/favorites/favoriteSlice";

interface Info {
    url: string;
    width: number;
    height: number;
    likes: number;
    date: string;
    description: string;
}

interface ImageInfo {
    info?: Info
}

export const Like:React.FC<ImageInfo> = ({ info }) => {

    const dispatch = useAppDispatch();
    const image = {
        url: info?.url || "",
        width: info?.width,
        height: info?.height,
        likes: info?.likes,
        date: info?.date,
        description: info?.description
    }
    const favorites = JSON.stringify(localStorage.getItem('favoritePhotos'));
    const [ isFavorite, setFavorite ] = useState<boolean>(false);

    useEffect(() => {
        if (favorites.includes(image.url)) {
            setFavorite(true);
        }
    }, [image.url]);

    const handleClick = () => {
        if (favorites.includes(image.url)){
            setFavorite(false)
            dispatch(removeFavorite(image))
        } else {
            setFavorite(true)
            dispatch(addFavorite(image))
        }
    }

    return <>
        <svg onClick={handleClick}
            xmlns="http://www.w3.org/2000/svg" 
            className={`icon icon-tabler icon-tabler-heart-filled like ${isFavorite ? 'favorite' : ''}`}
            width="30" 
            height="30" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            stroke="#2c3e50" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" strokeWidth="0" fill="currentColor" />
        </svg>
    </>
}

// className={`icon icon-tabler icon-tabler-heart-filled like ${isFavorite ? 'favorite' : ''}`}