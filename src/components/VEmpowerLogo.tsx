
import React from 'react';

interface VEmpowerLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const VEmpowerLogo = ({ className = "", size = 'md' }: VEmpowerLogoProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <svg 
      className={`${sizeClasses[size]} ${className}`} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Ring */}
      <circle 
        cx="50" 
        cy="50" 
        r="48" 
        stroke="url(#gradient1)" 
        strokeWidth="3" 
        fill="none"
        opacity="0.6"
      />
      
      {/* Inner Circle Background */}
      <circle 
        cx="50" 
        cy="50" 
        r="35" 
        fill="url(#gradient2)" 
        opacity="0.9"
      />
      
      {/* V Shape */}
      <path 
        d="M35 30 L45 55 L50 45 L55 55 L65 30" 
        stroke="white" 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        fill="none"
      />
      
      {/* E Shape */}
      <path 
        d="M35 65 L35 75 L50 75 M35 70 L45 70 M35 65 L50 65" 
        stroke="white" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        fill="none"
      />
      
      {/* Power Symbol Accent */}
      <circle 
        cx="60" 
        cy="70" 
        r="3" 
        fill="url(#accent)" 
      />
      <rect 
        x="59" 
        y="62" 
        width="2" 
        height="8" 
        fill="url(#accent)" 
        rx="1"
      />
      
      {/* Gradients */}
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(263, 70%, 50%)" />
          <stop offset="100%" stopColor="hsl(258, 69%, 57%)" />
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(263, 70%, 50%)" />
          <stop offset="50%" stopColor="hsl(258, 69%, 57%)" />
          <stop offset="100%" stopColor="hsl(240, 6%, 6%)" />
        </linearGradient>
        <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(45, 100%, 51%)" />
          <stop offset="100%" stopColor="hsl(45, 100%, 61%)" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default VEmpowerLogo;
