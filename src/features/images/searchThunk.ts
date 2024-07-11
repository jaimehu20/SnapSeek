import { createAsyncThunk } from "@reduxjs/toolkit";

const getRandomURL = `${import.meta.env.VITE_BASE_URL}${import.meta.env.VITE_ACCESS_KEY}`;

export const getImages:any = createAsyncThunk("images/getImages", async () => {
    const request = await fetch(getRandomURL);
    const data = request.json();
    return data;
})