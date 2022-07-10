import axios from 'axios';
import { GalleryApi } from './gallery';

export const api = () => {
  const instance = axios.create({
    baseURL: 'https://test-front.framework.team/'
  });
  const apis = {
    gallery: GalleryApi
  };

  const result = Object.entries(apis).reduce((prev, [key, f]) => {
    return {
      ...prev,
      [key]: f(instance)
    };
  }, {});

  return result;
};

export const ApiStatus = {
  NONE: 'NONE',
  PENDING: 'PENDING',
  FULFILLED: 'FULFILLED',
  REJECTED: 'REJECTED'
};
