import React from 'react';

function Footer() {
  return (
    <footer className="footer-section">
      <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
        <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
        <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
        <a href="mailto:john.doe@example.com" aria-label="Email"><i className="fas fa-envelope"></i></a>
      </div>
      <p>Contact: john.doe@example.com</p>
    </footer>
  );
}

export default Footer;