import React from 'react';

// Import styles
import './Hero.css';

const Hero = (props) => {
  const heroStyle = {
    backgroundImage: 'url(' + props.image.url + ')',
  }
  return (
    <div className="hero" style={heroStyle}>
      <div className="hero__tagline">
        <h1 className="tagline__heading">{props.heading}</h1>
        <div className="tagline__subhead">{props.subhead}</div>
      </div>
    </div>
  );
}

export default Hero;
