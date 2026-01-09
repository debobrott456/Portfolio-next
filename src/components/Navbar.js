import React, { useState } from 'react';

const Navbar = ({ activeSection, setActiveSection, darkMode, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'about', label: 'About', icon: 'person' },
    { id: 'skills', label: 'Skills', icon: 'code' },
    { id: 'projects', label: 'Projects', icon: 'folder' },
    { id: 'education', label: 'Education', icon: 'school' },
    { id: 'contact', label: 'Contact', icon: 'mail' }
  ];

  const scrollToSection = (sectionId) => {
    if (sectionId === 'home') {
      // Scroll to top for home
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Scroll to specific section
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  const handleHireMe = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary text-gradient px-4 py-2 rounded-full bg-primary/10 backdrop-blur-md border border-primary/20">
                Joy Kumar
              </span>
            </div>
            
            {/* Centered Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 flex-1 justify-center">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors ${
                    activeSection === item.id
                      ? 'text-primary'
                      : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            
            {/* Right Side Buttons */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={handleHireMe}
                className="hidden sm:block bg-gradient-to-r from-primary to-secondary text-white px-5 py-2 rounded-full text-sm font-medium transition shadow-lg shadow-primary/30 hover:shadow-lg hover:shadow-primary/40 active:scale-95"
              >
                Hire Me
              </button>
              
              <button
                onClick={toggleTheme}
                className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-2 rounded-full transition-colors"
                aria-label="Toggle Dark Mode"
              >
                <span className={`material-icons-round ${darkMode ? 'hidden' : 'block'}`}>
                  dark_mode
                </span>
                <span className={`material-icons-round ${darkMode ? 'block' : 'hidden'}`}>
                  light_mode
                </span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden text-gray-600 dark:text-gray-300 focus:outline-none p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle Mobile Menu"
              >
                <span className={`material-icons-round text-2xl transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}>
                  {isMobileMenuOpen ? 'close' : 'menu'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          
          {/* Mobile Menu Panel */}
          <div className="fixed top-16 left-0 right-0 bg-background-light dark:bg-background-dark border-b border-gray-200 dark:border-gray-800 shadow-xl">
            <nav className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeSection === item.id
                      ? 'bg-primary/10 text-primary border border-primary/20'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary'
                  }`}
                >
                  <span className="material-icons-round text-xl">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
              
              {/* Mobile Hire Me Button */}
              <button 
                onClick={() => {
                  handleHireMe();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full mt-6 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-medium transition shadow-lg shadow-primary/30 hover:shadow-lg hover:shadow-primary/40 active:scale-95"
              >
                Hire Me
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;