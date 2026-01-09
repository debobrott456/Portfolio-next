const Skills = () => {
  return (
    <div className="bg-background-dark text-white font-sans antialiased w-full relative py-16 overflow-x-hidden">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          My <span className="bg-gradient-to-r from-primary to-secondary text-gradient">Tech Stack</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Technologies and tools I use to build amazing digital experiences
        </p>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center relative w-full h-[500px] overflow-hidden">
        {/* Background Stars */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-400 rounded-full opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-white rounded-full opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        {/* Central Sun */}
        <div className="relative z-20 flex flex-col items-center justify-center">
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-primary via-blue-500 to-cyan-400 flex items-center justify-center shadow-[0_0_50px_rgba(37,99,235,0.6)] animate-pulse-sun">
            <div className="w-[92%] h-[92%] rounded-full bg-background-dark flex flex-col items-center justify-center text-center p-2 border border-white/10">
              <span className="text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase mb-1">My Tech</span>
              <span className="text-lg font-black tracking-tighter leading-none text-white">STACK</span>
            </div>
          </div>
        </div>

        {/* Orbit Paths */}
        <div className="orbit-path w-[220px] h-[220px]"></div>
        <div className="orbit-path w-[340px] h-[340px]"></div>
        <div className="orbit-path w-[480px] h-[480px]"></div>

        {/* Orbiting Planets */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          {/* React */}
          <div className="orbiting-planet planet-trail" style={{'--orbit-radius': '110px', '--orbit-speed': '15s', '--glow-color': '#61DAFB'}}>
            <div className="glass-icon p-2.5 rounded-xl planet-glow pointer-events-auto">
              <svg className="w-7 h-7 text-[#61DAFB]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.014-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.866.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.014 1.36-.034-.44.572-.895 1.095-1.36 1.56-.465-.467-.92-.992-1.36-1.56z"/>
              </svg>
            </div>
          </div>

          {/* JavaScript */}
          <div className="orbiting-planet planet-trail" style={{'--orbit-radius': '110px', '--orbit-speed': '15s', 'animationDelay': '-7.5s', '--glow-color': '#F7DF1E'}}>
            <div className="glass-icon p-2.5 rounded-xl planet-glow pointer-events-auto">
              <div className="w-7 h-7 bg-[#F7DF1E] flex items-end justify-end p-0.5 rounded-sm">
                <span className="text-black font-bold text-[10px] leading-none">JS</span>
              </div>
            </div>
          </div>

          {/* HTML5 */}
          <div className="orbiting-planet planet-trail" style={{'--orbit-radius': '170px', '--orbit-speed': '25s', '--glow-color': '#E34F26'}}>
            <div className="glass-icon p-2.5 rounded-xl planet-glow pointer-events-auto">
              <svg className="w-7 h-7 text-[#E34F26]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M1.5 0h21l-1.91 21.563L12 24l-8.59-2.437L1.5 0zm17.09 4.413L5.41 4.413l.213 2.622h10.125l-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
              </svg>
            </div>
          </div>

          {/* CSS3 */}
          <div className="orbiting-planet planet-trail" style={{'--orbit-radius': '170px', '--orbit-speed': '25s', 'animationDelay': '-8.3s', '--glow-color': '#1572B6'}}>
            <div className="glass-icon p-2.5 rounded-xl planet-glow pointer-events-auto">
              <svg className="w-7 h-7 text-[#1572B6]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M1.5 0h21l-1.91 21.563L12 24l-8.59-2.437L1.5 0zm17.09 4.413L5.41 4.413l.213 2.622h10.125l-.255 2.716H9.53l.24 2.573h5.777l-.366 3.523-2.91.804-2.956-.81-.188-2.11H6.64l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
              </svg>
            </div>
          </div>

          {/* Tailwind CSS */}
          <div className="orbiting-planet planet-trail" style={{'--orbit-radius': '170px', '--orbit-speed': '25s', 'animationDelay': '-12.5s', '--glow-color': '#38BDF8'}}>
            <div className="glass-icon p-2.5 rounded-xl planet-glow pointer-events-auto">
              <svg className="w-7 h-7 text-[#38BDF8]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
              </svg>
            </div>
          </div>

          {/* Node.js */}
          <div className="orbiting-planet planet-trail" style={{'--orbit-radius': '240px', '--orbit-speed': '40s', '--glow-color': '#339933'}}>
            <div className="glass-icon p-2.5 rounded-xl planet-glow pointer-events-auto">
              <svg className="w-7 h-7 text-[#339933]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
              </svg>
            </div>
          </div>

          {/* Express.js */}
          <div className="orbiting-planet planet-trail" style={{'--orbit-radius': '240px', '--orbit-speed': '40s', 'animationDelay': '-13s', '--glow-color': '#000000'}}>
            <div className="glass-icon p-2.5 rounded-xl planet-glow pointer-events-auto">
              <div className="w-7 h-7 flex items-center justify-center bg-white rounded-sm">
                <span className="text-black text-[8px] font-bold">EX</span>
              </div>
            </div>
          </div>

          {/* MongoDB */}
          <div className="orbiting-planet planet-trail" style={{'--orbit-radius': '240px', '--orbit-speed': '40s', 'animationDelay': '-26s', '--glow-color': '#47A248'}}>
            <div className="glass-icon p-2.5 rounded-xl planet-glow pointer-events-auto">
              <svg className="w-7 h-7 text-[#47A248]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(var(--orbit-radius)) rotate(0deg); }
          to { transform: rotate(360deg) translateX(var(--orbit-radius)) rotate(-360deg); }
        }
        @keyframes pulse-sun {
          0%, 100% { transform: scale(1); box-shadow: 0 0 40px rgba(37, 99, 235, 0.4); }
          50% { transform: scale(1.05); box-shadow: 0 0 70px rgba(37, 99, 235, 0.8); }
        }
        .orbiting-planet {
          position: absolute;
          top: 50%;
          left: 50%;
          margin-top: -24px;
          margin-left: -24px;
          animation: orbit var(--orbit-speed) linear infinite;
        }
        .orbit-path {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border: 1px solid rgba(37, 99, 235, 0.1);
          border-radius: 50%;
          z-index: 0;
        }
        .planet-glow {
          filter: drop-shadow(0 0 8px var(--glow-color));
        }
        .planet-trail::after {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 2px solid transparent;
          border-top-color: rgba(37, 99, 235, 0.3);
          animation: rotate-trail 2s linear infinite;
        }
        @keyframes rotate-trail {
          to { transform: rotate(360deg); }
        }
        .glass-icon {
          background: rgba(18, 18, 18, 0.4);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .animate-pulse-sun {
          animation: pulse-sun 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Skills;