import { combineReducers } from 'redux';
import counter from './counter';
import user from './user';
import galleryReducer from './galleryReducer';
import usersReducer from './usersReducer';

const allReducers = combineReducers({
  counter,
  user,
  galleryReducer,
  usersReducer
});

export default allReducers;
