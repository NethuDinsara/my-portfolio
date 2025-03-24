// components/Projects.jsx
import React, { useState } from 'react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'software',
      image: '/api/placeholder/400/300',
      description: 'A full-stack e-commerce platform with payment integration and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      title: 'Mobile App Design',
      category: 'design',
      image: '/api/placeholder/400/300',
      description: 'UI/UX design for a fitness tracking mobile application.',
      technologies: ['Figma', 'Adobe XD', 'Illustrator']
    },
    {
      id: 3,
      title: 'Portfolio Website',
      category: 'software',
      image: '/api/placeholder/400/300',
      description: 'A responsive portfolio website built with modern technologies.',
      technologies: ['React', 'Vite', 'CSS']
    },
    {
      id: 4,
      title: 'Brand Identity Design',
      category: 'design',
      image: '/api/placeholder/400/300',
      description: 'Complete brand identity design for a startup company.',
      technologies: ['Photoshop', 'Illustrator']
    }
  ];
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="project-filter">
          <button 
            className={activeCategory === 'all' ? 'active' : ''} 
            onClick={() => setActiveCategory('all')}
          >
            All
          </button>
          <button 
            className={activeCategory === 'software' ? 'active' : ''} 
            onClick={() => setActiveCategory('software')}
          >
            Software
          </button>
          <button 
            className={activeCategory === 'design' ? 'active' : ''} 
            onClick={() => setActiveCategory('design')}
          >
            Design
          </button>
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div className="project-card" key={project.id} data-aos="fade-up">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href="#" className="btn btn-small">View Details</a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;