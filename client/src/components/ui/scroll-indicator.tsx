
import React from 'react';
import Lottie from 'lottie-react';
import scrollAnimation from './scroll-lottie.json';

interface ScrollIndicatorProps {
  className?: string;
  size?: number;
}

export const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ 
  className = '', 
  size = 50 
}) => {
  return (
    <div className={className}>
      <Lottie 
        animationData={scrollAnimation} 
        loop={true}
        style={{ width: size, height: size }}
      />
    </div>
  );
};
