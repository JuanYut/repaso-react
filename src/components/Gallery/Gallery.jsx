import React, { useState, useEffect } from 'react'
import './gallery.css'

import Card from '../Card/Card'

const Gallery = (props) => {

  const [images, setImages] = useState([])
  
  useEffect(() => {
    fetchImages()
    console.log(images)
  }, [])

  const fetchImages = () => {
    fetch('https://picsum.photos/v2/list?limit=20')
    .then(response => response.json())
    .then(jsonThing => setImages(jsonThing))
  }

  return (
    <div className="gallery">
      {
        images.map( (img, index) => {
          return (
            <Card 
              key={index}
              imgUrl={img.download_url}
              title={img.author}
              description={img.width}
              id={img.id}
            />
          )
        })
      }
    </div>
  )
}

export default Gallery
