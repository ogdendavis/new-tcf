import React from 'react';

// Import modules
import Hero from '../modules/Hero';
import Testimonials from '../modules/Testimonials';
import Contact from '../modules/Contact';
import Programs from '../modules/Programs'

// Import styles
import './GetStarted.css';

// Main export component
class GetStarted extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const fields = this.props.page.acf_fields

    return (
      <div className="get-started__wrapper">
        <Hero heading={fields.hero_heading} subhead={fields.hero_subhead} image={fields.hero_image} />
        <Intro heading={fields.intro_heading} body={fields.intro_body} meta={this.props.meta} id={fields.intro_form_id} formClass='get-started__form' />
        <Programs meta={this.props.meta} title='Check out our programs'/>
        <Testimonials addClass="get-started__testimonials-container" meta={this.props.meta} />
        <DropIn heading={fields['drop-in_heading']} body={fields['drop-in_text']} image={fields['drop-in_image']} />
      </div>
    );
  }
}

// Stateless child components

const Intro = (props) => {
  const dangerousBody = {
    __html: props.body,
  }
  return (
    <div className="section__container">
      <div className="section get-started__intro">
        <div className="intro__heading">
          <h2 className="section__heading">{props.heading}</h2>
        </div>
        <div className="intro__step-container" dangerouslySetInnerHTML={dangerousBody} />
        <div className="intro__form-container">
          <Contact meta={props.meta} id={props.id} formClass={props.formClass} buttonClass={'button button--no-margin button--white-alt'} />
        </div>
      </div>
    </div>
  );
}

const DropIn = (props) => {
  const dangerousBody = {
    __html: props.body,
  }
  const contentStyle = {
    background: 'url(' + props.image.url + ') left no-repeat'
  }

  return (
    <div className="section__container">
      <div className="section get-started__dropin">
        <h2 className="section__heading">{props.heading}</h2>
        <div className="dropin__content" style={contentStyle}>
          <div className="dropin__text" dangerouslySetInnerHTML={dangerousBody} />
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
