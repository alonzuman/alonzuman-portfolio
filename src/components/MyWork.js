import React, { useState } from 'react';
import './MyWork.css';

export default function MyWork() {
  const [tab, setTab] = useState(1);

  return (
    <div className='work-section-content'>
      <div className='tabs-section'>
        <button className={`work-tab ${tab === 1 ? 'selected-tab' : ''}`} onClick={() => setTab(1)}>2020</button>
        <button className={`work-tab ${tab === 2 ? 'selected-tab' : ''}`} onClick={() => setTab(2)}>2019</button>
        <button className={`work-tab ${tab === 3 ? 'selected-tab' : ''}`} onClick={() => setTab(3)}>2018</button>
      </div>
      {tab === 1 && <div className='work-content'>
        <h1>Web developer & Project manager <span className='primary-color'><a rel="noopener noreferrer" href='https://barbiz.shop' target='_blank'>@Barbiz</a></span></h1>
        <span className='monospace'>December 2019 - Present</span>
        <p>Cosmetics brand with over 13k monthly visitors, owned by Bar Zomer.</p>
        <ul>
          <li>
            <h3>What did I do?</h3>
            <p>Web developer, Graphic designer, Project manager.</p>
          </li>
          <li>
            <h3>What did I use?</h3>
            <p>HTML, scss, liquid & Shopify.</p>
          </li>
        </ul>
      </div>}
      {tab === 2 && <div className='work-content'>
        <h1>Co-Founder & Web developer <span className='primary-color'><a href='https://leesa.rentals' rel="noopener noreferrer" target='_blank'>@Leesa</a></span></h1>
        <span className='monospace'>August 2019 - December 2020</span>
        <p>Cosmetics brand with over 13k monthly visitors, owned by Bar Zomer.</p>
        <ul>
          <li>
            <h3>What did I do?</h3>
            <p>Web developer, Graphic designer, Project manager.</p>
          </li>
          <li>
            <h3>What did I use?</h3>
            <p>HTML, scss, liquid & Shopify.</p>
          </li>
        </ul>
      </div>}
      {tab === 3 && <div className='work-content'>
        <h1>Web developer & Project manager <span className='primary-color'><a href='https://zumanjewelry.com' rel="noopener noreferrer" target='_blank'>@Zuman Jewelry</a></span></h1>
        <span className='monospace'>June 2018 - December 2018</span>
        <p>Cosmetics brand with over 13k monthly visitors, owned by Bar Zomer.</p>
        <ul>
          <li>
            <h3>What did I do?</h3>
            <p>Web developer, Graphic designer, Project manager.</p>
          </li>
          <li>
            <h3>What did I use?</h3>
            <p>HTML, scss, liquid & Shopify.</p>
          </li>
        </ul>
      </div>}
    </div>
  )
}
