import React from 'react';
import './ProjectCard.css'

export default function ProjectCard({ selectedWork, closeCard }) {

  const techStyle = {
    margin: '0.2rem'
  }

  return (
    <div className='project-card-background'>
      <div className='project-card'>
        <a id='card-close-button' className='close-button' onClick={closeCard}>Close</a>
        <img className='work-photo' src={selectedWork.image} alt="hi" />
        <div className='work-content'>
          <h1>{selectedWork.title}</h1>
          <p>{selectedWork.description}</p>
          <h3>Tech used:</h3>
          <p>{selectedWork.techUsed.map(tech => <button key={tech} style={techStyle} className='primary-button'>{tech}</button>)}</p>
          <h3>My role:</h3>
          <p>{selectedWork.myRole}</p>
          {selectedWork.repository && <><h3>Repo:</h3>
            <a href={selectedWork.repository} target='_blank' >
              <i className="fab fa-github repository-link" />
            </a></>}
          <h3>Website:</h3>
          <a href={selectedWork.link} target='_blank'>
            <button className='primary-button'>View</button></a>
        </div>
      </div>
    </div>
  )
}
