import React, { useState } from 'react';

const Navbar = ({ scrollY }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <nav className={`navbar ${scrollY > 50 ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#" className="logo">Dinsara Hettihewa</a>
        
        <div className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#activities" onClick={() => setMenuOpen(false)}>Activities</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
