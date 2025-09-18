// src/components/AnimatedBackground.jsx
import React from "react";

const AnimatedBackground = () => {
  const particleCount = 30;
  const particles = Array.from({ length: particleCount }, (_, i) => (
    <div
      key={i}
      className="particle"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 8 + 4}px`,
        height: `${Math.random() * 8 + 4}px`,
        animationDuration: `${Math.random() * 15 + 10}s`,
      }}
    />
  ));

  return (
    <div className="animated-background">
      <div className="gradient-bg"></div>
      <div className="geometric-pattern"></div>
      <div className="light-rays"></div>
      <div className="particles">{particles}</div>
    </div>
  );
};

export default AnimatedBackground;
