import React from 'react';

import './ContactUs.css';

// import modules
import Contact from '../modules/Contact';
import Hero from '../modules/Hero';

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const mapEmbedCode = {
      __html: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13703.936351420407!2d-83.961876!3d30.831112!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9e2701983b333faf!2sThomasville%20CrossFit!5e0!3m2!1sen!2sus!4v1573827345631!5m2!1sen!2sus" width="480" height="360" frameborder="0" style="border:0;" allowfullscreen=""></iframe>'
    };

    return (
      <div className="contact-us__wrapper">

        <Hero image='http://localhost/new-tcf/wp-content/uploads/2019/09/hero-temp.jpg' />

        <div className="section__container">
          <div className="section contact-us__content">

            <div className="contact-us__form">
              <h2>Send us a message</h2>
              <Contact home={this.props.home} id={this.props.formId} formClass={this.props.formClass}
              buttonClass={'button button--alt button--no-margin'} />
            </div>

            <div className="contact-us__real-world">
              <div className="contact-us__location">
                <h2>Find us in the real world</h2>
                <div className="contact-us__address">
                  118 Fairbanks Avenue<br />
                  Thomasville, Georgia 31792
                </div>
                <div className="contact-us__phone">
                  Phone: 229.977.5025
                </div>
                <div className="contact-us__email">
                  Email: abrie@thomasvillecrossfit.com
                </div>
              </div>
              <div className="contact-us__map-wrapper" dangerouslySetInnerHTML={mapEmbedCode} />
            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default ContactUs;
