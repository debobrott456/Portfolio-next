import React from 'react';

const Education = () => {
  const achievements = [
    {
      title: "Dean's List",
      description: "Consecutive academic excellence (2022, 2023)",
      icon: "emoji_events"
    },
    {
      title: "Programming",
      description: "Top 10 in Inter-University Contest",
      icon: "terminal"
    }
  ];

  const certifications = [
    {
      title: "Google Cloud Professional",
      issueDate: "Issued Dec 2023",
      logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9uGkFKr9BooyKgB7AJrtoKNli23d2SkpZuoTF8udbLs60XCpW_YOllvUMec-cIepCZYCL2gATtzbEqJozQh9vVOeFIC2vba32PGGHqjIeuHAJhR1rQqsgZ89BLTbc-IUMqdbeFFD_OxGbyvjUiC3MceFXz-3qFLA2FIRFQisvLZvE1CdK2qf3MwHfjxIh7jyrny1_OANOWVgcFXougRyVtCbMjv-8ji6Ip8eLj671Z543UYro_CFMcw1295nAgEt-_tRBKc874EU"
    },
    {
      title: "AWS Solutions Architect",
      issueDate: "Issued Oct 2023",
      logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGTIEAna8rMHbMwI7M9KMnyfBJlwLGu7hg_9QxY7zPE6725JXg5R9aPjS4XiSB0-e9hKxfxBrQSgOmZ0nwXs0W87uphz080p9F0mPMVkEy2h2wZd5Eir6P-PAyRrsWe2HNwXiIbm5gx3q8cRsU1CYza66l9CKAtGNXb7rvTf6QzFpprFx-dshmshg_qYzqniMZT1Ex10inE3ymfRD8nUYYLpC33aHjXktU8c3ABTUnVrgVmPWhB5FMQ0rvydMSyucNfP4gug55D_Q"
    }
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen font-display pt-16">
      {/* Background Glow Effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-glow"></div>
      </div>
      
      {/* Top Navigation Bar */}
      <div className="relative flex h-16 items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 sticky top-16 z-50 border-b border-primary/10">
        <div className="flex size-10 shrink-0 items-center justify-start cursor-pointer">
          <span className="material-symbols-outlined text-primary">arrow_back_ios_new</span>
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10 uppercase tracking-widest">Education</h2>
      </div>
      
      <div className="relative px-4 pb-32">
        {/* Main Education Section */}
        <div className="mt-6 mb-8">
          <div className="glass-card rounded-xl p-6 flex flex-col gap-6">
            {/* University Branding */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/40 overflow-hidden">
                <img 
                  className="w-12 h-12 object-contain" 
                  alt="Stylized University Logo for SUST" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJtYzqUh2o1yDDwUDzaArVjXtwsPKOBv8m-Ethd2wyLaRIaYFUnyjMpqX1EAskukBE48jfR-zsDPxE1d9xgGZRCdJEz3tfKxElrjn3HfsyIh9FHWN-APgKbBR2zjnRYNmY0Im1BBbrBeF1mj4GlGMi1EVTt9VFnNlzyf6H38coLG3_AW_ffQc6GzS0Dj980epKlgyXbvXOncY3ravDaIsRgXz-XDLiYq2EarUJ2zn5wuPWj6nuNGbPXmHTOtBIKORZgZ8f9zVjx_I"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white leading-tight">Shahjalal University of Science & Technology</h1>
                <p className="text-primary font-medium text-sm">Sylhet, Bangladesh</p>
              </div>
            </div>
            
            {/* Degree Info */}
            <div className="space-y-1 border-l-2 border-primary pl-4">
              <p className="text-white text-lg font-semibold">B.Sc. in Computer Science & Engineering</p>
              <p className="text-slate-400 text-sm">2021 — 2025 (Expected)</p>
            </div>
            
            {/* Metrics: CGPA & Progress */}
            <div className="flex flex-col gap-4 bg-black/40 rounded-lg p-4 border border-white/5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">star</span>
                  <p className="text-slate-300 text-sm font-medium">Current CGPA</p>
                </div>
                <p className="text-white font-mono font-bold">3.85 <span className="text-slate-500 font-sans text-xs">/ 4.00</span></p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] uppercase tracking-tighter text-slate-500 font-bold">
                  <span>Degree Progress</span>
                  <span>85% Completed</span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full shadow-[0_0_15px_rgba(59,130,246,0.4)]" style={{width: '85%'}}></div>
                </div>
              </div>
            </div>
            
            {/* CTA */}
            <button className="w-full h-12 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold flex items-center justify-center gap-2 transition-all">
              <span className="material-symbols-outlined text-sm">description</span>
              View Major Coursework
            </button>
          </div>
        </div>
        
        {/* Section Header: Achievements */}
        <div className="flex items-center justify-between px-1 mb-4">
          <h3 className="text-white text-lg font-bold tracking-tight">Academic Achievements</h3>
          <span className="text-primary text-xs font-bold uppercase cursor-pointer">View All</span>
        </div>
        
        {/* Achievement Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="glass-card p-4 rounded-xl flex flex-col gap-3 relative overflow-hidden group">
              <div className="absolute -right-2 -top-2 opacity-10">
                <span className="material-symbols-outlined text-6xl text-primary">workspace_premium</span>
              </div>
              <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">{achievement.icon}</span>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">{achievement.title}</h4>
                <p className="text-slate-400 text-[11px] leading-snug mt-1 italic">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Section Header: Certifications */}
        <div className="flex items-center justify-between px-1 mt-8 mb-4">
          <h3 className="text-white text-lg font-bold tracking-tight">Certifications</h3>
        </div>
        
        {/* Horizontal Certifications Scroll */}
        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
          {certifications.map((cert, index) => (
            <div key={index} className="min-w-[280px] bg-slate-900/50 border border-white/5 p-4 rounded-xl flex items-center gap-4">
              <div className="size-12 rounded bg-white flex items-center justify-center p-1 shrink-0">
                <img className="object-contain" alt={`${cert.title} Badge`} src={cert.logo} />
              </div>
              <div>
                <h4 className="text-white text-sm font-bold">{cert.title}</h4>
                <p className="text-slate-500 text-xs">{cert.issueDate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;