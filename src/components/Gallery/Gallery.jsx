import React, { useState, useEffect } from 'react';
import './gallery.css';

import Card from '../Card/Card';
import { connect, useDispatch } from 'react-redux';
import { getImages } from '../../reducers/galleryReducer';

const Gallery = props => {
  const dispatch = useDispatch();
  const { images } = props;

  useEffect(() => {
    dispatch(getImages());
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
