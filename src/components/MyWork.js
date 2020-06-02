import React, { useState } from 'react';
import { experience } from '../content/experience/experience';
import WorkCard from './WorkCard';
import './MyWork.css';

export default function MyWork() {
  const [tab, setTab] = useState(1);
  const works = experience.content.workExperience


  return (
    <div className='work-section-content'>
      <div className='tabs-section'>
        <button className={`work-tab ${tab === 1 ? 'selected-tab' : ''}`} onClick={() => setTab(1)}>2020</button>
        <button className={`work-tab ${tab === 2 ? 'selected-tab' : ''}`} onClick={() => setTab(2)}>2019</button>
        <button className={`work-tab ${tab === 3 ? 'selected-tab' : ''}`} onClick={() => setTab(3)}>2018</button>
      </div>
      {tab === 1 && <div className='work-content'>
        <WorkCard work={works[0]} />
      </div>}
      {tab === 2 && <div className='work-content'>
        <WorkCard work={works[1]} />
      </div>}
      {tab === 3 && <div className='work-content'>
        <WorkCard work={works[2]} />
      </div>}
    </div>
  )
}
