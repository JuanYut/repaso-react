import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <img className="nav-logo" src="https://bit.ly/2lBN9J0" alt=""/>
      </Link>
      <ul className="nav-links">
        <Link className="link-comp" to="/users">
          <li>Users</li>
        </Link>
        <Link className="link-comp" to="/gallery">
          <li>Gallery</li>
        </Link>
        <Link className="link-comp" to="about">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav