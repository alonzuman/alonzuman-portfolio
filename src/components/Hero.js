import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <div className='hero-container'>
      <h3>Hello! <span role='img' aria-label='wave-emoji'>👋</span></h3>
      <h1>I'm <b>Alon Zuman</b>,<br></br> a design-minded full-stack developer passionate about building beautiful experiences.</h1>
      <a href='mailto:alonzuman7@gmail.com'>
        <button className='primary-button' >Contact Me</button>
      </a>
    </div>
  )
}
