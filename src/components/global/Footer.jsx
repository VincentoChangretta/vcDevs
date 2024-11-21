import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer__inner">
            <Link to='/' className='logo'>vcDevs</Link>
        </div>
      </div>
    </footer>
  );
}
