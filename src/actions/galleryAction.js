import { SET_IMAGES } from './types';
import axios from 'axios';

export const setImages = images => {
  return {
    type: SET_IMAGES,
    images
  };
};

export const getImages = () => {
  return async dispatch => {
    const images = await axios.get('https://picsum.photos/v2/list', {
      params: { limit: 6 }
    });
    console.log('AXIOS IMAGES =>', images);
    dispatch(setImages(images.data));
  };
};
