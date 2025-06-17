import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';
import EnhancedButton from './EnhancedButton';
import WorkTogetherIcon from './icons/WorkTogetherIcon';

const Skills: React.FC = () => {
  const getIcon = (category: string) => {
    const lowerCategory = category.toLowerCase();
    switch (true) {
      case lowerCategory.includes('frontend') || lowerCategory.includes('programming'):
        return '💻';
      case lowerCategory.includes('data engineering') || lowerCategory.includes('data integration'):
        return '🔧';
      case lowerCategory.includes('cloud'):
        return '☁️';
      case lowerCategory.includes('visualization'):
        return '📊';
      case lowerCategory.includes('automation'):
        return '⚙️';
      case lowerCategory.includes('version'):
        return '📋';
      default:
        return '📈';
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-white">
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
            A comprehensive toolkit of technologies and methodologies I use to deliver exceptional data analytics solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-blue via-primary-purple to-primary-green rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">{getIcon(skillGroup.category)}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{skillGroup.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="bg-gradient-to-r from-gray-100 to-gray-200 hover:from-primary-blue/10 hover:to-primary-purple/10 text-gray-700 hover:text-primary-blue px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-default"
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
          <div className="bg-gradient-to-r from-primary-blue/10 via-primary-purple/10 to-primary-green/10 rounded-2xl p-8 border border-primary-blue/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Collaborate?</h3>
            <p className="text-lg text-gray-600 mb-6">
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