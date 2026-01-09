import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import profileImage from '../assets/profile.jpeg';

// Animated Tech Stack Progress Component
const TechStackProgress = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const skills = [
    { name: 'React & Next.js', level: 'Expert', percentage: 95, color: '#61DAFB', icon: 'R' },
    { name: 'Node.js & Express', level: 'Advanced', percentage: 90, color: '#339933', icon: 'N' },
    { name: 'MongoDB & SQL', level: 'Advanced', percentage: 85, color: '#47A248', icon: 'M' }
  ];

  return (
    <div ref={ref} className="space-y-3">
      {skills.map((skill, index) => (
        <div key={index} className="flex items-center gap-3">
          <div 
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: `${skill.color}20` }}
          >
            <span className="text-sm font-bold" style={{ color: skill.color }}>
              {skill.icon}
            </span>
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center mb-1">
              <span className="text-white text-sm font-medium">{skill.name}</span>
              <span className="text-gray-400 text-xs">{skill.level}</span>
            </div>
            <div className="w-full h-1.5 bg-gray-700/50 rounded-full overflow-hidden">
              <motion.div 
                className="h-full rounded-full"
                style={{ backgroundColor: skill.color }}
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.percentage}%` } : { width: 0 }}
                transition={{ 
                  duration: 1.5, 
                  delay: index * 0.2,
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const About = () => {
  return (
    <div className="relative w-full">
      {/* Background Effects */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full pointer-events-none z-0"></div>
      
      <div className="relative z-10 px-6 max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8 justify-center">
          <div className="relative w-20 h-20 shrink-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-cyan-400 rounded-full blur animate-pulse"></div>
            <div className="relative w-full h-full rounded-full bg-surface-dark border-2 border-white/10 flex items-center justify-center overflow-hidden">
              <img 
                src={profileImage} 
                alt="Joy Kumar" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 border-2 border-background-dark rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-[12px] text-white font-bold">check</span>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white mb-1">About Me</h1>
            <p className="text-gray-400 text-sm font-body leading-snug">Developer, Creator, & Tech Enthusiast building digital dreams.</p>
          </div>
        </div>
        
        {/* Cards Grid - 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Journey Timeline */}
          <div className="glass-card rounded-2xl p-6 animate-float transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/20 rounded-lg text-primary">
                <span className="material-symbols-outlined">timeline</span>
              </div>
              <h2 className="text-xl font-bold text-white">My Coding Journey</h2>
            </div>
            <div className="relative pl-4 ml-2 border-l border-white/10 space-y-6 font-body">
              <div className="relative">
                <div className="absolute -left-[21px] top-1.5 w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                <span className="text-xs text-primary font-bold uppercase tracking-wider mb-1 block">Present</span>
                <h3 className="text-white font-semibold">Senior Frontend Engineer</h3>
                <p className="text-gray-400 text-xs mt-1">Leading scalable architecture and mentoring junior devs.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[21px] top-1.5 w-3 h-3 bg-white/20 rounded-full border border-primary/50"></div>
                <span className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1 block">2021</span>
                <h3 className="text-white font-semibold">Full Stack Developer</h3>
                <p className="text-gray-400 text-xs mt-1">Built complex web apps and mastered React & Node.js.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[21px] top-1.5 w-3 h-3 bg-white/20 rounded-full border border-primary/50"></div>
                <span className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1 block">2018</span>
                <h3 className="text-white font-semibold">Hello World</h3>
                <p className="text-gray-400 text-xs mt-1">Wrote my first line of code. The spark was lit.</p>
              </div>
            </div>
          </div>
          
          {/* What I Enjoy */}
          <div className="glass-card rounded-2xl p-6 animate-float transition-all duration-300" style={{animationDelay: '0.5s'}}>
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                <span className="material-symbols-outlined">code_blocks</span>
              </div>
              <h2 className="text-xl font-bold text-white">Works I Enjoy</h2>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/5 border border-white/5 rounded-xl p-3 flex flex-col items-center text-center gap-2 hover:bg-white/10 transition-colors">
                <span className="material-symbols-outlined text-blue-400">dns</span>
                <span className="text-xs text-gray-300 font-medium">Scalable Architecture</span>
              </div>
              <div className="bg-white/5 border border-white/5 rounded-xl p-3 flex flex-col items-center text-center gap-2 hover:bg-white/10 transition-colors">
                <span className="material-symbols-outlined text-cyan-400">touch_app</span>
                <span className="text-xs text-gray-300 font-medium">UI Interactions</span>
              </div>
              <div className="bg-white/5 border border-white/5 rounded-xl p-3 flex flex-col items-center text-center gap-2 hover:bg-white/10 transition-colors">
                <span className="material-symbols-outlined text-indigo-400">bolt</span>
                <span className="text-xs text-gray-300 font-medium">Performance</span>
              </div>
              <div className="bg-white/5 border border-white/5 rounded-xl p-3 flex flex-col items-center text-center gap-2 hover:bg-white/10 transition-colors">
                <span className="material-symbols-outlined text-emerald-400">devices</span>
                <span className="text-xs text-gray-300 font-medium">Responsive Design</span>
              </div>
            </div>
          </div>
          
          {/* Technical Skills */}
          <div className="glass-card rounded-2xl p-6 animate-float transition-all duration-300" style={{animationDelay: '1s'}}>
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 bg-green-500/20 rounded-lg text-green-400">
                <span className="material-symbols-outlined">terminal</span>
              </div>
              <h2 className="text-xl font-bold text-white">Tech Stack</h2>
            </div>
            <TechStackProgress />
          </div>
          
          {/* Other Interests */}
          <div className="glass-card rounded-2xl p-6 animate-float transition-all duration-300" style={{animationDelay: '1.5s'}}>
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400">
                <span className="material-symbols-outlined">interests</span>
              </div>
              <h2 className="text-xl font-bold text-white">Other Interests</h2>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="group flex flex-col items-center gap-2 cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300 group-hover:-translate-y-1">
                  <span className="material-symbols-outlined text-gray-300 group-hover:text-white text-lg">photo_camera</span>
                </div>
                <span className="text-xs text-gray-400 font-medium">Photography</span>
              </div>
              <div className="group flex flex-col items-center gap-2 cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300 group-hover:-translate-y-1">
                  <span className="material-symbols-outlined text-gray-300 group-hover:text-white text-lg">flight</span>
                </div>
                <span className="text-xs text-gray-400 font-medium">Travel</span>
              </div>
              <div className="group flex flex-col items-center gap-2 cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300 group-hover:-translate-y-1">
                  <span className="material-symbols-outlined text-gray-300 group-hover:text-white text-lg">headphones</span>
                </div>
                <span className="text-xs text-gray-400 font-medium">Music</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium">🚀 Leadership</span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium">🧩 Problem Solving</span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium">🤝 Teamwork</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Me - Full Width */}
        <div className="flex flex-col items-center text-center w-full animate-float" style={{animationDelay: '2s'}}>
          <p className="text-gray-400 text-sm mb-3">Ready to work together?</p>
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="w-full max-w-md relative group cursor-pointer"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-200"></div>
            <div className="relative w-full bg-gradient-to-r from-primary to-secondary rounded-xl px-6 py-4 flex items-center justify-center gap-3 transition-transform active:scale-[0.98] border border-white/10 shadow-[0_0_15px_rgba(37,99,235,0.3)]">
              <span className="material-symbols-outlined text-white font-bold">mail</span>
              <span className="text-white font-bold text-lg">Contact Me</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;