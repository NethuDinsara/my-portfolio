// components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="#">YourName</a>
          </div>
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#activities">Activities</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-social">
            <a href="#" aria-label="GitHub">GitHub</a>
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
            <a href="#" aria-label="Twitter">Twitter</a>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} YourName. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;