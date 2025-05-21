
import React, { useEffect, useState } from 'react';

export function AnimatedCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [trails, setTrails] = useState<{ x: number, y: number, id: number }[]>([]);
  
  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Add trail point with unique ID
      setTrails(prev => {
        const newTrail = { x: e.clientX, y: e.clientY, id: Date.now() };
        const updatedTrails = [...prev, newTrail].slice(-5); // Keep only last 5 points
        return updatedTrails;
      });
    };
    
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    const handleMouseEnter = () => setHidden(false);
    const handleMouseLeave = () => setHidden(true);
    
    const handleLinkHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'button' || 
        target.tagName.toLowerCase() === 'a' ||
        target.parentElement?.tagName.toLowerCase() === 'button' ||
        target.parentElement?.tagName.toLowerCase() === 'a'
      ) {
        setLinkHovered(true);
      }
    };
    
    const handleLinkHoverEnd = () => {
      setLinkHovered(false);
    };
    
    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleLinkHoverStart);
    document.addEventListener('mouseout', handleLinkHoverEnd);
    
    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleLinkHoverStart);
      document.removeEventListener('mouseout', handleLinkHoverEnd);
    };
  }, []);
  
  // Remove trails after they fade
  useEffect(() => {
    if (trails.length > 0) {
      const timer = setTimeout(() => {
        setTrails(prev => prev.slice(1));
      }, 200);
      
      return () => clearTimeout(timer);
    }
  }, [trails]);
  
  // Don't render the cursor on smaller screens
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null;
  }
  
  return (
    <>
      {/* Cursor dot */}
      <div 
        className="cursor-dot" 
        style={{ 
          opacity: hidden ? 0 : 1,
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${clicked ? 0.8 : 1})`,
        }}
      />
      
      {/* Cursor outline */}
      <div 
        className="cursor-outline" 
        style={{ 
          opacity: hidden ? 0 : 1,
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${clicked ? 1.2 : 1})`,
          width: linkHovered ? '40px' : '30px',
          height: linkHovered ? '40px' : '30px',
          backgroundColor: linkHovered ? 'hsla(var(--primary), 0.1)' : 'transparent',
        }}
      />
      
      {/* Trailing effect */}
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: trail.x,
            top: trail.y,
            opacity: (index + 1) * 0.15,
            transform: `translate(-50%, -50%) scale(${(index + 1) * 0.6})`,
          }}
        />
      ))}
    </>
  );
}
