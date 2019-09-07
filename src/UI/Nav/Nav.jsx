import React from 'react'

import './nav.css'

const Nav = () => {
  return (
    <nav>
      <img className="nav-logo" src="https://bit.ly/2lBN9J0" alt=""/>
      <ul className="nav-links">
        <li>Users</li>
        <li>Gallery</li>
        <li>About</li>
      </ul>
    </nav>
  )
}

export default Nav