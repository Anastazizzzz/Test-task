import React, { useState, useEffect } from 'react';

const BedImage = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; 
      const scaleFactor = 1 - scrollPosition / 1000; 
      setScale(Math.max(scaleFactor, 0.5));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bed-container" style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <img 
        src="bed.jpg" 
        alt="Bed" 
        className="bed" 
        style={{ 
          position: 'absolute', 
          width: "100%", 
          transform: `scale(${scale})`, 
          transition: 'transform 0.1s ease-out' 
        }} 
      />
    </div>
  );
};

export default BedImage;
