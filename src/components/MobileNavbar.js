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

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen === true) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <div style={style} className='mobile-navbar'>
      <ToggleSwitch themeToggler={themeToggler} />
      <a className='fas fa-bars icon' onClick={() => setIsOpen(!isOpen)}></a>
      {isOpen && <MobileMenu setIsOpen={setIsOpen} />}
    </div>
  )
}

const MobileMenu = ({ setIsOpen }) => {
  return (
    <div className='mobile-menu-container'>
      <a className='fas fa-times exit-button' onClick={() => setIsOpen(false)} />
      <ul className='mobile-menu'>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        <li>
          <a href='#work'>Work</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
    </div>
  )
}