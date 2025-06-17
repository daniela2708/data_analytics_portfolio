import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolioData';
import PowerBIIcon from './icons/PowerBIIcon';
import ReactIcon from './icons/ReactIcon';
import RStudioIcon from './icons/RStudioIcon';
import TableauIcon from './icons/TableauIcon';
import EnhancedButton from './EnhancedButton';
import WorkTogetherIcon from './icons/WorkTogetherIcon';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'dashboard' | 'powerbi' | 'tableau' | 'rmarkdown'>('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const filterButtons = [
    { key: 'all' as const, label: 'All Projects', icon: null, iconComponent: null },
    { key: 'dashboard' as const, label: 'Custom Dashboards', icon: null, iconComponent: ReactIcon },
    { key: 'powerbi' as const, label: 'Power BI', icon: null, iconComponent: PowerBIIcon },
    { key: 'tableau' as const, label: 'Tableau', icon: null, iconComponent: TableauIcon },
    { key: 'rmarkdown' as const, label: 'R Markdown', icon: null, iconComponent: RStudioIcon },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'dashboard':
        return <ReactIcon size={16} className="text-gray-700" />;
      case 'powerbi':
        return <PowerBIIcon size={16} className="text-gray-700" />;
      case 'tableau':
        return <TableauIcon size={16} className="text-gray-700" />;
      case 'rmarkdown':
        return <RStudioIcon size={16} className="text-gray-700" />;
      default:
        return <ReactIcon size={16} className="text-gray-700" />;
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

  const getSpecialFeatures = (projectId: string, category: string) => {
    switch (projectId) {
      case 'hilton-dashboard':
        return [
          'Interactive Dashboards',
          'Data Visualizations',
          'Competitive Analysis'
        ];
      case 'emerge-dashboard':
        return [
          'R&D Monitoring',
          'Data Analytics',
          'Multi-platform Support',
          'English & Spanish'
        ];
      case 'qatar-tourism':
        return [
          'Interactive Maps',
          'Tourism Analytics'
        ];
      case 'banks-analytics':
        return [
          'AI Generated Insights',
          'Ad Spend Tracking',
          'Multi-Bank Analysis'
        ];
      case 'capital-one':
        return [
          'AI Chatbot Integration',
          'Multimedia Analytics',
          'Campaign Insights'
        ];
      default:
        // Default features based on category for other projects
        switch (category) {
          case 'dashboard':
            return ['AI Chatbot', 'Multi-platform'];
          case 'powerbi':
            return projectId === 'powerbi-analytics' 
              ? ['Campaign Tracking', 'Performance Metrics', 'Interactive Visualizations']
              : ['Interactive BI'];
          case 'tableau':
            return ['Data Visualization'];
                      case 'rmarkdown':
              if (projectId === 'rmarkdown-1') {
                return ['Interactive Visualizations', 'Mathematical Equations', 'Multi-format Outputs'];
              } else if (projectId === 'rmarkdown-2') {
                return ['Market Analysis', 'Trend Visualization', 'Industry Insights'];
              } else {
                return ['Statistical Analysis'];
              }
          default:
            return [];
        }
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify max-w-3xl mx-auto">
            Discover my portfolio of complete data analytics solutions. Each project showcases not only the final interactive dashboards and visualizations, but represents end-to-end data engineering work - from raw data extraction and ETL pipeline development to data cleaning, transformation, and modeling. Every insight you see here is built on robust data infrastructure I designed and implemented to ensure accuracy, reliability, and scalability. Several projects feature AI-generated insights and integrated chatbot functionality to enhance user interaction and provide intelligent data exploration capabilities.
          </p>
        </motion.div>

        {/* Filter Buttons - Enhanced Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16 -mx-4 sm:-mx-6 lg:-mx-8"
        >
          {/* Background Container - Full Width */}
          <div className="relative bg-gradient-to-r from-teal-50 via-cyan-50 to-sky-50 py-8 px-4 sm:px-6 lg:px-8 shadow-sm border border-teal-100/50 rounded-3xl mx-4 sm:mx-6 lg:mx-8">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-100/40 via-cyan-100/30 to-sky-100/40 rounded-3xl"></div>
            
            {/* Filter Navigation */}
            <div className="relative z-10 max-w-7xl mx-auto">              
              <div className="flex flex-wrap justify-center gap-3">
                {filterButtons.map((button) => {
                  const IconComponent = button.iconComponent;
                  const isActive = filter === button.key;
                  
                  return (
            <motion.button
              key={button.key}
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
              onClick={() => setFilter(button.key)}
                      className={`group relative px-6 py-3 rounded-2xl font-medium transition-all duration-300 flex items-center gap-3 min-w-[160px] justify-center ${
                        isActive
                          ? 'bg-white text-gray-900 shadow-xl border-2 border-teal-400/70 ring-2 ring-teal-200/50'
                          : 'bg-white/70 backdrop-blur-sm text-gray-600 hover:bg-white hover:shadow-lg border border-gray-200/50'
                      }`}
                    >
                      {/* Active indicator */}
                      {isActive && (
                        <motion.div
                          layoutId="activeFilter"
                          className="absolute inset-0 bg-gradient-to-r from-teal-100/60 via-cyan-100/50 to-sky-100/60 rounded-2xl"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      
                      {/* Icon Container */}
                      <div className={`relative flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-r from-teal-500 to-cyan-500 p-1.5' 
                          : 'bg-gray-100 group-hover:bg-gray-200'
                      }`}>
                        {button.key === 'all' ? (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={isActive ? 'text-white' : 'text-gray-600'}>
                            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        ) : IconComponent ? (
                          <IconComponent 
                            size={20} 
                            className={`${isActive ? 'text-white' : 'text-gray-600 group-hover:text-gray-700'} transition-colors duration-300`}
                          />
                        ) : null}
                      </div>
                      
                      {/* Label */}
                      <span className="relative text-sm font-medium">
              {button.label}
                      </span>
            </motion.button>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.12)",
                  transition: { duration: 0.4, ease: [0.175, 0.885, 0.32, 1.275] }
                }}
                className="group relative bg-white/95 backdrop-blur-[20px] rounded-3xl p-8 shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-white/20 transition-all duration-[400ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] overflow-hidden h-full flex flex-col"
              >
                {/* Hover Line Effect */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                {/* Category Badge - Top */}
                <div className="mb-4">
                  <span className="bg-blue-500/10 text-blue-600 px-3 py-1.5 rounded-xl text-xs font-medium border border-blue-500/20">
                    {getCategoryLabel(project.category)}
                  </span>
                </div>

                {/* Card Header */}
                <div className="flex items-center gap-3 mb-5">
                  {/* Project Icon */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.05, 
                      rotate: 2,
                      transition: { duration: 0.3 }
                    }}
                    className="w-10 h-10 bg-gradient-to-br from-blue-500 via-cyan-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-[0_4px_12px_rgba(59,130,246,0.2)] flex-shrink-0"
                  >
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      {getCategoryIcon(project.category)}
                    </div>
                  </motion.div>
                  
                  {/* Title with Star and Warning */}
                  <div className="flex items-center gap-2 flex-1">
                    <h3 className="text-lg font-semibold text-slate-800 leading-tight">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1">
                      {project.featured && (
                        <span className="text-amber-500 text-base">⭐</span>
                      )}
                      {project.underMaintenance && (
                        <div className="relative group">
                          {/* Elegant Warning Icon */}
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="w-5 h-5 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg cursor-help border border-amber-300/50"
                          >
                            <svg 
                              className="w-3 h-3 text-white" 
                              fill="currentColor" 
                              viewBox="0 0 20 20"
                            >
                              <path 
                                fillRule="evenodd" 
                                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" 
                                clipRule="evenodd" 
                              />
                            </svg>
                          </motion.div>
                          
                          {/* Elegant Tooltip */}
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out group-hover:translate-y-[-4px] pointer-events-none z-20">
                            <div className="bg-white/95 backdrop-blur-lg border border-gray-200/50 text-gray-800 text-sm rounded-xl px-4 py-3 shadow-2xl min-w-[220px]">
                              <div className="flex items-center gap-2 mb-1">
                                <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                                <span className="font-semibold text-amber-600">Under Development</span>
                              </div>
                              <p className="text-xs text-gray-600 leading-relaxed">
                                Currently undergoing minor improvements and optimizations
                              </p>
                              
                              {/* Elegant Arrow */}
                              <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                                <div className="w-3 h-3 bg-white/95 border-r border-b border-gray-200/50 rotate-45 -mt-1.5"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="space-y-6 flex-grow">
                  {/* Project Description */}
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed text-justify">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        whileHover={{ 
                          y: -1,
                          backgroundColor: "rgba(99, 102, 241, 0.15)",
                          transition: { duration: 0.2 }
                        }}
                        className="bg-indigo-500/8 text-indigo-600 px-3 py-1.5 rounded-lg text-xs font-medium border border-indigo-500/15 transition-all duration-200 cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  {/* Special Features */}
                  <div className="flex flex-wrap gap-2">
                    {getSpecialFeatures(project.id, project.category).map((feature, featureIndex) => (
                      <span 
                        key={featureIndex}
                        className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 text-emerald-600 px-3 py-1.5 rounded-lg text-xs font-medium border border-emerald-500/20"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    y: -2,
                    boxShadow: "0 10px 30px rgba(30, 64, 175, 0.3)",
                    background: "linear-gradient(135deg, #1d4ed8 0%, #0369a1 50%, #065f46 100%)",
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-800 via-cyan-700 to-emerald-700 text-white rounded-2xl text-sm font-semibold transition-all duration-300 tracking-wide no-underline"
                >
                  <motion.svg 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path 
                      d="M7 17L17 7M17 7H7M17 7V17" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                  {project.category === 'powerbi' ? 'View Power BI Dashboard' : 
                   project.category === 'tableau' ? 'View Tableau Dashboard' :
                   project.category === 'rmarkdown' ? 'View Analysis' : 'View Project'}
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>



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
          <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify mb-8 max-w-3xl mx-auto">
            I'm always excited to collaborate on new data analytics projects and help businesses unlock insights from their data.
          </p>
          <EnhancedButton
            onClick={() => {
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            icon={<WorkTogetherIcon />}
          >
            Let's Work Together
          </EnhancedButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 