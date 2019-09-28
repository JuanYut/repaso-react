import { SET_IMAGES } from './types';

export const setImages = images => {
  return { type: SET_IMAGES, images };
};
