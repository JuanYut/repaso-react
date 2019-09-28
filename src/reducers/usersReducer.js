import axios from 'axios';

// * ACTION TYPE/CONSTANTS
const ACTIONS = {
  GET_USERS: 'react-bedu/users/GET_USERS'
};

// * DEFAULT STATE
const initialState = { users: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_USERS:
      return { ...state, users: action.users };
    default:
      return state;
  }
};

// * ACTIONS
export const setUsers = users => {
  return {
    type: ACTIONS.GET_USERS,
    users
  };
};

// * ASYNC ACTION FUNCTION
export const getUsers = () => {
  return async dispatch => {
    const users = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log('AXIOS USERS =>', users);
    dispatch(setUsers(users.data));
  };
};
