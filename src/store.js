import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import allReducers from './reducers';

const initialState = {};

const midleware = [thunk];

const store = createStore(
  allReducers,
  initialState,
  composeWithDevTools(applyMiddleware(...midleware))
);

export default store;
