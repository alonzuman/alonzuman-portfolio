import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MobileNavbar.css';

export default function MobileNavbar({ theme, themeToggler }) {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  }

  return (
    <div>
      {!isOpen &&
        <ul className='mobile-navbar'>
          <li className='nav-group'>
            <Link to='/'>
              <h2>
                Alon Zuman
              </h2>
            </Link>
          </li>
          <li className='nav-group'>
            {(theme === 'dark' || !theme) && <a className='theme-toggler-mobile' onClick={themeToggler}>🌙</a>}
            {(theme === 'light') && <a className='theme-toggler-mobile' onClick={themeToggler}>🌞</a>}
            <div onClick={openMenu} >
              <i className="fas fa-bars"></i>
            </div>
          </li>
        </ul>
      }
      {isOpen && <MobileMenu theme={theme} themeToggler={themeToggler} closeMenu={closeMenu} />}
    </div>
  )
}

const MobileMenu = ({ closeMenu }) => {
  return (
    <div className='mobile-menu'>
      <button className='close-button' onClick={closeMenu}>Close</button>
      <ul>
        <li className='nav-item-mobile'>
          <Link onClick={closeMenu} to='/'>Home</Link>
        </li>
        <li className='nav-item-mobile'>
          <Link onClick={closeMenu} to='about'>About</Link>
        </li>
        <li className='social-group'>
          <a href='http://www.github.com/alonzuman' target='_blank' >
            <i className="social-icon fab fa-github" />
          </a>
          <a href='http://www.facebook.com/alonzuman' target='_blank' >
            <i className="social-icon fab fa-facebook" />
          </a>
          <a href='mailto:alonzuman7@gmail.com' >
            <i className="social-icon fas fa-envelope"></i>
          </a>
        </li>
      </ul>
    </div>
  )
}