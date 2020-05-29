import React from 'react';
import WorkAndProjects from './WorkAndProjects'
import { Link } from 'react-router-dom';
import './Home.css';

const worksStlye = {
  marginTop: '1rem'
}

export default function Home() {
  return (
    <div>
      <div className='hero-content'>
        <h1>Hi, <br></br> I'm Alon,<br></br> web developer.</h1>
      </div>
      <div style={worksStlye}>

        <WorkAndProjects />
      </div>
    </div>
  )
}
