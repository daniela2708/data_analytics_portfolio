import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white/90 backdrop-blur-sm shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Brand */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-primary-blue to-primary-purple rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">DR</span>
            </div>
            <span className={`font-bold text-xl transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-gray-900'
            }`}>
              Daniela Rios
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ y: -2 }}
                onClick={() => {
                  document.querySelector(item.href)?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
                className={`font-medium transition-colors duration-300 hover:text-primary-blue ${
                  isScrolled ? 'text-gray-700' : 'text-gray-700'
                }`}
              >
                {item.name}
              </motion.button>
            ))}
            
            {/* Get in Touch Button */}
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                document.querySelector('#contact')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
              className="text-white font-semibold transition-all duration-300 flex items-center gap-2"
              style={{
                background: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
                borderRadius: '50px',
                padding: '0.75rem 1.5rem',
                fontSize: '0.95rem',
                fontWeight: '600',
                boxShadow: '0 8px 25px rgba(16, 185, 129, 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(16, 185, 129, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(16, 185, 129, 0.3)';
              }}
            >
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Get in Touch
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <motion.div
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  translateY: isMobileMenuOpen ? 8 : 0,
                }}
                className="w-6 h-0.5 bg-current transform origin-center"
              />
              <motion.div
                animate={{
                  opacity: isMobileMenuOpen ? 0 : 1,
                }}
                className="w-6 h-0.5 bg-current"
              />
              <motion.div
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  translateY: isMobileMenuOpen ? -8 : 0,
                }}
                className="w-6 h-0.5 bg-current transform origin-center"
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md rounded-lg shadow-lg"
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ x: 10 }}
                onClick={() => {
                  document.querySelector(item.href)?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left font-medium text-gray-700 hover:text-primary-blue transition-colors duration-200"
              >
                {item.name}
              </motion.button>
            ))}
            
            {/* Mobile Get in Touch Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                document.querySelector('#contact')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2 mt-4"
              style={{
                background: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
                borderRadius: '50px',
                padding: '0.9rem 1.8rem',
                fontSize: '0.95rem',
                fontWeight: '600',
                boxShadow: '0 8px 25px rgba(16, 185, 129, 0.3)',
              }}
            >
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Get in Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation; 