import React, { useState } from 'react'
import './App.css'

import UserList from './components/UserList'
import Users from './components/Users'
import UsersFunctional from './components/UsersFunctional'
import Button from './components/Button/Button'

const App = () => {

  const [showImg, setShowImg] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        {
          showImg &&
          <img src="https://pbs.twimg.com/profile_images/3663486176/faf0a17873e40956b9e4591121675ce0_400x400.png" className="App-logo" alt="logo" />
        }
        <Button className="btn-02" text="Imagen" action={() => setShowImg(!showImg) } />
        <UsersFunctional>
          <h2>Eh wey picale</h2>
        </UsersFunctional>
      </header>
    </div>
  )
}

export default App