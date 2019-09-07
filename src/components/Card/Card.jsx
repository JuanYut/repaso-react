import React from 'react'
import { Link } from 'react-router-dom'

import './card.css'

const Card = (props) => {

  const {
    imgUrl,
    title,
    description,
    id
  } = props

  return (
    <div className="card">
      <img className="card-image" src={imgUrl} alt=""/>
      <Link to={`/gallery${id}${title}`}>
        <h4 className="card-title">{title}</h4>
      </Link>
      <p className="card-description">{description}</p>
    </div>
  )
}

export default Card
