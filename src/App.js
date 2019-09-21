import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './UI/Home/Home';
import UsersFunctional from './components/UsersFunctional';
import Nav from './UI/Nav/Nav';
import About from './UI/About/About';
import Error404 from './components/Error404/Error404';
import Gallery from './components/Gallery/Gallery';
import GalleryDetail from './components/Gallery/GalleryDetail';

import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Nav />
          <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/users' component={UsersFunctional}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/gallery' exact component={Gallery}></Route>
            <Route path='/gallery:id:title' component={GalleryDetail}></Route>
            <Route component={Error404}></Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
