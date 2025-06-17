import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="space-y-6">
            <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify">
              Economist with emphasis in Behavioral Economics and a Master's in Biostatistics and 
              Bioinformatics, currently working as a Senior Data Analyst. With <strong>3+ years of experience</strong> 
              across public and private sectors in industries like transportation, telecommunications, 
              marketing, and startups.
            </p>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify">
              I love learning and always seeking the best solutions with available resources. I'm very 
              open to feedback and thrive working both independently and as part of a team. I believe 
              that <strong>data is only valuable when you transform it into actionable information</strong>, and 
              I'm passionate about making that transformation happen.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 