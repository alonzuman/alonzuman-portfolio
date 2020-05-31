import React from 'react';
import './SocialIcons.css';

export default function SocialIcons() {
  return (
    <ul className='social-icons'>
      <li className='social-icon'>
        <a href='https://github.com/alonzuman' rel="noopener noreferrer" target='_blank'>
          <i className="fab fa-github" />
        </a>
      </li>
      <li className='social-icon'>
        <a href='https://facebook.com/alonzuman' rel="noopener noreferrer" target='_blank'>
          <i className="fab fa-facebook-f" />
        </a>
      </li>
      <li className='social-icon'>
        <a href='https://www.linkedin.com/in/alon-zuman-018365193/' rel="noopener noreferrer" target='_blank'>
          <i className="fab fa-linkedin-in" />
        </a>
      </li>
      <li className='social-icon'>
        <a href='https://instagram.com/alonzuman' rel="noopener noreferrer" target='_blank'>
          <i className="fab fa-instagram" />
        </a>
      </li>
    </ul>
  )
}
