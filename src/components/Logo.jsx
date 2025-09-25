import React from 'react';
import logo from '../images/Postly.png'; 
function Logo({ width = '100px' }) {
  return (
    <img 
      src={logo} 
      alt="Logo" 
      style={{ width, height: 'auto' }} 
    />
  );
}



export default Logo;
