import React from 'react';
import './ProjectCard.css';
import sample from '../content/sample.jpg';

export default function ProjectCard({ project }) {
  const right = {
    direction: 'rtl',
    textAlign: 'left'
  }

  const left = {
    direction: 'ltr',
    textAlign: 'right'
  }

  return (
    <li className='card-container' style={(project.id % 2 === 0 ? right : left)}>
      <h3>Featured</h3>
      <h1>
        {project.title}
      </h1>
      <div className='description-and-photo'>
        <img src={sample} className='project-photo' alt={project.title} />
        <div className='project-description' style={{ textAlign: 'left', direction: 'ltr' }}>
          {project.description}
          <div className='tech-stack'>
            {project.stack.map(x => <span key={x} className='monospace'> {x} </span>)}
          </div>
          <div className='project-links'>
            {project.repo && <a href={project.repo} rel="noopener noreferrer" target='_blank'>
              <i className="fab fa-github" />
            </a>}
            <a href={project.link} rel="noopener noreferrer" target='_blank'>
              <i className="fas fa-external-link-alt" />
            </a>
          </div>
        </div>

      </div>
    </li>
  )
}
