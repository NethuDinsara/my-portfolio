import React, { useState } from 'react';

function Skills() {
  const allSkills = [
    { name: 'JavaScript', image: 'https://via.placeholder.com/50/F7DF1E/000000?Text=JS', percentage: 85 },
    { name: 'React', image: 'https://via.placeholder.com/50/61DAFB/000000?Text=R', percentage: 90 },
    { name: 'Node.js', image: 'https://via.placeholder.com/50/68A063/FFFFFF?Text=N', percentage: 75 },
    { name: 'HTML', image: 'https://via.placeholder.com/50/E34F26/FFFFFF?Text=H', percentage: 95 },
    { name: 'CSS', image: 'https://via.placeholder.com/50/1572B6/FFFFFF?Text=C', percentage: 92 },
    { name: 'Python', image: 'https://via.placeholder.com/50/3776AB/FFFFFF?Text=P', percentage: 70 },
    { name: 'Git', image: 'https://via.placeholder.com/50/F05032/FFFFFF?Text=G', percentage: 80 },
    { name: 'SQL', image: 'https://via.placeholder.com/50/00758F/FFFFFF?Text=S', percentage: 65 },
    { name: 'Docker', image: 'https://via.placeholder.com/50/2496ED/FFFFFF?Text=D', percentage: 50 },
    { name: 'TypeScript', image: 'https://via.placeholder.com/50/007ACC/FFFFFF?Text=TS', percentage: 88 },
    { name: 'Vue.js', image: 'https://via.placeholder.com/50/4FC08D/FFFFFF?Text=V', percentage: 60 },
    { name: 'Angular', image: 'https://via.placeholder.com/50/DD0031/FFFFFF?Text=A', percentage: 40 },
    { name: 'MongoDB', image: 'https://via.placeholder.com/50/47A248/FFFFFF?Text=M', percentage: 78 },
    { name: 'Express', image: 'https://via.placeholder.com/50/404D59/FFFFFF?Text=E', percentage: 72 },
    { name: 'Next.js', image: 'https://via.placeholder.com/50/000000/FFFFFF?Text=Nxt', percentage: 85 }
  ];

  const skillsPerPage = 5;
  const totalPages = Math.ceil(allSkills.length / skillsPerPage);
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * skillsPerPage;
  const currentSkills = allSkills.slice(startIndex, startIndex + skillsPerPage);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const goToNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages - 1));
  };

  const goToPreviousPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 0));
  };

  return (
    <div className="skills-section">
      <h2>Skills</h2>
      <div className="skills-carousel-container">
        <div className="skills-carousel">
          {currentSkills.map((skill, index) => (
            <div key={index} className="skill-item">
              <img src={skill.image} alt={skill.name} className="skill-image" />
              <h3>{skill.name}</h3>
              <span className="skill-percentage">{skill.percentage}%</span>
            </div>
          ))}
        </div>
        <div className="carousel-navigation">
          <button onClick={goToPreviousPage} disabled={currentPage === 0}>
            &larr;
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`page-indicator ${currentPage === index ? 'active' : ''}`}
              onClick={() => goToPage(index)}
            />
          ))}
          <button onClick={goToNextPage} disabled={currentPage === totalPages - 1}>
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Skills;