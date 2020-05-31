import React from 'react';
import './Contact.css'

export default function Contact() {
  return (
    <div className='contact-container'>
      <h1> Get in Touch </h1>
      <p>I’m always looking for interesting opportunities and currently open for interesting offers.</p>
      <a href='mailto:alonzuman7@gmail.com'>
        <button className='primary-button'>Hit me up</button>
      </a>
    </div>
  )
}
