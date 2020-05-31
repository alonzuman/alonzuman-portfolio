import React, { useState } from 'react';
import './ToggleSwitch.css';

export default function ToggleSwitch({ themeToggler }) {
  const [isClicked, setIsClicked] = useState(false);

  const toggle = () => {
    setIsClicked(!isClicked);
    themeToggler()
  }

  return (
    <div className={`switch ${isClicked ? 'background' : ''}`}>
      <span onClick={toggle} className={`slider ${(isClicked ? 'clicked' : '')}`}></span>
    </div>
  )
}
