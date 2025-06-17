import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface EnhancedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
}

const EnhancedButton: React.FC<EnhancedButtonProps> = ({ 
  children, 
  onClick, 
  icon,
  className = ""
}) => {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const newRipple = {
        id: Date.now(),
        x,
        y
      };
      
      setRipples(prev => [...prev, newRipple]);
      
      // Remove ripple after animation
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
      }, 600);
    }
    
    if (onClick) onClick();
  };

  return (
    <motion.button
      ref={buttonRef}
      onClick={handleClick}
      whileHover={{ 
        y: -3, 
        scale: 1.02,
        boxShadow: "0 15px 40px rgba(30, 64, 175, 0.4)"
      }}
      whileTap={{ 
        y: -1, 
        scale: 0.98,
        transition: { duration: 0.1 }
      }}
      className={`
        relative inline-flex items-center gap-3 
        px-8 py-4 
        border-none rounded-full 
        text-base font-semibold text-white 
        bg-gradient-to-r from-blue-800 via-cyan-700 to-emerald-700
        hover:from-blue-900 hover:via-cyan-800 hover:to-emerald-800
        cursor-pointer 
        transition-all duration-[400ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)]
        shadow-[0_8px_30px_rgba(30,64,175,0.3)]
        overflow-hidden 
        tracking-wide
        font-system
        ${className}
      `}
      style={{
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}
    >
      {/* Hover Ripple Effect */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-0"
        style={{
          background: 'rgba(255, 255, 255, 0.3)',
        }}
        whileHover={{
          scale: 10,
          opacity: [0, 0.3, 0],
          transition: { duration: 0.6, ease: "easeOut" }
        }}
      />
      
      {/* Click Ripples */}
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="absolute rounded-full bg-white/30 pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 0,
            height: 0,
            transform: 'translate(-50%, -50%)'
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ 
            scale: 10, 
            opacity: 0,
            transition: { duration: 0.6, ease: "easeOut" }
          }}
        />
      ))}
      
      {/* Icon */}
      {icon && (
        <motion.div
          className="w-5 h-5 flex items-center justify-center"
          whileHover={{ 
            rotate: 12, 
            scale: 1.1,
            transition: { duration: 0.3, ease: "easeOut" }
          }}
        >
          {icon}
        </motion.div>
      )}
      
      {/* Text */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default EnhancedButton; 