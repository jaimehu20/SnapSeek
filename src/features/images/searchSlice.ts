import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { getImages } from './searchThunk'

export interface initialState {
  data: object[],
  status: string,
  error: string | null
}

const initialState: initialState = {
  data: [],
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
    }).addCase(getImages.fulfilled, (state, action: PayloadAction<object[]>) => {
        state.status = "fulfilled";
        state.data = action.payload;
    })
  }
})

export const fetchedImages = (state: RootState) => state.images.data;
export const fetchStatus = (state: RootState) => state.images.status;