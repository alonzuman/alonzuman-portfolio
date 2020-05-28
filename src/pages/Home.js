import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div>
      <h1 className='hero-content'>Sint eiusmod pariatur nostrud reprehenderit nulla nostrud exercitation aliquip cillum ad nulla.</h1>
      <Link id='hero-button' to='/work-and-projects' className='primary-button'>My Work & Projects</Link>
    </div>
  )
}
