// Sidebar.js
import React from 'react';
import { Link } from 'react-scroll';

function Sidebar() {
  return (
    <div style={{
      position: 'fixed',
      width: '200px',
      height: '100%',
      background: '#f8f9fa',
      padding: '10px'
    }}>
      <h3>Navigation</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{cursor:"pointer"}}>
          <Link to="section1" smooth={true} duration={500}>Section 1</Link>
        </li>
        <li  style={{cursor:"pointer"}}>
          <Link to="section2" smooth={true} duration={500}>Section 2</Link>
        </li>
        <li  style={{cursor:"pointer"}}>
          <Link to="section3" smooth={true} duration={500}>Section 3</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
