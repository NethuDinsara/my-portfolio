import React, { useState } from 'react';

function Education() {
  const educationList = [
    {
      institution: 'University of Example',
      degree: 'Bachelor of Science in Computer Science',
      years: '2018 - 2022',
      description: 'Graduated with honors, focusing on software engineering, algorithms, and data structures. Actively involved in the programming club and hackathons.',
    },
    {
      institution: 'Online Course Platform',
      degree: 'Advanced React Development Certificate',
      years: '2022 - 2023',
      description: 'Completed an intensive online program covering advanced React concepts, state management (Redux, Context API), testing, and performance optimization.',
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div className="education-section">
      <h2>Education</h2>
      {educationList.map((edu, index) => (
        <div key={index} className="education-item">
          <h3>{edu.institution}</h3>
          <p className="degree">{edu.degree}</p>
          <p className="years">{edu.years}</p>
          {expandedIndex === index && <p className="description">{edu.description}</p>}
          <button onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}>
            {expandedIndex === index ? 'Show Less' : 'Show More'}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Education;