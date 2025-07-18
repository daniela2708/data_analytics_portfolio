import React from 'react';

interface TableauIconProps {
  className?: string;
  size?: number;
}

const TableauIcon: React.FC<TableauIconProps> = ({ className = "", size = 24 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 60.3 59.5" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M28.5 40.2h3.3v-9h8.3V28h-8.3v-9h-3.3v9h-8.2v3.2h8.2z" fill="#e8762d"/>
      <path d="M13.2 53.2H16v-8h7.4v-2.5H16v-8.1h-2.8v8.1H5.8v2.5h7.4z" fill="#c72037"/>
      <path d="M44.3 24.3h2.8v-8h7.5v-2.4h-7.5V5.8h-2.8v8.1h-7.4v2.4h7.4z" fill="#5b879b"/>
      <path d="M29 59.5h2.4v-5.7h5.1v-2.1h-5.1V46H29v5.7h-5v2.1h5z" fill="#5c6692"/>
      <path d="M13.3 24.3h2.6v-8.1h7.5v-2.3h-7.5V5.8h-2.6v8.1H5.8v2.3h7.5z" fill="#eb9129"/>
      <path d="M52.8 36.3h2.4v-5.6h5.1v-2.2h-5.1v-5.6h-2.4v5.6h-5v2.2h5z" fill="#5c6692"/>
      <path clipRule="evenodd" d="M44.3 53.2h2.8v-8h7.5v-2.5h-7.5v-8.1h-2.8v8.1h-7.4v2.5h7.4z" fill="#1f457e" fillRule="evenodd"/>
      <path d="M36.1 7.2V5.5h-5V0h-1.8v5.5h-5v1.7h5v5.5h1.8V7.2zM5 35.9h1.8v-5.5h5v-1.7h-5v-5.4H5v5.4H0v1.8l5-.1z" fill="#7199a6"/>
    </svg>
  );
};

export default TableauIcon; 