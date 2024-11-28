import React, { useState, useEffect } from "react";
import card1 from"./Cards/card1";
import card2 from"./Cards/card2";
import card3 from"./Cards/card3";



import "./slider.css";

const Slider = () => {
  const [index, setIndex] = useState(0);

  const slides = [
    {card1},
    {card2},
    {card3},
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="slider">
      {slides.map((slide, i) => (
        <div
          className="slide"
          key={i}
          style={{
            transform: `translateX(${(i - index) * 100}%)`,
            transition: "transform 0.5s ease",
          }}
        >
          <img src={slide} alt={`Slide ${i + 1}`} className="slide-image" />
        </div>
      ))}
    </div>
  );
};

export default Slider;
