import { createAsyncThunk } from "@reduxjs/toolkit";

const getRandomURL = `${import.meta.env.VITE_BASE_URL}${import.meta.env.VITE_ACCESS_KEY}`;

export const getImages:any = createAsyncThunk("images/getImages", async () => {
    const request = await fetch(getRandomURL);
    const data = request.json();
    return data;
})

export const imageSearch:any = createAsyncThunk("images/searchIMages", async (query) => {
    const request = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${import.meta.env.VITE_ACCESS_KEY}`);
    const data = request.json();
    return data;
})