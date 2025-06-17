/// <reference types="react" />
import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/portfolioData';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify max-w-3xl mx-auto">
            4+ years of hands-on experience in advanced data analytics and interactive dashboard development, 
            collaborating with cross-functional teams in hospitality, advertising, and emerging technology markets 
            to deliver scalable analytics solutions that drive measurable business outcomes.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="grid lg:grid-cols-12 gap-8">
                {/* Timeline Dot */}
                <div className="lg:col-span-1 flex justify-center">
                  <div className="relative">
                    <div className="w-4 h-4 bg-gradient-to-r from-primary-blue to-primary-purple rounded-full border-4 border-white shadow-lg"></div>
                    {index < experience.length - 1 && (
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-20 bg-gradient-to-b from-primary-blue to-primary-purple opacity-30"></div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-11">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary-blue to-primary-purple rounded-xl flex items-center justify-center">
                          <span className="text-white text-xl">💼</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                          <h4 className="text-lg font-semibold text-primary-blue">{exp.company}</h4>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col lg:text-right">
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <span className="text-primary-purple">📅</span>
                          <span>{exp.startDate} - {exp.endDate}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-primary-green">📍</span>
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3">Key Responsibilities & Achievements:</h5>
                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 bg-primary-green rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  {exp.technologies && (
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">Technologies & Tools:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="px-3 py-1 bg-gradient-to-r from-primary-blue/10 to-primary-purple/10 text-primary-blue rounded-full text-sm font-medium border border-primary-blue/20 hover:shadow-sm transition-all duration-200"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Download Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
              Want to learn more about my professional journey?
            </p>
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/assets/documents/Daniela_Rios_CV.pdf';
                link.download = 'Daniela_Rios_CV.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Background animation overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Icon with animation */}
              <motion.div
                whileHover={{ rotate: 12, scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="relative z-10"
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                  <path d="M21 15V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V15M7 10L12 15L17 10M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
              
              {/* Text */}
              <span className="relative z-10 text-lg">Download Resume</span>
              
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out"></div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 