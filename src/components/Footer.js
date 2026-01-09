import React from 'react';

const Footer = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'about', label: 'About', icon: 'person' },
    { id: 'skills', label: 'Skills', icon: 'code' },
    { id: 'projects', label: 'Projects', icon: 'folder' },
    { id: 'education', label: 'Education', icon: 'school' },
    { id: 'contact', label: 'Contact', icon: 'mail' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-background-dark/95 backdrop-blur-lg border-t border-white/5 pb-5 pt-3 px-6 z-50">
      <div className="flex justify-between items-center max-w-lg mx-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className="flex flex-col items-center gap-1 group"
          >
            <div className={`relative ${activeSection === item.id ? 'text-primary' : 'text-gray-500 group-hover:text-white'}`}>
              {activeSection === item.id && (
                <div className="absolute -top-10 bg-gradient-to-r from-primary to-secondary p-3 rounded-full shadow-lg shadow-primary/40 transform transition-transform hover:-translate-y-1">
                  <span className="material-icons-round text-2xl text-white">{item.icon}</span>
                </div>
              )}
              {activeSection !== item.id && (
                <span className="material-icons-round text-2xl transition-colors">{item.icon}</span>
              )}
            </div>
            <span className={`text-[10px] font-medium transition-colors ${
              activeSection === item.id 
                ? 'text-white mt-8' 
                : 'text-gray-500 group-hover:text-white'
            }`}>
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Footer;