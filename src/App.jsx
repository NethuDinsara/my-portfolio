import React, { useRef } from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  const blogsRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="portfolio-container">
      <Navbar
        scrollToAboutMe={() => scrollToSection(aboutMeRef)}
        scrollToSkills={() => scrollToSection(skillsRef)}
        scrollToEducation={() => scrollToSection(educationRef)}
        scrollToProjects={() => scrollToSection(projectsRef)}
        scrollToBlogs={() => scrollToSection(blogsRef)}
        scrollToFooter={() => scrollToSection(footerRef)}
      />

      <header className="hero-section" ref={aboutMeRef}>
        <AboutMe />
      </header>

      <section className="skills-section" ref={skillsRef}>
        <Skills />
      </section>

      <section className="education-section" ref={educationRef}>
        <Education />
      </section>

      <section className="projects-section" ref={projectsRef}>
        <Projects />
      </section>

      <section className="blogs-section" ref={blogsRef}>
        <Blogs />
      </section>

      <footer className="footer-section" ref={footerRef}>
        <Footer />
      </footer>
    </div>
  );
}

export default App;