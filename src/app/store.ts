import { Reducer, configureStore } from '@reduxjs/toolkit';
import { searchSlice } from '../features/images/searchSlice';


export const store = configureStore({
  reducer: {
    images: searchSlice.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;