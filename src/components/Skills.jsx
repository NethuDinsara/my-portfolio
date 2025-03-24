import React from 'react';

const Skills = () => {
  const technicalSkills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Node.js', level: 75 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'Python', level: 70 },
  ];
  
  const softSkills = [
    'Problem Solving',
    'Communication',
    'Teamwork',
    'Time Management',
    'Leadership',
    'Adaptability'
  ];
  
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="skills-container">
          <div className="technical-skills">
            <h3>Technical Skills</h3>
            <div className="skill-bars">
              {technicalSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <p>{skill.name}</p>
                    <p>{skill.level}%</p>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                      data-aos="width"
                      data-aos-delay={index * 100}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="soft-skills">
            <h3>Soft Skills</h3>
            <div className="soft-skills-grid">
              {softSkills.map((skill, index) => (
                <div className="soft-skill-item" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;