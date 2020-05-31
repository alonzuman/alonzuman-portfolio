import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className='about-container'>
      <div className='about-content'>
        <p>Hi! I’m Alon, a web developer based in Tel Aviv, IL.</p>
        <p>My passion is for creating beautiful things. Whether websites or applications, I love being involved with stunning projects for people to enjoy (emoji).</p>
        <p>I’m a well-organized person, problem solver, independent and have extremely high attention to details.</p>
        <p>While founding my first startup (<a rel="noopener noreferrer" target='_blank' href='https://leesa.rentals'>Leesa</a>), I got to play around with HTML, CSS and Javascript, and that was when I first got to code, and what eventually got me to enroll with le wagon full stack web developer bootcamp. During the bootcamp (that focused on Ruby on Rails framework), I got more and more curious about other web frameworks, and fell in love with modern javascript frameworks.</p>
        <p>Here is a list of technologies I’ve been working with recently:</p>
      ['Javascript (ES6)', 'React', 'node.js', 'Vue', 'Ruby on Rails', 'HTML', 'CSS (& scss)', 'Shopify', 'Wix', 'Webflow']
      </div>
      <div className='about-photo-background'>
        <img alt='me' src='https://avatars3.githubusercontent.com/u/57261095?s=460&u=e72013c26047bf55f8c3ea0c1b9b2b075feae9a1&v=4' className='about-photo' />
      </div>
    </div>
  )
}
