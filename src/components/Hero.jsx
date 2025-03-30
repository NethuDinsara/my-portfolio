import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const titleRef = useRef(null);
  
  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;
    
    title.classList.add('animate-in');
  }, []);
  
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 ref={titleRef}>Hi, I'm <span className="highlight">Dinsara Hettihewa</span></h1>
          <h2 className="typed-text">I build <span className="highlight">amazing things</span></h2>
          <p>Software Developer | Designer | Volunteer | Spoken English Coach</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            <img src="/src/assets/images/dinsaraStand.png" alt="Your profile" />
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
};

export default Hero;