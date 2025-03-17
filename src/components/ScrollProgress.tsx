
import React, { useState, useEffect } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPosition = window.scrollY;
      
      if (totalHeight) {
        setScrollProgress((scrollPosition / totalHeight) * 100);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-0.5 bg-transparent z-50">
      <div 
        className="h-full bg-gradient-gold transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
