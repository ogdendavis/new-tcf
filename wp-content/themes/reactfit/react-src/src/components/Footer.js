import React from 'react';

// Import styles
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
      <footer className="site-footer">
        <FooterUpper fb={this.state.facebook} ig={this.state.instagram} />
        <FooterLower />
      </footer>
    );
  }
}

// Stateless child components
const FooterUpper = (props) => {
  return(
    <div className="site-footer__upper">
      <div className="site-footer__hours">
        <h2>CLASS HOURS</h2>
        <ul className="hours__list">
          <li>
            <span className="hours__day">Monday - Friday:</span>
            <ul>
              <li>5:30a</li>
              <li>8:00a</li>
              <li>4:30p</li>
              <li>5:30p</li>
              <li>6:30p</li>
            </ul>
          </li>
          <li>
            <span className="hours__day">Saturday:</span>
            <ul>
              <li>Open Bay<br />8:00a - 12:00p</li>
            </ul>
          </li>
          <li>
            <span className="hours__day">Kids Class:</span>
            <ul>
              <li>Monday & Wednesday</li>
              <li>3:30p</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="site-footer__location">
        <h2>LOCATION</h2>
        <div className="location__address">
          <a href="https://goo.gl/maps/aCP4gUYY4CrYWixM6" target="_blank" rel="noopener noreferrer">
            118 Fairbanks Avenue<br />
            Thomasville, Georgia 31792
          </a>
        </div>
        <div className="location__phone">
          Phone: 229.977.5025
        </div>
        <div className="location__email">
          Email: abrie@thomasvillecrossfit.com
        </div>
      </div>
      <div className="site-footer__social">
        <SocialIcon platform='fb' link={props.fb}/>
        <SocialIcon platform='ig' link={props.ig}/>
      </div>
    </div>
  );
}

const FooterLower = (props) => {
  return (
    <div className="site-footer__lower">
      <div className="site-footer__copyright">
        &#169; 2019 Thomasville CrossFit
      </div>
      <div className="site-footer__credit">
        Site by <a href="https://ogdendavis.com" rel="nofollow" target="_blank" rel="noopener noreferrer">ogdendavis.com</a>
      </div>
    </div>
  );
}

export default Footer;
