import React from 'react';

function Skills() {
  const skillsList = [
    { name: 'JavaScript', proficiency: 'Advanced' },
    { name: 'React', proficiency: 'Advanced' },
    { name: 'Node.js', proficiency: 'Intermediate' },
    { name: 'HTML', proficiency: 'Advanced' },
    { name: 'CSS', proficiency: 'Advanced' },
    { name: 'Python', proficiency: 'Intermediate' },
    { name: 'Git', proficiency: 'Proficient' },
    { name: 'SQL', proficiency: 'Intermediate' },
    { name: 'Docker', proficiency: 'Basic' },
  ];

  return (
    <div className="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skillsList.map((skill, index) => (
          <div key={index} className="skill-item">
            <h3>{skill.name}</h3>
            <p>Proficiency: {skill.proficiency}</p>
            {/* You could add a visual representation of proficiency here */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;