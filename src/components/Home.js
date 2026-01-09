import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.jpeg';
import ScrollReveal from './ScrollReveal';

const Home = ({ setActiveSection }) => {


  return (
    <div className="w-full">
      {/* Hero Section */}
      <main className="pt-24 pb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
        >
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-800 rounded-full px-4 py-1.5 shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Available for opportunities</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
                Crafting <br/>
                <span className="bg-gradient-to-r from-primary via-blue-500 to-cyan-400 text-gradient">Scalable Full-Stack</span> <br/>
                Solutions
              </h1>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
                Hi, I'm <strong className="text-gray-900 dark:text-white">Joy Kumar</strong>, a passionate Full-Stack Developer specializing in <strong className="text-gray-900 dark:text-white">MERN Stack & Next.js</strong>. I build high-performance web applications with cutting-edge technologies.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden flex items-center justify-center space-x-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300 shadow-lg shadow-primary/25 group"
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
                <span className="relative z-10">DownLoad Resume</span>
                <span className="material-icons-round text-sm relative z-10">arrow_forward</span>
              </motion.button>
              <motion.button 
                onClick={() => {
                  const projectsSection = document.getElementById('projects');
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative overflow-hidden flex items-center justify-center space-x-2 bg-transparent border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 px-8 py-3.5 rounded-full font-medium transition-all duration-300 group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full"></div>
                <span className="relative z-10">View Projects</span>
              </motion.button>
            </motion.div>

            {/* Resume Download Button */}
            {/* <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col items-center text-center w-full"
            >
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">Interested in the full details?</p>
            
            </motion.div> */}
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200 dark:border-gray-800/50"
            >
              <div>
                <p className="text-3xl font-bold text-primary">4+</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Success Rate</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary flex items-center gap-1">5 <span className="material-icons-round text-xl">star</span></p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Client Rating</p>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="relative mt-8 lg:mt-0 flex justify-center items-center"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/20 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="relative w-full max-w-md aspect-square bg-white/50 dark:bg-surface-dark/50 backdrop-blur-xl rounded-3xl border border-gray-200 dark:border-gray-700 p-6 shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none p-6 font-mono text-xs overflow-hidden leading-relaxed text-gray-900 dark:text-white">
                {`const developer = {
  name: "Tushar",
  skills: ["React", "Node", "Next"],
  hardWorker: true,
  coffee: Infinity
};

function createMagic() {
  return developer.skills.map(skill => 
    createAwesome(skill)
  );
}
// Rendering optimized solution...`}
              </div>
              
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 200 }}
                  className="relative w-40 h-40 rounded-full p-1 bg-gradient-to-tr from-primary to-cyan-400 shadow-xl mb-4"
                >
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-[#121212]">
                    <img 
                      alt="Portrait of Joy Kumar" 
                      className="w-full h-full object-cover" 
                      src={profileImage}
                    />
                  </div>
                </motion.div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-cyan-400 text-gradient">Joy Kumar</h2>
                <p className="text-gray-500 dark:text-gray-400 font-medium">Full-Stack Developer</p>
              </div>
              
              {/* Floating Tech Icons */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute top-10 right-8 p-3 bg-white dark:bg-[#1E1E1E] rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 animate-float text-[#61DAFB]"
              >
                <motion.span 
                  className="material-icons-round text-3xl block"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ 
                    duration: 3, 
                    delay: 1.7, 
                    ease: "linear",
                    repeat: Infinity
                  }}
                >
                  science
                </motion.span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="absolute bottom-20 right-6 p-3 bg-white dark:bg-[#1E1E1E] rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 animate-float-delayed text-[#F7DF1E]"
              >
                <motion.span 
                  className="font-bold font-mono text-xl block"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ 
                    duration: 4, 
                    delay: 1.9, 
                    ease: "linear",
                    repeat: Infinity
                  }}
                >
                  JS
                </motion.span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="absolute bottom-12 left-8 p-3 bg-white dark:bg-[#1E1E1E] rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 animate-float-delayed-2 text-cyan-400"
              >
                <motion.span 
                  className="material-icons-round text-3xl block"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ 
                    duration: 5, 
                    delay: 2.1, 
                    ease: "linear",
                    repeat: Infinity
                  }}
                >
                  code
                </motion.span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Navigation Sections */}
        <ScrollReveal delay={0.2}>
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Explore My <span className="bg-gradient-to-r from-primary to-secondary text-gradient">Portfolio</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Navigate through different sections to learn more about my journey, skills, and work
              </p>
            </div>
          </div>
        </ScrollReveal>
      </main>

      {/* Scroll to top button */}
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 2 }}
        className="fixed bottom-6 right-6 z-40"
      >
        <motion.button 
          whileHover={{ scale: 1.1, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="relative overflow-hidden bg-gradient-to-r from-primary to-secondary text-white p-3 rounded-full shadow-lg shadow-primary/40 transition-all duration-300 flex items-center justify-center group"
        >
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
          <span className="material-icons-round relative z-10">arrow_upward</span>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Home;