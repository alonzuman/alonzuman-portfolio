import React, { useState, useEffect } from 'react';
import './ToggleSwitch.css';

export default function ToggleSwitch({ themeToggler }) {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    (theme === 'dark') ? setIsClicked(false) : setIsClicked(true);
  }, [])

  const toggle = () => {
    setIsClicked(!isClicked);
    themeToggler()
  }

  return (
    <div className={`switch ${isClicked ? 'background' : ''}`}>
      <i className="fas fa-sun"></i>
      <i className="fas fa-moon"></i>
      <span onClick={toggle} className={`slider ${(isClicked ? 'clicked' : '')}`}></span>
    </div>
  )
}
