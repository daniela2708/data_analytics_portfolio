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
      {/* Main Content Section - White Background */}
      <div className="flex-1 flex items-center justify-center bg-white pb-6">
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
              <span className="gradient-text">Daniela</span>
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