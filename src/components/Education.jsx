import React, { useState } from 'react';

function Education() {
  // const [count,setCount] =useState(0);
  // const increment = ()=>{
  //   setCount(count+1);
  // }

  // return(
  //   <div>
  //     <p>Count: {count}</p>
  //     <button onClick={increment}>Obapan</button>
  //   </div>
// )
  const educationList = [
    {
      institution: 'University of Westminster',
      degree: 'Bachelor of Engineering in Software Engineering',
      years: '2023 - 2027',
      description: 'Second year undergraduate in Software engineering , covering the key software engineering principles, server-side web development , OOP conepts , Data Structures and Algorithms along with having hands on experience with several Tech stacks such as, React, Angular, React Native expo, Springboot, Node, PHP, etc; ',
    },
    {
      institution: 'D.S.Senanayake College, Colombo 07',
      degree: 'Advanced Level - Biological Stream',
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