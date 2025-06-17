import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import LinkedInIcon from './icons/LinkedInIcon';

const Hero: React.FC = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/assets/documents/Daniela_Rios_CV.pdf';
    link.download = 'Daniela_Rios_CV.pdf';
    link.click();
  };



  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-36">
      {/* Neural Network Animation Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg 
          className="absolute top-20 left-0 w-full h-96 opacity-[0.03]" 
          viewBox="0 0 800 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Neural Network Nodes */}
          {[
            { x: 100, y: 100, delay: 0 },
            { x: 200, y: 80, delay: 0.2 },
            { x: 300, y: 120, delay: 0.4 },
            { x: 400, y: 60, delay: 0.6 },
            { x: 500, y: 100, delay: 0.8 },
            { x: 600, y: 140, delay: 1.0 },
            { x: 700, y: 90, delay: 1.2 },
            { x: 150, y: 200, delay: 0.3 },
            { x: 250, y: 180, delay: 0.5 },
            { x: 350, y: 220, delay: 0.7 },
            { x: 450, y: 160, delay: 0.9 },
            { x: 550, y: 200, delay: 1.1 },
            { x: 650, y: 240, delay: 1.3 },
            { x: 120, y: 300, delay: 0.4 },
            { x: 220, y: 280, delay: 0.6 },
            { x: 320, y: 320, delay: 0.8 },
            { x: 420, y: 260, delay: 1.0 },
            { x: 520, y: 300, delay: 1.2 },
            { x: 620, y: 340, delay: 1.4 },
          ].map((node, index) => (
            <motion.circle
              key={index}
              cx={node.x}
              cy={node.y}
              r="4"
              fill="#1e3a8a"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 1, 0.7, 1],
                scale: [0, 1.2, 0.8, 1],
              }}
              transition={{
                duration: 3,
                delay: node.delay,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          ))}
          
          {/* Neural Network Connections */}
          {[
            { x1: 100, y1: 100, x2: 200, y2: 80 },
            { x1: 200, y1: 80, x2: 300, y2: 120 },
            { x1: 300, y1: 120, x2: 400, y2: 60 },
            { x1: 400, y1: 60, x2: 500, y2: 100 },
            { x1: 500, y1: 100, x2: 600, y2: 140 },
            { x1: 600, y1: 140, x2: 700, y2: 90 },
            { x1: 150, y1: 200, x2: 250, y2: 180 },
            { x1: 250, y1: 180, x2: 350, y2: 220 },
            { x1: 350, y1: 220, x2: 450, y2: 160 },
            { x1: 450, y1: 160, x2: 550, y2: 200 },
            { x1: 550, y1: 200, x2: 650, y2: 240 },
            { x1: 120, y1: 300, x2: 220, y2: 280 },
            { x1: 220, y1: 280, x2: 320, y2: 320 },
            { x1: 320, y1: 320, x2: 420, y2: 260 },
            { x1: 420, y1: 260, x2: 520, y2: 300 },
            { x1: 520, y1: 300, x2: 620, y2: 340 },
            // Vertical connections
            { x1: 100, y1: 100, x2: 150, y2: 200 },
            { x1: 200, y1: 80, x2: 250, y2: 180 },
            { x1: 300, y1: 120, x2: 350, y2: 220 },
            { x1: 400, y1: 60, x2: 450, y2: 160 },
            { x1: 500, y1: 100, x2: 550, y2: 200 },
            { x1: 600, y1: 140, x2: 650, y2: 240 },
            { x1: 150, y1: 200, x2: 120, y2: 300 },
            { x1: 250, y1: 180, x2: 220, y2: 280 },
            { x1: 350, y1: 220, x2: 320, y2: 320 },
            { x1: 450, y1: 160, x2: 420, y2: 260 },
            { x1: 550, y1: 200, x2: 520, y2: 300 },
            { x1: 650, y1: 240, x2: 620, y2: 340 },
          ].map((connection, index) => (
            <motion.line
              key={index}
              x1={connection.x1}
              y1={connection.y1}
              x2={connection.x2}
              y2={connection.y2}
              stroke="#1e3a8a"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 0.8, 1],
                opacity: [0, 0.6, 0.3, 0.6]
              }}
              transition={{
                duration: 4,
                delay: index * 0.1,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          ))}
          
          {/* Data Pulse Effects */}
          {[
            { x: 100, y: 100, targetX: 700, targetY: 90 },
            { x: 120, y: 300, targetX: 620, targetY: 340 },
            { x: 200, y: 80, targetX: 600, targetY: 140 },
          ].map((pulse, index) => (
            <motion.circle
              key={`pulse-${index}`}
              r="2"
              fill="#3b82f6"
              initial={{ 
                cx: pulse.x, 
                cy: pulse.y,
                opacity: 0,
                scale: 0
              }}
              animate={{ 
                cx: [pulse.x, pulse.targetX, pulse.x],
                cy: [pulse.y, pulse.targetY, pulse.y],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0]
              }}
              transition={{
                duration: 6,
                delay: index * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>
      </div>

      {/* Main Content Section - White Background */}
      <div className="flex-1 flex items-center justify-center bg-white pb-6 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight"
            >
              Hi, I'm{' '}
              <span className="text-cyan-600">Daniela</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8"
            >
              <p className="text-lg md:text-xl font-medium text-gray-700 mb-3">
                {personalInfo.title}
              </p>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl text-justify">
                Passionate about transforming data into actionable insights. Committed to driving business value and innovation through advanced analytics, data engineering, and AI-powered solutions.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleDownloadCV}
                className="text-white px-8 py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group"
                style={{ 
                  background: 'linear-gradient(135deg, #4a90e2 0%, #00bcd4 100%)',
                  borderRadius: '16px',
                  minWidth: '180px',
                  height: '56px'
                }}
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download CV
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open('https://linkedin.com/in/daniela-rios-perez/', '_blank')}
                className="bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-400 hover:text-blue-600 px-8 py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group"
                style={{ 
                  borderRadius: '16px',
                  minWidth: '180px',
                  height: '56px'
                }}
              >
                <LinkedInIcon size={20} className="group-hover:scale-110 transition-transform duration-200" />
                LinkedIn
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Elegant Background Glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-100/50 via-purple-50/30 to-cyan-50/40 rounded-full blur-xl opacity-60" />
              
              {/* Profile Image Container */}
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  y: -4
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative w-60 h-60 md:w-72 md:h-72"
              >
                {/* Refined gradient border */}
                <div className="w-full h-full bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 rounded-full p-1 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-full p-2">
                    <div className="w-full h-full rounded-full overflow-hidden shadow-inner">
                      {/* Profile Image */}
                      <img
                        src="/assets/images/daniela_photo.png"
                        alt="Daniela Rios - Economist & Data Professional"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to placeholder if image doesn't exist
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent && !parent.querySelector('.placeholder')) {
                            const placeholder = document.createElement('div');
                            placeholder.className = 'placeholder w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100';
                            placeholder.innerHTML = `
                              <div class="text-center">
                                <div class="w-24 h-24 bg-gradient-to-r from-cyan-400 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                  <span class="text-white text-4xl">👩‍💼</span>
                                </div>
                                <p class="text-gray-600 text-sm">Add your photo to<br/>public/assets/images/<br/>daniela_photo.png</p>
                              </div>
                            `;
                            parent.appendChild(placeholder);
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section - Elegant Background */}
      <div className="bg-gradient-to-r from-slate-100 via-blue-100/70 to-cyan-100/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                4+
              </h3>
              <p className="text-gray-600 font-medium text-xs md:text-sm">Years Experience</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                9+
              </h3>
              <p className="text-gray-600 font-medium text-xs md:text-sm">Featured Projects</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                7+
              </h3>
              <p className="text-gray-600 font-medium text-xs md:text-sm">Technologies</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 