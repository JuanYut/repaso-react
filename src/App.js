import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

import Home from './UI/Home/Home'
import UsersFunctional from './components/UsersFunctional'
import Nav from './UI/Nav/Nav'


const App = () => {

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/users" component={UsersFunctional}></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App