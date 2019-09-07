import React from 'react'

const GalleryDetail = (props) => {
  return (
    <div>
      <img className="detail-img" src={`https://picsum.photos/id/${props.match.params.id}/300/300`} alt=""/>
      <label>{props.match.params.title}</label>
    </div>
  )
}

export default GalleryDetail
