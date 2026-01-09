import React from 'react';

const Projects = () => {
  const featuredProjects = [
    {
      title: 'FinTech Dashboard',
      description: 'A comprehensive financial analytics platform with real-time data visualization and AI insights.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['React Native', 'TypeScript', 'Firebase'],
      category: 'Mobile'
    },
    {
      title: 'StreamFlow App',
      description: 'High-performance video streaming application designed for content creators with minimal latency.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Next.js', 'Tailwind', 'AWS'],
      category: 'Web'
    },
    {
      title: 'API Gateway',
      description: 'Secure and scalable API gateway handling millions of requests with advanced caching.',
      image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Node.js', 'Docker', 'Redis'],
      category: 'Backend'
    }
  ];

  const allProjects = [
    { title: 'Health Tracker', category: 'Mobile App', icon: 'medication', color: 'from-blue-600 to-cyan-500' },
    { title: 'E-Commerce', category: 'Web Platform', icon: 'shopping_bag', color: 'from-blue-500 to-blue-700' },
    { title: 'Eco Friendly', category: 'Landing Page', icon: 'eco', color: 'from-cyan-500 to-blue-600' },
    { title: 'Design System', category: 'UI Kit', icon: 'palette', color: 'from-blue-500 to-cyan-400' },
    { title: 'AI Chatbot', category: 'Integration', icon: 'smart_toy', color: 'from-sky-500 to-blue-700' }
  ];

  const categories = ['All Projects', 'Web App', 'Mobile iOS', 'UI/UX Design'];

  return (
    <div className="bg-background-dark text-white font-sans antialiased min-h-screen relative pb-24 selection:bg-primary selection:text-white pt-20">
      <main className="px-4 max-w-7xl mx-auto">
        {/* Filter Categories */}
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-2 mb-6">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all active:scale-95 ${
                index === 0
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25'
                  : 'bg-surface-dark border border-white/10 text-gray-400 hover:border-primary/50 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Projects */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="material-icons-round text-primary text-base">star</span>
              Featured
            </h2>
            <button className="text-xs font-medium text-primary hover:text-secondary transition-colors">View All</button>
          </div>
          
          <div className="flex overflow-x-auto snap-x mandatory no-scrollbar gap-5 pb-4 -mx-4 px-4">
            {featuredProjects.map((project, index) => (
              <div key={index} className="snap-center flex-shrink-0 w-80 bg-[#0F0F0F] rounded-2xl overflow-hidden border border-white/5 shadow-xl shadow-black/50 group">
                <div className="h-44 w-full bg-gray-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] to-transparent opacity-80 z-10"></div>
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{backgroundImage: `url(${project.image})`}}
                  ></div>
                  <div className="absolute top-3 right-3 z-20 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md border border-white/10">
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">{project.category}</span>
                  </div>
                </div>
                <div className="p-5 relative z-20 -mt-2">
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 text-[10px] rounded bg-primary/10 text-primary border border-primary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* All Projects Grid */}
        <section>
          <h2 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
            <span className="material-icons-round text-secondary text-base">grid_view</span>
            All Projects
          </h2>
          
          <div className="grid grid-cols-2 gap-4">
            {allProjects.map((project, index) => (
              <div key={index} className="glass-card rounded-2xl p-4 flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors cursor-pointer">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${project.color} flex items-center justify-center mb-3 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform`}>
                  <span className="material-icons-round text-white">{project.icon}</span>
                </div>
                <h3 className="font-semibold text-sm text-gray-200">{project.title}</h3>
                <span className="text-xs text-gray-500 mt-1">{project.category}</span>
              </div>
            ))}
            
            {/* Coming Soon Card */}
            <div className="glass-card rounded-2xl p-4 flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors cursor-pointer border-dashed border-white/10">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <span className="material-icons-round text-gray-400">add</span>
              </div>
              <h3 className="font-semibold text-sm text-gray-400">Coming Soon</h3>
              <span className="text-xs text-gray-600 mt-1">Next Project</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Projects;