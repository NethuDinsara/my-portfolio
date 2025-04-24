import React, { useState } from 'react';
import alphaImg from '../assets/images/alpha.png'
import portFImg from '../assets/images/portfolio.png'
import babbleImg from '../assets/images/babble.png'

const projectsData = [
  {
    id: 1,
    name: 'Landing Page for Alpha Medi Lab',
    category: 'Web',
    description: 'A full-stack e-commerce platform allowing users to browse products, add to cart, and process orders. Implemented user authentication and admin dashboard.',
    technologies: ['React'],
    link: 'https://github.com/NethuDinsara/alpha-medi-lab',
    image: alphaImg,
  },
  {
    id: 2,
    name: 'Supporting App for Kids with Speaking Disabilities',
    category: 'Mobile',
    description: 'A mobile application built with React Native to help users manage their daily tasks, set reminders, and track progress.',
    technologies: ['React Native Expo','Node.js','express','mongodb','ML models', 'Firebase','Version Control'],
    link: '#',
    image: babbleImg,
  },
  {
    id: 3,
    name: 'Real Time Ticketing System',
    category: 'Web',
    description: 'A web-based dashboard for visualizing and analyzing sales data using interactive charts and graphs.',
    technologies: ['SpringBoot','Angular','mySQL','OOP','Threads'],
    link: '#',
    image: alphaImg,
  },
  {
    id: 4,
    name: 'Personal Portfolio Website',
    category: 'Web',
    description: 'My personal portfolio website to showcase my skills, projects, and blog posts. Built with React and styled with modern CSS.',
    technologies: ['React', 'CSS', 'Vite'],
    link: '#',
    image: portFImg,
  },
  {
    id: 5,
    name: 'Personal Finance Tracker',
    category: 'Web',
    description: 'My personal portfolio website to showcase my skills, projects, and blog posts. Built with React and styled with modern CSS.',
    technologies: ['React', 'CSS', 'Vite','Springboot'],
    link: '#',
    image: alphaImg,
  },
  {
    id: 6,
    name: 'Echo Friendly App Design(echofy)',
    category: 'Other',
    description: 'My personal portfolio website to showcase my skills, projects, and blog posts. Built with React and styled with modern CSS.',
    technologies: ['Figma'],
    link: '#',
    image: alphaImg,
  },
  {
    id: 7,
    name: 'Sundown Motor Fest Landing Page',
    category: 'Web',
    description: 'My personal portfolio website to showcase my skills, projects, and blog posts. Built with React and styled with modern CSS.',
    technologies: ['React'],
    link: '#',
    image: alphaImg,
  },
];

function Projects() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === filter);

  const handleViewMore = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects-section">
      <h2>Projects</h2>
      <div className="project-filters">
        <button onClick={() => setFilter('All')} className={filter === 'All' ? 'active' : ''}>All</button>
        <button onClick={() => setFilter('Web')} className={filter === 'Web' ? 'active' : ''}>Web</button>
        <button onClick={() => setFilter('Mobile')} className={filter === 'Mobile' ? 'active' : ''}>Mobile</button>
        <button onClick={() => setFilter('Other')} className={filter === 'Other' ? 'active' : ''}>Other</button>
      </div>
      <div
        className="project-list"
        style={{
          gridTemplateColumns:
            filteredProjects.length === 1
              ? 'minmax(300px, auto)' // Adjust minmax as needed
              : 'repeat(auto-fit, minmax(300px, 1fr))',
        }}
      >
        {filteredProjects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.name} />
            <h3>{project.name}</h3>
            <button className="view-more-btn" onClick={() => handleViewMore(project)}>View More</button>
          </div>
        ))}
      </div>
      
      {selectedProject && (
        <div className="project-modal">
          <div className="modal-content">
            <h3>{selectedProject.name}</h3>
            <p>{selectedProject.description}</p>
            <p>Technologies: {selectedProject.technologies.join(', ')}</p>
            <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">View Project</a>
            <button className="close-modal-btn" onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;