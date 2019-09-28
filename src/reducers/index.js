import { combineReducers } from 'redux';
import counter from './counter';
import user from './user';
import galleryReducer from './galleryReducer';

const allReducers = combineReducers({
  counter,
  user,
  galleryReducer
});

export default allReducers;
