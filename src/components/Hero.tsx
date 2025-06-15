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
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-white via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
            >
              Hi, I'm{' '}
              <span className="gradient-text">Daniela</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
            >
              {personalInfo.title} passionate about transforming complex data into actionable business insights
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadCV}
                className="bg-gradient-to-r from-primary-blue via-primary-purple to-primary-green text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span className="text-xl">📄</span>
                Download CV
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://linkedin.com/in/daniela-rios-perez/', '_blank')}
                className="bg-white text-gray-900 border-2 border-gray-200 hover:border-primary-blue px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <LinkedInIcon size={20} />
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
              {/* Background Elements */}
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-r from-primary-blue/20 to-primary-purple/20 rounded-full blur-xl"
              />
              <motion.div
                animate={{ 
                  rotate: -360,
                  scale: [1.1, 1, 1.1]
                }}
                transition={{ 
                  rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute -bottom-4 -right-4 w-40 h-40 bg-gradient-to-r from-primary-purple/20 to-primary-green/20 rounded-full blur-xl"
              />
              
              {/* Profile Image Container */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative w-80 h-80 md:w-96 md:h-96"
              >
                <div className="w-full h-full bg-gradient-to-br from-primary-blue via-primary-purple to-primary-green rounded-full p-2">
                  <div className="w-full h-full bg-white rounded-full p-3">
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                      {/* Profile Image - will show placeholder if no image is uploaded */}
                      <img
                        src="/assets/images/daniela_profile.jpg"
                        alt="Daniela Rios - Senior Data Analyst"
                        className="w-full h-full object-cover rounded-full"
                        onError={(e) => {
                          // Fallback to placeholder if image doesn't exist
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent && !parent.querySelector('.placeholder')) {
                            const placeholder = document.createElement('div');
                            placeholder.className = 'placeholder w-full h-full flex items-center justify-center';
                            placeholder.innerHTML = `
                              <div class="text-center">
                                <div class="w-24 h-24 bg-gradient-to-r from-primary-blue to-primary-purple rounded-full flex items-center justify-center mx-auto mb-4">
                                  <span class="text-white text-4xl">👩‍💼</span>
                                </div>
                                <p class="text-gray-600 text-sm">Add your photo to<br/>public/assets/images/<br/>daniela_profile.jpg</p>
                              </div>
                            `;
                            parent.appendChild(placeholder);
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-8 -left-8 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center"
                >
                  <span className="text-2xl">📊</span>
                </motion.div>
                
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-16 -right-8 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center"
                >
                  <span className="text-2xl">📈</span>
                </motion.div>
                
                <motion.div
                  animate={{ y: [-5, 15, -5] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-8 -left-6 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center"
                >
                  <span className="text-2xl">💻</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <motion.h3
              whileHover={{ scale: 1.1 }}
              className="text-3xl md:text-4xl font-bold gradient-text mb-2"
            >
              6+
            </motion.h3>
            <p className="text-gray-600 font-medium">Years Experience</p>
          </div>
          <div>
            <motion.h3
              whileHover={{ scale: 1.1 }}
              className="text-3xl md:text-4xl font-bold gradient-text mb-2"
            >
              9+
            </motion.h3>
            <p className="text-gray-600 font-medium">Featured Projects</p>
          </div>
          <div>
            <motion.h3
              whileHover={{ scale: 1.1 }}
              className="text-3xl md:text-4xl font-bold gradient-text mb-2"
            >
              4+
            </motion.h3>
            <p className="text-gray-600 font-medium">Certifications</p>
          </div>
          <div>
            <motion.h3
              whileHover={{ scale: 1.1 }}
              className="text-3xl md:text-4xl font-bold gradient-text mb-2"
            >
              25+
            </motion.h3>
            <p className="text-gray-600 font-medium">Technologies</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 