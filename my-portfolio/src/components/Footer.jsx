import React from 'react';
import './Footer.css'

function Footer(props) {
  return (
    <div className='footer'>
      <div className='footer-icon-container'>
      <a rel="noreferrer" target="_blank" href='https://www.linkedin.com/in/nadezda-kallaur/'><img className='footer-icon' alt="linkedin" src="https://i.imgur.com/h6bqRF4.png"/></a>
        <a rel="noreferrer" target="_blank" href='https://github.com/So4inka?tab=repositories'><img className='footer-icon' alt="github" src="https://i.imgur.com/JMMrIY8.png" /></a>
      </div>
    </div>
  );
}

export default Footer;