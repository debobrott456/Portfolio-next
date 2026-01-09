import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Force dark mode initially
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    // Intersection Observer to track active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    // Observe all sections
    const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
      localStorage.theme = 'dark';
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-900 dark:text-white font-sans antialiased transition-colors duration-300 min-h-screen relative">
      <Navbar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        darkMode={darkMode}
        toggleTheme={toggleTheme}
      />
      
      <main className="min-h-screen">
        {/* Render all sections at once for smooth scrolling */}
        <section id="home">
          <Home setActiveSection={setActiveSection} />
        </section>
        
        <ScrollReveal delay={0.2}>
          <section id="about">
            <About />
          </section>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <section id="skills">
            <Skills />
          </section>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <section id="projects">
            <Projects />
          </section>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <section id="education">
            <Education />
          </section>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <section id="contact">
            <Contact />
          </section>
        </ScrollReveal>
      </main>
      
      <Footer 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
      />
    </div>
  );
}

export default App;
