import React from 'react';
import './WorkCard.css'

export default function WorkCard({ work }) {
  return (
    <div className='work-card'>
      <span className='monospace'>{work.dates}</span>
      <h1>{work.role} <span className='primary-color'><a href={work.link} rel='noopener noreferrer' target='_blank'>@{work.company}</a></span></h1>
      <p>{work.description}</p>
      <ul className='work-bullets'>
        {work.bullets.map(bullet => <li>{bullet}</li>)}
      </ul>
    </div>
  )
}
