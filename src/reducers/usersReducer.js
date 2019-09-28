import { GET_USERS } from '../actions/types';

const initialState = {
  users: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.users };
    default:
      return state;
  }
};

export default usersReducer;
