import { UPDATE_NAME } from '../actions/types';

const initialState = {
  user: {
    name: 'loko',
    age: 0,
    job: ''
  }
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NAME:
      return { ...state, user: { ...state.user, name: action.name } };
    default:
      return state;
  }
};

export default user;
