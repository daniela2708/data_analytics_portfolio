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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white">
                <path d="M22 10V6C22 4.89 21.1 4 20 4H4C2.89 4 2 4.89 2 6V10C3.1 10 4 10.9 4 12C4 13.1 3.1 14 2 14V18C2 19.1 2.89 20 4 20H20C21.1 20 22 19.1 22 18V14C20.9 14 20 13.1 20 12C20 10.9 20.9 10 22 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13 16L15 12L13 8M11 8L9 12L11 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Education</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{edu.degree}</h4>
                  <p className="text-indigo-600 font-semibold mb-2">{edu.institution}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                        <path d="M8 1V8L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                        <path d="M8 16S14 10 14 6C14 2.69 11.31 0 8 0S2 2.69 2 6C2 10 8 16 8 16Z" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="8" cy="6" r="2" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      {edu.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white">
                <path d="M9 12L11 14L15 10M21 12C21 16.97 17.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Certifications</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="border-l-4 border-emerald-500 pl-4">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h4>
                  <p className="text-emerald-600 font-semibold mb-2">{cert.issuer}</p>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                      <rect x="3" y="4" width="10" height="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7 2V4M9 2V4M3 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {cert.date}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 