import React, { useEffect, Fragment } from 'react';
import { connect, useDispatch } from 'react-redux';
import { getUsers } from '../reducers/usersReducer';

import Button from './Button/Button';

const UsersFunctional = props => {
  const dispatch = useDispatch();
  const { users } = props;

  useEffect(() => {
    // dispatch(getUsers());
  }, []);

  return (
    <Fragment>
      <ul>
        {users.map((user, index) => {
          return <li key={index}>{user.name}</li>;
        })}
      </ul>
      {props.children}
      <Button
        className='btn-01'
        text='Load Users'
        action={() => dispatch(getUsers())}
      />
    </Fragment>
  );
};

const mapStateToProps = ({ usersReducer }) => ({
  users: usersReducer.users
});

export default connect(mapStateToProps)(UsersFunctional);
