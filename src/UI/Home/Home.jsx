import React, { useState } from 'react';

import './home.css';

import Card from '../../components/Card/Card';
import Users from '../../components/UsersFunctional';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../actions';
import { updateName } from '../../actions/user';

const Home = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  const counter = useSelector(state => state.counter);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  return (
    <div className='home'>
      <h2>H O M E</h2>
      <Card
        imgUrl='https://pbs.twimg.com/profile_images/667128409789759488/ZafvuEpz_400x400.jpg'
        title='Titulo'
        description='Descripcion'
      />
      <Users />
      <Input
        value={name}
        onChange={ev => setName(ev.target.value)}
        placeholder={`Type your ${name}`}
      />
      <Input
        value={lastName}
        onChange={ev => setLastName(ev.target.value)}
        placeholder={`Type your ${lastName}`}
      />
      Count: {counter}
      <Button
        className='btn-01'
        text='+'
        action={() => dispatch(increment())}
      />
      <Button
        className='btn-01'
        text='-'
        action={() => dispatch(decrement())}
      />
      Name: {user.user.name}
      <Input
        value={user.user.name}
        onChange={ev => dispatch(updateName(ev.target.value))}
        placeholder={'Type your name'}
      />
    </div>
  );
};

export default Home;
