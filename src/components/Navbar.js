import React, { useEffect, useState } from 'react';
import ToggleSwitch from './ToggleSwitch';
import './Navbar.css';

export default function Navbar({ themeToggler }) {
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
    <div className='navbar' style={style}>
      <ul className='menu'>
        <ToggleSwitch themeToggler={themeToggler} />
        <li className='nav-item'>
          <a href='#about'><span className='monospace'>01.</span>About</a>
        </li>
        <li className='nav-item'>
          <a href='#experience'><span className='monospace'>02.</span>Experience</a>
        </li>
        <li className='nav-item'>
          <a href='#work'><span className='monospace'>03.</span>Work</a>
        </li>
        <li className='nav-item'>
          <a href='#contact'><span className='monospace'>04.</span>Contact</a>
        </li>
        <li>
          <a href='#hi'><button className='primary-button'>Resume</button></a>
        </li>
      </ul>
    </div>
  )
}
