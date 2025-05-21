
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

interface ScrollProgressProps {
  color?: string;
  height?: number;
}

export const ScrollProgress: React.FC<ScrollProgressProps> = ({ 
  color = "hsl(var(--primary))", 
  height = 4 
}) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 origin-left"
      style={{
        scaleX,
        height: `${height}px`,
        backgroundColor: color
      }}
    />
  );
};
