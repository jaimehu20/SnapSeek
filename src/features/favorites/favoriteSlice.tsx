import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const storedFavorites = localStorage.getItem("favoritePhotos");
const initialFavorites = storedFavorites ? JSON.parse(storedFavorites) : [];

export const favoriteSlice = createSlice({
    name: "favorite",
    initialState: {
        favoritePics : initialFavorites
    },
    reducers: {
        addFavorite: (state, action) => {
            let exists:boolean = false;
            state.favoritePics && state.favoritePics.map((element:any, index: any) => {
                if (element.url === action.payload.url) {
                    exists = true
                }
            })
            if (!exists){
                state.favoritePics = [...state.favoritePics, action.payload]
                localStorage.setItem("favoritePhotos", JSON.stringify(state.favoritePics))
            }
        },
        removeFavorite: (state, action) => {
            state.favoritePics = state.favoritePics.filter((pic:any) => pic.url !== action.payload.url )
            localStorage.setItem("favoritePhotos", JSON.stringify(state.favoritePics));
        },
        editDescription: (state, action) => {
            state.favoritePics.map((element:any, index:number) => {
                if (element.url === action.payload.image.url){
                   state.favoritePics.splice(index, 1)
                   if (action.payload.description.length === 0) {
                    action.payload.image.description = element.description
                   } else {
                    action.payload.image.description = action.payload.description
                   }
                   state.favoritePics = [...state.favoritePics,action.payload.image]
                   localStorage.setItem("favoritePhotos", JSON.stringify([...state.favoritePics]))
                }
            })
        }
    }
})

export const { addFavorite, removeFavorite, editDescription } = favoriteSlice.actions;
export const myPics = (state: RootState) => state.favorites.favoritePics;
