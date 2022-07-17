import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ApiStatus, api } from '#/utils/api';

const fetchGallery = createAsyncThunk('gallery/fetchGallery', async ({ authorId, _page }) => {
  const paintings = await api().gallery.getPaintings({ authorId, _page });
  const authors = await api().gallery.getAuthors();
  const locations = await api().gallery.getLocations();

  return { paintings, authors, locations };
});

const fetchPaintings = createAsyncThunk('gallery/fetchPaintings', async ({ authorId, _page }) => {
  const paintings = await api().gallery.getPaintings({ authorId, _page });

  return { paintings };
});

// Gallery slice state
//* ------------------------------------------------------------------------------------------ *//
const initialState = {
  status: ApiStatus.NONE,
  statusPaintings: ApiStatus.NONE,
  error: null,

  paintings: [],
  authors: [],
  locations: [],
  pages: 4,

  range: {
    valueFrom: '',
    valueBefore: ''
  },
  location: {},
  author: {},
  page: 1
};
//* - Slice ------------------------------------------------------------------------------------------//
const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    reset: () => initialState,
    setRange: (state, { payload }) => {
      state.range = { ...state.range, ...payload };
    },
    setLocation: (state, { payload }) => {
      state.location = payload;
    },
    setAuthor: (state, { payload }) => {
      state.author = payload;
    },
    setPage: (state, { payload }) => {
      state.page = payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGallery.pending, (state) => {
      state.status = ApiStatus.PENDING;
    });
    builder.addCase(fetchGallery.fulfilled, (state, action) => {
      state.status = ApiStatus.FULFILLED;
      state.statusPaintings = ApiStatus.FULFILLED;
      state.paintings = action.payload.paintings;
      state.authors = action.payload.authors;
      state.locations = action.payload.locations;
    });
    builder.addCase(fetchGallery.rejected, (state, action) => {
      state.status = ApiStatus.REJECTED;
      state.error = action.error;
    });
    builder.addCase(fetchPaintings.pending, (state) => {
      state.statusPaintings = ApiStatus.PENDING;
    });
    builder.addCase(fetchPaintings.fulfilled, (state, action) => {
      state.statusPaintings = ApiStatus.FULFILLED;
      state.paintings = action.payload.paintings;
    });
    builder.addCase(fetchPaintings.rejected, (state, action) => {
      state.statusPaintings = ApiStatus.REJECTED;
      state.error = action.error;
    });
  }
});

export const { reset } = gallerySlice.actions;
export default gallerySlice;
export { fetchGallery, fetchPaintings };
