import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';
import EnhancedButton from './EnhancedButton';
import WorkTogetherIcon from './icons/WorkTogetherIcon';

const Skills: React.FC = () => {
  const getIcon = (category: string) => {
    const lowerCategory = category.toLowerCase();
    switch (true) {
      case lowerCategory.includes('programming'):
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
            <path d="M16 18L22 12L16 6M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case lowerCategory.includes('visualization'):
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
            <path d="M3 3V21H21M9 9L12 6L16 10L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case lowerCategory.includes('engineering'):
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
            <path d="M21 16V8A2 2 0 0019 6H5A2 2 0 003 8V16A2 2 0 005 18H19A2 2 0 0021 16Z" stroke="currentColor" strokeWidth="2"/>
            <path d="M7 10H17M7 14H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
      case lowerCategory.includes('cloud'):
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
            <path d="M18 10H20A2 2 0 0022 12V16A2 2 0 0020 18H6A4 4 0 014 14C4 10.69 6.69 8 10 8H10.5A5.5 5.5 0 0121 10Z" stroke="currentColor" strokeWidth="2"/>
          </svg>
        );
      case lowerCategory.includes('analytics'):
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
            <path d="M19.4 15A1.65 1.65 0 0018 12.65L19.25 12A1.65 1.65 0 0020.4 9.24L18 8.5A1.65 1.65 0 0015.24 6.75L12 4.6A1.65 1.65 0 009.24 6.75L6.5 8A1.65 1.65 0 004.75 10.76L6 12A1.65 1.65 0 004.6 15" stroke="currentColor" strokeWidth="2"/>
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
            <path d="M3 3V21H21M9 9L12 6L16 10L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
    }
  };

  const getIconStyles = (category: string) => {
    const lowerCategory = category.toLowerCase();
    switch (true) {
      case lowerCategory.includes('programming'):
        return 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white';
      case lowerCategory.includes('visualization'):
        return 'bg-gradient-to-br from-cyan-500 to-blue-500 text-white';
      case lowerCategory.includes('engineering'):
        return 'bg-gradient-to-br from-amber-500 to-orange-500 text-white';
      case lowerCategory.includes('cloud'):
        return 'bg-gradient-to-br from-emerald-500 to-green-500 text-white';
      case lowerCategory.includes('analytics'):
        return 'bg-gradient-to-br from-violet-500 to-purple-500 text-white';
      default:
        return 'bg-gradient-to-br from-cyan-500 to-blue-500 text-white';
    }
  };

  const getSkillTagHoverStyles = (category: string) => {
    const lowerCategory = category.toLowerCase();
    switch (true) {
      case lowerCategory.includes('programming'):
        return 'hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200';
      case lowerCategory.includes('visualization'):
        return 'hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200';
      case lowerCategory.includes('engineering'):
        return 'hover:bg-amber-50 hover:text-amber-600 hover:border-amber-200';
      case lowerCategory.includes('cloud'):
        return 'hover:bg-green-50 hover:text-green-600 hover:border-green-200';
      case lowerCategory.includes('analytics'):
        return 'hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200';
      default:
        return 'hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200';
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-purple-100 via-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify max-w-3xl mx-auto">
            My evolving toolkit of technologies and analytical methods used to craft innovative data solutions that make complex information accessible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="skill-card bg-white rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.16)] transition-all duration-300 ease-out"
            >
              <div className="card-header flex items-center gap-4 mb-6">
                <div className={`icon-container w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${getIconStyles(skillGroup.category)}`}>
                  {getIcon(skillGroup.category)}
                </div>
                <h3 className="category-title text-xl font-semibold text-gray-900">
                  {skillGroup.category}
                </h3>
              </div>
              
              <div className="skills-container flex flex-wrap gap-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      y: -1,
                      transition: { duration: 0.2 }
                    }}
                    className={`skill-tag bg-gray-50 text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-gray-200 transition-all duration-200 cursor-default ${getSkillTagHoverStyles(skillGroup.category)}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Collaborate?</h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify mb-8 max-w-3xl mx-auto">
              I'm always excited to work on challenging data projects and help businesses unlock the power of their data.
            </p>
            <EnhancedButton
              onClick={() => {
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              icon={<WorkTogetherIcon />}
            >
              Let's Work Together
            </EnhancedButton>
          </div>
        </motion.div>
      </div>


    </section>
  );
};

export default Skills; 