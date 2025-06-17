import React from 'react';

interface WorkTogetherIconProps {
  className?: string;
  size?: number;
}

const WorkTogetherIcon: React.FC<WorkTogetherIconProps> = ({ className = "", size = 20 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M3 12H15M15 12L11 8M15 12L11 16" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeDasharray="2 4"
      />
    </svg>
  );
};

export default WorkTogetherIcon; 