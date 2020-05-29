import React, { useState } from 'react';
import Work from './Work';
import { projects, works } from '../data';

export default function WorkAndProjects() {
  const [isWork, setIsWork] = useState(true)
  return (
    <div>
      <div className='flex-header'>
        <h1 className='slow-fade'>View My:
          <button
            className={`primary-button ${isWork ? 'selected-button' : ''}`}
            onClick={() => { setIsWork(true) }}>
            Work
      </button>
          <button
            className={`primary-button ${!isWork ? 'selected-button' : ''}`}
            onClick={() => setIsWork(false)}>
            Projects
      </button>
        </h1>
      </div>
      {!isWork && <Work works={projects} />}
      {isWork && <Work works={works} />}
    </div>
  )
}
