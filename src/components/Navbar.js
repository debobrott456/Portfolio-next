import React from 'react';

const Navbar = ({ activeSection, setActiveSection, darkMode, toggleTheme }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'about', label: 'About', icon: 'person' },
    { id: 'skills', label: 'Skills', icon: 'code' },
    { id: 'projects', label: 'Projects', icon: 'folder' },
    { id: 'education', label: 'Education', icon: 'school' },
    { id: 'contact', label: 'Contact', icon: 'mail' }
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            {/* <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary text-gradient">
              Joy Kumar
            </span> */}
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
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
          
          <div className="flex items-center space-x-4">
            <button className="bg-gradient-to-r from-primary to-secondary text-white px-5 py-2 rounded-full text-sm font-medium transition shadow-lg shadow-primary/30">
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
            
            <button className="md:hidden text-gray-600 dark:text-gray-300 focus:outline-none">
              <span className="material-icons-round text-3xl">menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;