import React, { useState, useEffect } from 'react';
import './MobileNavbar.css';
import ToggleSwitch from './ToggleSwitch';

export default function MobileNavbar({ themeToggler }) {
  const [shadow, setShadow] = useState('')

  const style = {
    boxShadow: shadow,
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let newPos = window.pageYOffset;
      newPos < 15 ? setShadow('') : setShadow('1px 1px 10px #00000033');
    })
  }, [])

  return (
    <div style={style} className='mobile-navbar'>
      <ToggleSwitch themeToggler={themeToggler} />
      <ul className='social-icons-mobile'>
        <li className='social-icon-mobile'>
          <a href='https://github.com/alonzuman' rel="noopener noreferrer" target='_blank'>
            <i className="fab fa-github" />
          </a>
        </li>
        <li className='social-icon-mobile'>
          <a href='https://facebook.com/alonzuman' rel="noopener noreferrer" target='_blank'>
            <i className="fab fa-facebook-f" />
          </a>
        </li>
        <li className='social-icon-mobile'>
          <a href='https://www.linkedin.com/in/alon-zuman-018365193/' rel="noopener noreferrer" target='_blank'>
            <i className="fab fa-linkedin-in" />
          </a>
        </li>
        <li className='social-icon-mobile'>
          <a href='https://instagram.com/alonzuman' rel="noopener noreferrer" target='_blank'>
            <i className="fab fa-instagram" />
          </a>
        </li>
      </ul>
      <a href='https://www.google.com' target='_blank' rel='noopener noreferrer'>
        <button className='primary-button'>Resume</button>
      </a>
    </div>
  )
}