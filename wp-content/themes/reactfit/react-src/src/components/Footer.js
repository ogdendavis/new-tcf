import React from 'react';

// Import styles
import './Footer.css';

// Import social icons
import SocialIcon from '../assets/img/SocialIcons.js';

// Main footer component
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    console.log(this.props)
    return (
      <footer className="site-footer">
        <FooterUpper contact={this.props.contact} />
        <FooterLower />
      </footer>
    );
  }
}

// Stateless child components
const FooterUpper = (props) => {
  const cfHours = Object.values(props.contact.hours.crossfit).map(cf => {
    return (<li key={`cfHours${cf}`}>{cf}</li>);
  });

  return(
    <div className="site-footer__upper">
      <div className="site-footer__hours">
        <h2>CLASS HOURS</h2>
        <ul className="hours__list">
          <li>
            <span className="hours__type">CrossFit</span><br /><span className="hours__days">Monday - Friday</span>
            <ul>
              {cfHours}
            </ul>
          </li>
          <li>
            <span className="hours__type">Open Bay</span>
            <ul>
              <li>Saturday<br />{props.contact.hours.open_bay}</li>
            </ul>
          </li>
          <li>
            <span className="hours__type">Kids Class</span>
            <ul>
              <li>{props.contact.hours.kids_days}</li>
              <li>{props.contact.hours.kids_time}</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="site-footer__location">
        <h2>LOCATION</h2>
        <div className="location__address">
          <a href="https://goo.gl/maps/aCP4gUYY4CrYWixM6" target="_blank" rel="noopener noreferrer">
            {props.contact.address}<br />
            Thomasville, Georgia 31792
          </a>
        </div>
        <div className="location__phone">
          Phone: {props.contact.phone}
        </div>
        <div className="location__email">
          Email: {props.contact.email}
        </div>
      </div>
      <div className="site-footer__social">
        <SocialIcon platform='fb' link={props.contact.facebook}/>
        <SocialIcon platform='ig' link={props.contact.instagram}/>
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
