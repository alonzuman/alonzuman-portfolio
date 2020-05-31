import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <div className='hero-container'>
      <h3>Hi, my name is</h3>
      <h1>Alon Zuman,<br></br> and I'm a web developer.</h1>
      <p>I am a web developer based in Tel Aviv, IL that specializes in building (and quite often designing) websites, ecommerce stores, applications and anything in between.</p>
      <a href='mailto:alonzuman7@gmail.com'>
        <button className='primary-button' >Contact Me</button>
      </a>
    </div>
  )
}
