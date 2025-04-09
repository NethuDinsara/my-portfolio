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
      <div className="about-me-content">
        <p>
          Hello! I'm Dinsara Hettihewa, a passionate and creative Software Engineering undergrad focused on building innovative full-stack solutions. My journey in technology is fueled by a desire to create impactful digital experiences.
        </p>
        <p>
          Skilled in React, React Native, Spring Boot, and Node.js, with database experience in MySQL and MongoDB. My leadership and teamwork abilities are cultivated through volunteering in Leo and Rotaract. I'm eager to contribute to collaborative and innovative projects.
        </p>
        <div className="hover-container">
          {isHovered && <p className="hover-message">Thanks for exploring my profile!</p>}
        </div>
      </div>
      <img className="" src="src/assets/images/dinsara.png" alt="Your Profile" />
    </div>
  );
}

export default AboutMe;