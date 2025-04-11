import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faInstagram, // Import the Instagram icon
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className="footer-section">
      <p className="copyright">
        &copy; {new Date().getFullYear()} Dinsara Hettihewa. All rights reserved.
      </p>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/nethu-hettihewa-b84897224/" // Replace with your actual LinkedIn URL
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="social-icon linkedin"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/NethuDinsara" // Replace with your actual GitHub URL
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="social-icon github"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.instagram.com/dinzzara/?igsh=ZHp0ZzFkcHh2azE%3D&utm_source=qr" // Replace with your actual Instagram URL
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="social-icon instagram" // Update the class name
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="mailto:neth.hettihewa@gmail.com"
          aria-label="Email"
          className="social-icon email"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
      <p className="contact-email">Contact: <a href="mailto:neth.hettihewa@gmail.com">neth.hettihewa@gmail.com</a></p>
    </footer>
  );
}

export default Footer;