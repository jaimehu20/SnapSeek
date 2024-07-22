import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { getImages, imageSearch } from './searchThunk'

export interface initialState {
  data: any,
  search: any,
  status: string,
  error: string | null
}

const initialState: initialState = {
  data: [],
  search: [],
  status: "idle",
  error: null
}

export const searchSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getImages.pending, (state, action) => {
        state.status = "pending";
    }).addCase(getImages.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
    }).addCase(getImages.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = "fulfilled";
        state.data = action.payload;
    })

    builder.addCase(imageSearch.pending, (state, action) => {
      state.status = "pending";
    }).addCase(imageSearch.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    }).addCase(imageSearch.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.search = action.payload.results;
    })
  }
})

export const fetchedImages = (state: RootState) => state.images.data;
export const fetchStatus = (state: RootState) => state.images.status;
export const searchedImages = (state: RootState) => state.images.search;