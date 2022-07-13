import { configureStore, combineReducers } from '@reduxjs/toolkit';

import gallerySlice from './slices/gallery.slice';

const rootReducer = (state, action) => {
  return combineReducers({
    [gallerySlice.name]: gallerySlice.reducer
  })(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  devTools: true
});
