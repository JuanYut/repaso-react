import { combineReducers } from 'redux';
import counter from './counter';
import user from './user';

const allReducers = combineReducers({
  counter,
  user
});

export default allReducers;
