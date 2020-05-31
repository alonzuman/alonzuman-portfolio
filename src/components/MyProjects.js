import React from 'react';
import './MyProjects.css';
import ProjectCard from './ProjectCard';
import { experience } from '../content/experience/experience';

export default function MyProjects() {
  return (
    <ul>
      {experience.content.stuffThatIBuilt.map(exp => <ProjectCard key={exp.id} project={exp} />)}
    </ul>
  )
}
