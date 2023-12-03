// ParallaxContainer.js

import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './Parallax.css'; // Create this CSS file

const ParallaxContainer = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="parallax-container"
      style={{
        backgroundImage: `url('https://via.placeholder.com/1600x800')`,
        backgroundPositionY: `${scrollPosition * 0.5}px`, // Adjust the speed of parallax
      }}
    >
      <Container>
        <h1>React Parallax</h1>
        <p>Scroll down to see the parallax effect!</p>
      </Container>
    </div>
  );
};

export default ParallaxContainer;
