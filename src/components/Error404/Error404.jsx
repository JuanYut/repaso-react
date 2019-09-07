import React from 'react'
import Error404Image from '../../media/petewave404.PNG'
import './error404.css'

const Error404 = () => {
  return (
    <div className="error">
      <h1>404</h1>
      <h2>We can't found this page :c</h2>
      <img src={Error404Image} alt=""/>
    </div>
  )
}

export default Error404
