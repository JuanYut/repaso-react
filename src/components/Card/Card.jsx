import React from 'react'

import './card.css'

const Card = (props) => {

  const {
    imgUrl,
    title,
    description
  } = props

  return (
    <div className="card">
      <img className="card-image" src={imgUrl} alt=""/>
      <h4 className="card-title">{title}</h4>
      <p className="card-description">{description}</p>
    </div>
  )
}

export default Card
