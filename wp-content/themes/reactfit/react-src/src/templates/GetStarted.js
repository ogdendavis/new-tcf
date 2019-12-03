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

  componentDidMount() {
    // Temporary object to hold Program info
    const tempPrograms = [
      {
        title: 'CrossFit',
        points: [
          'Fun, motivating group classes',
          'Led by professional CrossFit trainers',
          'Unlimited sessions per month',
        ],
        button: 'Sign up now',
        image: 'http://localhost/new-tcf/wp-content/uploads/2019/10/demo-team.jpg',
      },
      {
        title: 'Foundations',
        points: [
          'Start CrossFit with 1:1 guidance',
          'Learn how to eat for your goals',
          'Gain skills and confidence',
        ],
        button: 'Get started',
        image: 'http://localhost/new-tcf/wp-content/uploads/2019/10/pete-coaches.jpg',
      },
      {
        title: 'Youth',
        points: [
          'Learn about fitness and health',
          'Gain strength and confidence',
          'have fun!',
        ],
        button: 'Learn more',
        image: 'http://localhost/new-tcf/wp-content/uploads/2019/10/teens.jpg',
      },
    ];
    this.setState({programs: tempPrograms});
  }

  render() {
    return (
      <div className="get-started__wrapper">
        <Hero image={'http://localhost/new-tcf/wp-content/uploads/2019/11/learning-cleans.jpg'} />
        <Intro meta={this.props.meta} id='285' formClass='get-started__form' />
        <Programs meta={this.props.meta} programs={this.state.programs} title='Check out our programs'/>
        <Testimonials addClass="get-started__testimonials-container" meta={this.props.meta} />
        <DropIn />
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
          <h2 className="section__heading">New to CrossFit? Let's get started</h2>
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
          <Contact meta={props.meta} id={props.id} formClass={props.formClass} buttonClass={'button button--no-margin button--white-alt'} />
        </div>
      </div>
    </div>
  );
}

const DropIn = (props) => {
  return (
    <div className="section__container">
      <div className="section get-started__dropin">
        <h2 className="section__heading">Drop in with us</h2>
        <div className="dropin__content">
          <div className="dropin__text">
            If you're an experienced CrossFitter visiting Thomasville, we'd love to have you WOD with us. Check out our schedule to find the class that fits your needs, and plan to arrive 10 minutes early to sign a waiver and get your bearings. Our drop-in rate is $10 per class.
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
