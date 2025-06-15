import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolioData';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'dashboard' | 'powerbi' | 'tableau' | 'rmarkdown'>('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const filterButtons = [
    { key: 'all' as const, label: 'All Projects', icon: '🗂️' },
    { key: 'dashboard' as const, label: 'Custom Dashboards', icon: '📊' },
    { key: 'powerbi' as const, label: 'Power BI', icon: '📈' },
    { key: 'tableau' as const, label: 'Tableau', icon: '🏆' },
    { key: 'rmarkdown' as const, label: 'R Markdown', icon: '📝' },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'dashboard':
        return '💻';
      case 'powerbi':
        return '📊';
      case 'tableau':
        return '📈';
      case 'rmarkdown':
        return '📝';
      default:
        return '💼';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'dashboard':
        return 'Custom Dashboard';
      case 'powerbi':
        return 'Power BI';
      case 'tableau':
        return 'Tableau';
      case 'rmarkdown':
        return 'R Markdown';
      default:
        return 'Other';
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-blue via-primary-purple to-primary-green mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my comprehensive portfolio of data analytics projects: custom web dashboards with chatbot integration, 
            Power BI solutions, Tableau visualizations, and advanced statistical analysis with R.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filterButtons.map((button) => (
            <motion.button
              key={button.key}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(button.key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                filter === button.key
                  ? 'bg-gradient-to-r from-primary-blue via-primary-purple to-primary-green text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="text-lg">{button.icon}</span>
              {button.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group"
              >
                {/* Project Header */}
                <div className="relative p-6 bg-gradient-to-br from-gray-50 to-white">
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <span className="w-3 h-3">⭐</span>
                        Featured
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-blue to-primary-purple rounded-2xl flex items-center justify-center">
                      <span className="text-white text-2xl">
                        {getCategoryIcon(project.category)}
                      </span>
                    </div>
                    <span className="px-3 py-1 bg-gradient-to-r from-primary-blue/10 to-primary-purple/10 text-primary-blue rounded-full text-xs font-semibold">
                      {getCategoryLabel(project.category)}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-blue transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="px-6 py-4 border-t border-gray-100">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gradient-to-r from-primary-blue/10 to-primary-purple/10 text-primary-blue rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="p-6 pt-0">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-primary-blue to-primary-purple text-white py-3 px-4 rounded-xl font-semibold text-center hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span className="w-4 h-4">🔗</span>
                    {project.category === 'powerbi' ? 'View Power BI Dashboard' : 
                     project.category === 'tableau' ? 'View Tableau Dashboard' :
                     project.category === 'rmarkdown' ? 'View Analysis' : 'View Project'}
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Categories Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-blue/5 via-primary-purple/5 to-primary-green/5 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Project Categories</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-blue to-primary-purple rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-2xl">💻</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Custom Dashboards</h4>
              <p className="text-sm text-gray-600">Web, desktop & mobile apps with AI chatbot integration</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-purple to-primary-green rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Power BI</h4>
              <p className="text-sm text-gray-600">Interactive business intelligence dashboards</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-green to-primary-blue rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-2xl">📈</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Tableau</h4>
              <p className="text-sm text-gray-600">Competition dashboards and data visualizations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-blue to-primary-green rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-2xl">📝</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">R Markdown</h4>
              <p className="text-sm text-gray-600">Statistical analysis and data science projects</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Interested in working together?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            I'm always excited to collaborate on new data analytics projects and help businesses unlock insights from their data.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-blue via-primary-purple to-primary-green text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span className="w-5 h-5">💼</span>
            Let's Work Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 