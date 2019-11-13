import React from 'react';

// Import modules
import Hero from '../modules/Hero';
import Testimonials from '../modules/Testimonials';
import Contact from '../modules/Contact';

// Import styles
import './GetStarted.css';

// Main export component
class GetStarted extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: this.props.home,
    }
  }

  render() {
    return (
      <div className="get-started__wrapper">
        <Hero home={false} image={'http://localhost/new-tcf/wp-content/uploads/2019/11/learning-cleans.jpg'} />
        <Intro home={this.state.home} id='285' addClass='get-started__form' />
        <Testimonials addClass="get-started__testimonials-container" />
      </div>
    );
  }
}

// Stateless child components

const Intro = (props) => {
  return (
    <div className="section__container">
      <div className="section get-started__intro">
        <div className="intro__heading">
          <h2>New to CrossFit? Let's get started</h2>
        </div>
        <div className="intro__step-container">
          <ul className="intro__steps">
            <li>STEP 1: Get in touch
              <p>Give us a call at 229-977-5025, or fill out the form on this page to send us a message. We'll set up a time for you to come in and check us out, at no cost and with no commitment</p>
            </li>
            <li>STEP 2: Learn the basics
              <p>In our Foundations course, you will learn the fundamental movements of CrossFit, discuss your goals and limitations with coaches, gain nutritional guidance, and meet our CrossFit community!</p>
              <p>This course is 1 week (5 days) long and you must attend all 5 days or make arrangements with Nick or Abrie to complete any missed classes at another time. Contact us to find out when our next Foundations Course begins!</p>
            </li>
            <li>STEP 3: Join the community and choose your membership
              <p>Membership options:</p>
              <ul>
                <li>Unlimited Membership with 6 month contract: $100/monthly</li>
                <li>Military/Response/Teacher/Student with 6 month contract: $90/monthly</li>
                <li>Unlimited Membership with month-to-month contract: $125/monthly</li>
                <li>Drop-In: $10/class</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="intro__form-container">
          <Contact home={props.home} id={props.id} addClass={props.addClass} />
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
