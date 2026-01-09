import React from 'react';
import profileImage from '../assets/profile.jpeg';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';
import Contact from './Contact';

const Home = ({ setActiveSection }) => {


  return (
    <main className="pt-12 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-8 animate-fade-in-up p-5">
          <div className="inline-flex items-center space-x-2 bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-800 rounded-full px-4 py-1.5 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
            </span>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Available for opportunities</span>
          </div>
          
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
              Crafting <br/>
              <span className="bg-gradient-to-r from-primary via-blue-500 to-cyan-400 text-gradient">Scalable Full-Stack</span> <br/>
              Solutions
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
              Hi, I'm <strong className="text-gray-900 dark:text-white">Joy Kumar</strong>, a passionate Full-Stack Developer specializing in <strong className="text-gray-900 dark:text-white">MERN Stack & Next.js</strong>. I build high-performance web applications with cutting-edge technologies.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => setActiveSection('contact')}
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-3.5 rounded-full font-medium transition transform hover:scale-105 shadow-lg shadow-primary/25"
            >
              <span>Let's Connect</span>
              <span className="material-icons-round text-sm">arrow_forward</span>
            </button>
            <button 
              onClick={() => setActiveSection('projects')}
              className="flex items-center justify-center space-x-2 bg-transparent border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 px-8 py-3.5 rounded-full font-medium transition"
            >
              <span>View Projects</span>
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200 dark:border-gray-800/50">
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
          </div>
        </div>
        
        <div className="relative mt-8 lg:mt-0 flex justify-center items-center">
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
              <div className="relative w-40 h-40 rounded-full p-1 bg-gradient-to-tr from-primary to-cyan-400 shadow-xl mb-4">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-[#121212]">
                  <img 
                    alt="Portrait of Joy Kumar" 
                    className="w-full h-full object-cover" 
                    src={profileImage}
                  />
                </div>
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-cyan-400 text-gradient">Joy Kumar</h2>
              <p className="text-gray-500 dark:text-gray-400 font-medium">Full-Stack Developer</p>
            </div>
            
            {/* Floating Tech Icons */}
            <div className="absolute top-10 right-8 p-3 bg-white dark:bg-[#1E1E1E] rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 animate-float text-[#61DAFB]">
              <span className="material-icons-round text-3xl">science</span>
            </div>
            <div className="absolute bottom-20 right-6 p-3 bg-white dark:bg-[#1E1E1E] rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 animate-float-delayed text-[#F7DF1E]">
              <span className="font-bold font-mono text-xl">JS</span>
            </div>
            <div className="absolute bottom-12 left-8 p-3 bg-white dark:bg-[#1E1E1E] rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 animate-float-delayed-2 text-cyan-400">
              <span className="material-icons-round text-3xl">code</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Sections */}
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
      
      {/* Scroll to top button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button className="bg-gradient-to-r from-primary to-secondary text-white p-3 rounded-full shadow-lg shadow-primary/40 transition transform hover:scale-110 flex items-center justify-center">
          <span className="material-icons-round">arrow_upward</span>
        </button>
      </div>
      <section>
         <About/>
      </section>
      <section>
        <Skills/>
      </section>
      <section>
        <Projects/>
      </section>
      <section>
        <Education/>
      </section>
      <section>
        <Contact/>
      </section>


    </main>

   
  );
};

export default Home;