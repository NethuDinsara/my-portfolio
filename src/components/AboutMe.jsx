import React, { useState } from 'react';

function AboutMe() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="about-me-section"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transform: isHovered ? 'scale(1.03)' : 'scale(1)', transition: 'transform 0.3s ease-in-out' }}
    >
      <h2>About Me</h2>
      <img src="https://via.placeholder.com/200/3498db/FFFFFF?Text=JD" alt="Your Profile" />
      <p>
        Hello! I'm John Doe, a passionate and creative full-stack developer with a strong foundation in building scalable and user-friendly web applications. My journey in the world of technology began with a fascination for problem-solving and a desire to bring ideas to life through code.
      </p>
      <p>
        With a background in Computer Science, I've honed my skills in various technologies, including React, Node.js, and modern CSS frameworks. I'm always eager to learn and explore new tools and techniques to enhance my craft and deliver innovative solutions.
      </p>
      {isHovered && <p className="hover-message">Thanks for exploring my profile!</p>}
    </div>
  );
}

export default AboutMe;