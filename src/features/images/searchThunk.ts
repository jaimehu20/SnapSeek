import { createAsyncThunk } from "@reduxjs/toolkit";

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

interface GetImagesResponse {
    results: Image[]
}

interface SearchQuery {
    query: string;
}

const getRandomURL = `${import.meta.env.VITE_BASE_URL}${import.meta.env.VITE_ACCESS_KEY}`;

export const getImages : any = createAsyncThunk<GetImagesResponse>("images/getImages", async () => {
    const request = await fetch(getRandomURL);
    const data = request.json();
    return data;
})

export const imageSearch : any = createAsyncThunk<GetImagesResponse, SearchQuery>("images/searchIMages", async (query) => {
    const request = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${import.meta.env.VITE_ACCESS_KEY}`);
    const data = request.json();
    return data;
})