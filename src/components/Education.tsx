import React from 'react';
import { motion } from 'framer-motion';
import { education, certifications } from '../data/portfolioData';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-blue to-primary-purple rounded-xl flex items-center justify-center">
                <span className="text-white text-xl">🎓</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-l-4 border-primary-blue pl-6 py-4 bg-blue-50 rounded-r-lg"
                >
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{edu.degree}</h4>
                  <p className="text-primary-blue font-semibold mb-1">{edu.institution}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <span>{edu.period}</span>
                    <span>•</span>
                    <span>{edu.location}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-purple to-primary-green rounded-xl flex items-center justify-center">
                <span className="text-white text-xl">🏆</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Certifications</h3>
            </div>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-l-4 border-primary-purple pl-6 py-4 bg-purple-50 rounded-r-lg"
                >
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h4>
                  <p className="text-primary-purple font-semibold mb-1">{cert.issuer}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                    <span>{cert.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education; 