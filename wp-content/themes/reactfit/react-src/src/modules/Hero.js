import React from 'react';

// Import styles
import './Hero.css';

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const heroStyle = {
      backgroundImage: 'url(' + this.props.image.url + ')',
    }
    console.log(heroStyle);
    return (
      <div className="hero" style={heroStyle}>
        <div className="hero__tagline">
          <h1 className="tagline__heading">{this.props.heading}</h1>
          <div className="tagline__subhead">{this.props.subhead}</div>
        </div>
      </div>
    );
  }
}

export default Hero;
