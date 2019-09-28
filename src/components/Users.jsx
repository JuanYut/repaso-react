import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { getUsers } from '../actions/usersAction';

const Users = props => {
  const dispatch = useDispatch();
  const { users } = props;

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <ul>
      {users.map(user => {
        return <li>{user.name}</li>;
      })}
    </ul>
  );
};

const mapStateToProps = ({ usersReducer }) => ({
  users: usersReducer.users
});

export default connect(mapStateToProps)(Users);
