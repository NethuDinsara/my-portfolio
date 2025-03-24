// components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="image-placeholder">
              <img src="/api/placeholder/400/500" alt="About me" />
            </div>
          </div>
          <div className="about-text">
            <p>Hello! I'm a passionate software developer and designer with a strong interest in creating beautiful, interactive web experiences.</p>
            <p>With expertise in modern web technologies and a keen eye for design, I strive to build applications that are not only functional but also visually appealing and user-friendly.</p>
            <p>When I'm not coding, I enjoy volunteering for community projects and participating in various extracurricular activities that help me grow both personally and professionally.</p>
            <div className="about-stats">
              <div className="stat">
                <h3>2+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>15+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>5+</h3>
                <p>Volunteer Programs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;