// Sidebar.js
import React from 'react';
import { Link } from 'react-scroll';
import SpanAnimation from './spanAnimation';
import "../styles/sidebar.css"

function Sidebar() {

  const headings=['What is Radar', 'Doppler Effect', 'Police Siren', 'Water Bug', "Multiple Pulses to Determine Location", 'Track Mode']
  return (
    <div className='sidebar-container' style={{
      position: 'fixed',
      width: '200px',
      height: '100%',
      padding: '10px'
    }}>
    
      <ul>
        <h1>Tutorial</h1>
        <SpanAnimation/>
      {headings.map((heading) => (
        <li>
          <Link className="link" to={heading} smooth={true} duration={500}>
            {heading}
          </Link>
        </li>
      ))}
    </ul>
    </div>
  );
}

export default Sidebar;
