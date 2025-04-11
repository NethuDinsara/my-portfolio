import React, { useState } from 'react';
import profileImage from '../assets/images/dinsara.png'; // Ensure correct import 

function AboutMe() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="about-me-section"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="about-me-content">
        {/* <h2>About Me</h2> Added a title for consistency */}
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
      <img src={profileImage} alt="Your Profile" className="profile-image" /> {/* Added a class for styling */}
    </div>
  );
}

export default AboutMe;