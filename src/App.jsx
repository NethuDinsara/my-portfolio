// App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Activities from './components/Activities';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="app">
      <Navbar scrollY={scrollY} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Activities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;