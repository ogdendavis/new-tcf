import React from 'react';

// Import styles
import '../global/export.css';
import './Hero.css';

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const img = 'url(' + this.props.image + ')';
    return (
      <div className="hero" style={{backgroundImage: img}}>
        <div className="hero__tagline">
          <h1 className="tagline__heading">Thomasville CrossFit</h1>
          <div className="tagline__subhead">
            Come hang out and get your sweat on with the fittest mfers in T-ville
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
