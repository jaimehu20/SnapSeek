import { Reducer, configureStore } from '@reduxjs/toolkit';
import { searchSlice } from '../features/images/searchSlice';
import { favoriteSlice } from '../features/favorites/favoriteSlice';


export const store = configureStore({
  reducer: {
    images: searchSlice.reducer,
    favorites: favoriteSlice.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;