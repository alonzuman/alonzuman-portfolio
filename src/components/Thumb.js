import React, { useState } from 'react';
import './Thumb.css';

export default function Thumb({ work }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className={`thumb ${((work.type === 'big') ? 'big-card' : '')} ${(work.type === 'big wide') ? 'big-card wide-card' : ''}`}>
      <img src={work.image} className='grid-image' />
      {isHover && <div className='thumb-content'>
        <h2>{work.title}</h2>
      </div>}
    </div>
  )
}
