import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} RoboSPACE. All Rights Reserved.</p>
      <p>Empowering the Next Generation of Innovators.</p>
    </footer>
  );
};

export default Footer;