import React from 'react';

import './ContactUs.css';

// import modules
import ContactForm from '../modules/ContactForm';
import Hero from '../modules/Hero';
import MapEmbed from '../modules/MapEmbed';

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const fields = this.props.page.acf_fields
    const contact = this.props.meta.contact;
    const mapEmbedCode = {
      __html: fields.map_embed_code
    };

    return (
      <div className="contact-us__wrapper">

        <Hero heading={fields.hero_heading} subhead={fields.hero_subhead} image={fields.hero_image} />

        <div className="section__container">
          <div className="section contact-us__content">

            <div className="contact-us__form">
              <h2>Send us a message</h2>
              <ContactForm meta={this.props.meta} id={fields.contact_form_id} formClass={this.props.formClass}
              buttonClass={'button button--alt button--no-margin'} />
            </div>

            <div className="contact-us__real-world">
              <div className="contact-us__location">
                <h2>Find us in the real world</h2>
                <div className="contact-us__address">
                  {contact.address}<br />
                  Thomasville, Georgia 31792
                </div>
                <div className="contact-us__phone">
                  Phone: {contact.phone}
                </div>
                <div className="contact-us__email">
                  Email: {contact.email}
                </div>
              </div>
              <div className="contact-us__map-wrapper">
                <MapEmbed url={fields.map_embed_url} />
              </div>
            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default ContactUs;
