import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ApiStatus, api } from '#/utils/api';

const fetchAuthors = createAsyncThunk('gallery/fetchAuthors', async () => {
  const authors = await api().gallery.getAuthors();
  return authors;
});

// Gallery slice state
//* ------------------------------------------------------------------------------------------ *//
const initialState = {
  status: ApiStatus.NONE,
  error: null,

  authors: [],

  range: {
    valueFrom: '',
    valueBefore: ''
  }
};
//* - Slice ------------------------------------------------------------------------------------------//
const authorsSlice = createSlice({
  name: 'authors',
  initialState,
  reducers: {
    reset: () => initialState,
    setRange: (state, { payload }) => {
      state.range = { ...state.range, ...payload };
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAuthors.pending, (state) => {
      state.status = ApiStatus.PENDING;
    });
    builder.addCase(fetchAuthors.fulfilled, (state, action) => {
      state.status = ApiStatus.FULFILLED;
      state.authors = action.payload;
    });
    builder.addCase(fetchAuthors.rejected, (state, action) => {
      state.status = ApiStatus.REJECTED;
      state.error = action.error;
    });
  }
});

export const { reset } = authorsSlice.actions;
export default authorsSlice;
export { fetchAuthors };
