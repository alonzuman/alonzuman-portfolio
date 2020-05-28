import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div>
      <h1 className='hero-content'>Sint eiusmod pariatur nostrud reprehenderit nulla nostrud exercitation aliquip cillum ad nulla.</h1>
      <Link to='/work-and-projects'>
        <button id='hero-button' className='primary-button'>My Work & Projects</button>
      </Link>
    </div>
  )
}
