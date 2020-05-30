import React from 'react';
import me from '../data/me.jpg';
import './About.css';

export default function About() {
  const photoStyle = {
    objectFit: 'contain'
  }

  return (
    <div className='about-grid'>
      <div className='about-content'>
        <h1>About Me</h1>
        <p>Aliquip velit occaecat sit ex in mollit proident ex aliquip esse excepteur sint eiusmod officia. Nisi cillum voluptate eu voluptate proident proident ullamco irure incididunt id ad nisi. Velit id eu in sunt tempor velit adipisicing enim. Proident ea tempor aliquip veniam qui. Dolor elit ut nulla esse enim adipisicing ut occaecat eu adipisicing ea.</p>
      </div>
      <img src={me} style={photoStyle} className='about-photo' />
    </div>
  )
}
