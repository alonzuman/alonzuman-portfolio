import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar({ themeToggler, theme }) {

  return (
    <ul className='navbar'>
      <li className='nav-group'>
        <Link to='/'>
          <h2>Alon Zuman</h2>
        </Link>
      </li>
      <li className='nav-group'>
        {(theme === 'dark' || !theme) && <a className='nav-item' onClick={themeToggler}>🌙</a>}
        {(theme === 'light') && <a className='nav-item' onClick={themeToggler}>🌞</a>}
        <Link id='/work-and-projects' className='nav-item' to='/work-and-projects'>Work & Projects</Link>
        <Link id='/about' className='nav-item' to='/about'>About</Link>
      </li>
    </ul>
  )
}
