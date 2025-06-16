import React from 'react';

const SectionDivider: React.FC = () => {
  return (
    <div className="relative w-full h-16 bg-gradient-to-r from-slate-100 via-blue-100/70 to-cyan-100/50">
      <svg
        className="absolute bottom-0 w-full h-full"
        viewBox="0 0 1200 64"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,32 C300,48 600,16 900,32 C1050,40 1200,24 1200,24 L1200,64 L0,64 Z"
          fill="currentColor"
          className="text-white"
        />
      </svg>
    </div>
  );
};

export default SectionDivider; 