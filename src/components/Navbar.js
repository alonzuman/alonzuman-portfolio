import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

export default function Navbar({ themeToggler, theme }) {
  return (
    <ul className='navbar'>
      <li className='nav-group'>
        <NavLink to='/'>
          <h2>Alon Zuman</h2>
        </NavLink>
      </li>
      <li className='nav-group'>
        {(theme === 'dark' || !theme) && <a className='nav-item toggler' onClick={themeToggler}>🌙</a>}
        {(theme === 'light') && <a className='nav-item toggler' onClick={themeToggler}>🌞</a>}
        <NavLink activeClassName='navlink-active' id='/work-and-projects' className='nav-item' to='/'>Home</NavLink>
        <NavLink activeClassName='navlink-active' id='/about' className='nav-item' to='/about'>About</NavLink>
        <a id='navbar-button' href='mailto:alonzuman7@gmail.com' className='primary-button'>Contact Me</a>
      </li>
    </ul>
  )
}
