import React from 'react';

interface PowerBIIconProps {
  className?: string;
  size?: number;
}

const PowerBIIcon: React.FC<PowerBIIconProps> = ({ className = "", size = 24 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 630 630" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
          <stop stopColor="#EBBB14" offset="0%"></stop>
          <stop stopColor="#B25400" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-2">
          <stop stopColor="#F9E583" offset="0%"></stop>
          <stop stopColor="#DE9800" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-5">
          <stop stopColor="#F9E68B" offset="0%"></stop>
          <stop stopColor="#F3CD32" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g transform="translate(77.5, 0)">
        <rect fill="url(#linearGradient-1)" x="256" y="0" width="219" height="630" rx="26"></rect>
        <path d="M346,604 L346,630 L320,630 L153,630 C138.640597,630 127,618.359403 127,604 L127,183 C127,168.640597 138.640597,157 153,157 L320,157 C334.359403,157 346,168.640597 346,183 L346,604 Z" fill="url(#linearGradient-2)"></path>
        <path d="M219,604 L219,630 L193,630 L26,630 C11.6405965,630 1.75851975e-15,618.359403 0,604 L0,341 C-1.75851975e-15,326.640597 11.6405965,315 26,315 L193,315 C207.359403,315 219,326.640597 219,341 L219,604 Z" fill="url(#linearGradient-5)"></path>
      </g>
    </svg>
  );
};

export default PowerBIIcon; 