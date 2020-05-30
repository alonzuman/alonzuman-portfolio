import React from 'react';
import './Thumb.css';

export default function Thumb({ work }) {
  return (
    <div className='thumb'>
      <img src={work.image} className='grid-image' />
    </div>
  )
}
