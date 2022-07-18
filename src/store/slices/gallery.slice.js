import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ApiStatus, api } from '#/utils/api';

const fetchPaintings = createAsyncThunk(
  'gallery/fetchPaintings',
  async ({ q, authorId, locationId, _page, created_gte, created_lte }) => {
    const { paintings, total } = await api().gallery.getPaintings({
      q,
      authorId,
      locationId,
      _page,
      created_gte: created_gte || undefined,
      created_lte: created_lte || undefined
    });

    return { paintings, total };
  }
);

// Gallery slice state
//* ------------------------------------------------------------------------------------------ *//
const initialState = {
  isInit: false,
  status: ApiStatus.NONE,
  error: null,

  paintings: [],
  authors: [],
  locations: [],
  pagination: {
    total: 0,
    limit: 10
  },

  range: {
    valueFrom: '',
    valueBefore: ''
  },
  location: {},
  author: {},
  q: '',
  page: 1
};

//* - Slice ------------------------------------a------------------------------------------------------//
const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    reset: () => initialState,
    init: (state, { payload }) => {
      state.authors = payload.authors;
      state.locations = payload.locations;
      state.isInit = true;
    },
    setRange: (state, { payload }) => {
      state.range = { ...state.range, ...payload };
      state.page = 1;
    },
    setLocation: (state, { payload }) => {
      state.location = payload;
      state.page = 1;
    },
    setAuthor: (state, { payload }) => {
      state.author = payload;
      state.page = 1;
    },
    setSearch: (state, { payload }) => {
      state.q = payload;
      state.page = 1;
    },
    setPage: (state, { payload }) => {
      state.page = payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPaintings.pending, (state) => {
      state.status = ApiStatus.PENDING;
    });
    builder.addCase(fetchPaintings.fulfilled, (state, action) => {
      state.status = ApiStatus.FULFILLED;
      state.paintings = action.payload.paintings;
      state.pagination.total = action.payload.total;
    });
    builder.addCase(fetchPaintings.rejected, (state, action) => {
      state.status = ApiStatus.REJECTED;
      state.error = action.error;
    });
  }
});

export const { reset } = gallerySlice.actions;
export default gallerySlice;
export { fetchPaintings };
