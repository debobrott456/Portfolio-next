import React from 'react';
import freelancingImage from '../assets/Freelancing2026-01-09 205705.png';
import dariaImage from '../assets/daria-nepriakhina-xY55bL5mZAM-unsplash.jpg';
import yuraImage from '../assets/yura-fresh-n31x0hhnzOs-unsplash.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'Freelancing Marketplace',
      description: 'A comprehensive platform connecting freelancers with clients. Features include project posting, bidding system, secure payments, and real-time messaging.',
      image: freelancingImage,
      tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      demoLink: 'https://monumental-empanada-6f058c.netlify.app/',
      githubLink: 'https://github.com/debobrott456/Freelancing-marketplace'
    },
    {
      title: 'Book Courier Service',
      description: 'An efficient book delivery service platform with order tracking, delivery management, and customer notifications system.',
      image: dariaImage,
      tags: ['Next.js', 'Express', 'PostgreSQL', 'Stripe'],
      demoLink: 'https://benevolent-kangaroo-ee0752.netlify.app/',
      githubLink: 'https://github.com/debobrott456/Book-Courier-Project'
    },
    {
      title: 'G-App Store',
      description: 'A modern mobile app store with advanced search, app reviews, secure downloads, and personalized recommendations for users.',
      image: yuraImage,
      tags: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
      demoLink: 'https://fabulous-conkies-696905.netlify.app',
      githubLink: 'https://github.com/debobrott456/Hero-App-store'
    }
  ];

  return (
    <div className="bg-background-dark text-white font-sans antialiased relative py-16 selection:bg-primary selection:text-white overflow-x-hidden">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          My Featured <span className="bg-gradient-to-r from-primary to-secondary text-gradient">Projects</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          A showcase of my recent work and creative solutions (3 Projects)
        </p>
      </div>

      <main className="px-4 max-w-7xl mx-auto">
        {/* Projects Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#0F0F0F] rounded-2xl overflow-hidden border border-white/5 shadow-xl shadow-black/50 group hover:border-primary/20 transition-all duration-300">
              {/* Project Image */}
              <div className="h-48 w-full bg-gray-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent opacity-60 z-10"></div>
                <img 
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Project Content */}
              <div className="p-5 relative z-20">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col gap-2">
                  <a
                    href={project.demoLink} target='_blank'
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-lg font-medium text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 group/btn"
                  >
                    <span className="material-symbols-outlined text-sm">visibility</span>
                    <span>View Demo</span>
                    <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                  </a>
                  <a
                    href={project.githubLink} target='_blank'
                    className="w-full bg-transparent border border-gray-600 text-gray-300 hover:text-white hover:border-primary/50 px-4 py-2 rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 group/btn"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>GitHub Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Projects;