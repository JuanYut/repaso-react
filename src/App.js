import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

import Home from './UI/Home/Home'
import UsersFunctional from './components/UsersFunctional'
import Nav from './UI/Nav/Nav'
import About from './UI/About/About'
import Error404 from './components/Error404/Error404'
import Gallery from './components/Gallery/Gallery'

const App = () => {

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/users" component={UsersFunctional}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/gallery" component={Gallery}></Route>
          <Route component={Error404}></Route>

        </Switch>
      </div>
    </Router>
  )
}

export default App