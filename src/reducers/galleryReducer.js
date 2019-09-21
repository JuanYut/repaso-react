import { SET_IMAGES } from '../actions/types';

const initialState = {
  images: []
};

const galleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IMAGES:
      return { ...state, images: action.images };
    default:
      return state;
  }
};

export default galleryReducer;
