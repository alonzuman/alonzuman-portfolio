import React from 'react';
import sample from '../content/sample.jpg';
import './About.css';

export default function About() {
  const tech = ['Javascript (ES6)', 'React', 'node.js', 'Vue', 'Ruby on Rails', 'HTML', 'CSS (& scss)', 'Shopify', 'Webflow'];

  return (
    <div className='about-container'>
      <a href='https://www.github.com/alonzuman' rel='noopener noreferrer' target='_blank'>
        <img alt='me' src={sample} className='about-photo' />
      </a>
      <div className='about-content'>
        <p>I’m Alon, a web developer based in Tel Aviv, IL. I’m a well-organized person, problem solver, independent and have extremely high attention to details.</p>
        <p>While founding my first startup (<a rel="noopener noreferrer" target='_blank' href='https://leesa.rentals'>Leesa</a>), I got to play around with some HTML, CSS and Javascript, and that was when I first got to code. </p>
        <p>I enrolled to <a href='https://www.lewagon.com' target='_blank' rel='noopener noreferrer'>Le Wagon</a>'s full stack developers bootcamp, and during the bootcamp (that focused on Ruby on Rails framework), I got more and more curious about other web technologies, and fell in love with modern javascript front-end frameworks.</p>
        <p>Here is a list of technologies I’ve been using recently:</p>
        {tech.map(x => <span className='monospace'>{x}, </span>)}
      </div>
    </div>
  )
}
