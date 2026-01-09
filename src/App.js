import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home setActiveSection={setActiveSection} />;
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'education':
        return <Education />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActiveSection={setActiveSection} />;
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
        {renderSection()}
      </main>
      
      <Footer 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
      />
    </div>
  );
}

export default App;
