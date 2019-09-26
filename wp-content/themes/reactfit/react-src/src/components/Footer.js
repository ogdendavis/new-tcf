import React from 'react';

// Import styles
import '../global/export.css';
import './Footer.css';

// Import social icons
import SocialIcon from '../assets/img/SocialIcons.js';

// Main footer component
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      facebook: 'https://www.facebook.com/thomasvillecrossfit/',
      instagram: 'https://www.instagram.com/thomasvillecrossfit/',
    }
  }

  render() {
    return (
      <div className="site-footer">
        <div className="footer__copyright">
          &#169; 2019 Thomasville CrossFit
        </div>
        <FooterSocial fb={this.state.facebook} ig={this.state.instagram} />
      </div>
    );
  }
}

// Stateless child components
const FooterSocial = (props) => {
  return (
    <div className="footer__social">
      <a href={props.fb} target="_blank">
        <SocialIcon platform='fb' />
      </a>
      <a href={props.ig} target="_blank">
        <SocialIcon platform='ig' />
      </a>
    </div>
  );
}

export default Footer;
