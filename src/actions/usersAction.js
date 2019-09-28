import { GET_USERS } from './types';
import axios from 'axios';

export const setUsers = users => {
  return {
    type: GET_USERS,
    users
  };
};

export const getUsers = () => {
  return async dispatch => {
    const users = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log('AXIOS USERS =>', users);
    dispatch(setUsers(users.data));
  };
};
