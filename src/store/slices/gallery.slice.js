import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ApiStatus, api } from '#/utils/api';

const fetchGallery = createAsyncThunk('gallery/fetchGallery', async () => {
  const paintings = await api().gallery.getPaintings();
  return paintings;
});

// Gallery slice state
//* ------------------------------------------------------------------------------------------ *//
const initialState = {
  status: ApiStatus.NONE,
  error: null,

  paintings: [],

  range: {
    valueFrom: '',
    valueBefore: ''
  }
};
//* - Slice ------------------------------------------------------------------------------------------//
const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    reset: () => initialState,
    setRange: (state, { payload }) => {
      state.range = { ...state.range, ...payload };
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGallery.pending, (state) => {
      state.status = ApiStatus.PENDING;
    });
    builder.addCase(fetchGallery.fulfilled, (state, action) => {
      state.status = ApiStatus.FULFILLED;
      state.paintings = action.payload;
    });
    builder.addCase(fetchGallery.rejected, (state, action) => {
      state.status = ApiStatus.REJECTED;
      state.error = action.error;
    });
  }
});

export const { reset } = gallerySlice.actions;
export default gallerySlice;
export { fetchGallery };
