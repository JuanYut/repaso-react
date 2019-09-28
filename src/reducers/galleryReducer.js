import axios from 'axios';

// * ACTION TYPE/CONSTANTS
const ACTIONS = {
  SET_IMAGES: 'react-bedu/gallery/SET_IMAGES' // project-feature-tipo
};

// * DEFAULT STATE
const initialState = { images: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_IMAGES:
      return { ...state, images: action.images };
    default:
      return state;
  }
};

// * ACTIONS
export const setImages = images => {
  return {
    type: ACTIONS.SET_IMAGES,
    images
  };
};

//  * ASYNC ACTION FUNCTION
export const getImages = () => {
  return async dispatch => {
    const images = await axios.get('https://picsum.photos/v2/list', {
      params: { limit: 6 }
    });
    console.log('AXIOS IMAGES =>', images);
    dispatch(setImages(images.data));
  };
};
