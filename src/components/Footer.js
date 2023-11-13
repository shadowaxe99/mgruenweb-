import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <p>&copy; {new Date().getFullYear()} Michael Gruen. All rights reserved.</p>
        <div className='social-links'>
          <a href='https://twitter.com/michaelgruen' target='_blank' rel='noopener noreferrer'>Twitter</a>
          <a href='https://linkedin.com/in/michaelgruen' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
