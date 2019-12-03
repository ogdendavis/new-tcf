import React from 'react';

// Import styles
import './Hero.css';

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: '',
    }
  }

  componentDidMount() {
    const img = this.props.image
    const width = window.innerWidth || document.body.clientWidth;
    const imgUrl = width < 768 ? img.sizes.medium_large :
                   width < 1024 ? img.sizes.large :
                   width < 1536 ? img.sizes['1536x1536'] :
                   width < 2048 ? img.sizes['2048x2048'] :
                   img.url;
    this.setState({ imgUrl: 'url(' + imgUrl + ')' });
  }

  render() {
    const heroStyle = {
      backgroundImage: this.state.imgUrl,
    }
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
