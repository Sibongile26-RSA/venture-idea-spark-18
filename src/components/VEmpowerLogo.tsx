
import React from "react";

interface VEmpowerLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const VEmpowerLogo: React.FC<VEmpowerLogoProps> = ({ 
  className = "", 
  size = "md" 
}) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12", 
    lg: "w-16 h-16",
    xl: "w-24 h-24"
  };

  return (
    <img 
      src="/lovable-uploads/074b050a-64f2-4461-883a-9fce221e78f6.png"
      alt="VEmpower Ventures Logo"
      className={`${sizeClasses[size]} ${className}`}
    />
  );
};

export default VEmpowerLogo;
