import React, { useState, useEffect } from 'react';
import './gallery.css';

import Card from '../Card/Card';
import { connect, useDispatch } from 'react-redux';
import { setImages } from '../../actions/galleryAction';

const Gallery = props => {
  const dispatch = useDispatch();
  const { images } = props;

  useEffect(() => {
    fetch('https://picsum.photos/v2/list?limit=20')
      .then(response => response.json())
      .then(jsonThing => dispatch(setImages(jsonThing)));
  }, []);

  return (
    <div className='gallery'>
      {images.map((img, index) => {
        return (
          <Card
            key={index}
            imgUrl={img.download_url}
            title={img.author}
            description={img.width}
            id={img.id}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = ({ galleryReducer }) => ({
  images: galleryReducer.images
});

export default connect(mapStateToProps)(Gallery);
