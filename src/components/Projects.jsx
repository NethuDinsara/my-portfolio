import React, { useState } from 'react';

const projectsData = [
  {
    id: 1,
    name: 'E-commerce Platform',
    category: 'Web',
    description: 'A full-stack e-commerce platform allowing users to browse products, add to cart, and process orders. Implemented user authentication and admin dashboard.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    link: '#',
    image: 'https://via.placeholder.com/600/3498db/FFFFFF?Text=E-commerce%20Platform',
  },
  {
    id: 2,
    name: 'Mobile Task Manager App',
    category: 'Mobile',
    description: 'A mobile application built with React Native to help users manage their daily tasks, set reminders, and track progress.',
    technologies: ['React Native', 'Firebase'],
    link: '#',
    image: 'https://via.placeholder.com/600/2ecc71/FFFFFF?Text=Task%20Manager%20App',
  },
  {
    id: 3,
    name: 'Data Visualization Dashboard',
    category: 'Web',
    description: 'A web-based dashboard for visualizing and analyzing sales data using interactive charts and graphs.',
    technologies: ['React', 'Chart.js', 'Python', 'Flask'],
    link: '#',
    image: 'https://via.placeholder.com/600/e67e22/FFFFFF?Text=Data%20Dashboard',
  },
  {
    id: 4,
    name: 'Personal Portfolio Website',
    category: 'Web',
    description: 'My personal portfolio website to showcase my skills, projects, and blog posts. Built with React and styled with modern CSS.',
    technologies: ['React', 'CSS', 'Vite'],
    link: '#',
    image: 'https://via.placeholder.com/600/9b59b6/FFFFFF?Text=Portfolio%20Website',
  },
];

function Projects() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === filter);

  return (
    <div className="projects-section">
      <h2>Projects</h2>
      <div className="project-filters">
        <button onClick={() => setFilter('All')} className={filter === 'All' ? 'active' : ''}>All</button>
        <button onClick={() => setFilter('Web')} className={filter === 'Web' ? 'active' : ''}>Web</button>
        <button onClick={() => setFilter('Mobile')} className={filter === 'Mobile' ? 'active' : ''}>Mobile</button>
        <button onClick={() => setFilter('Other')} className={filter === 'Other' ? 'active' : ''}>Other</button>
      </div>
      <div className="project-list">
        {filteredProjects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.name} />
            <div className="project-card-content">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p>Technologies: {project.technologies.join(', ')}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;