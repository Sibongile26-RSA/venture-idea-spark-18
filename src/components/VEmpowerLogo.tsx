
import React from 'react';

interface VEmpowerLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const VEmpowerLogo: React.FC<VEmpowerLogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <img 
      src="/lovable-uploads/2df9a861-65c8-4cd3-bbc6-2aa63ed145c0.png" 
      alt="VEmpower Ventures Logo" 
      className={`${sizeClasses[size]} ${className}`}
    />
  );
};

export default VEmpowerLogo;
