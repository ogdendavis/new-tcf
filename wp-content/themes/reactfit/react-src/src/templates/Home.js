import React from 'react';

// Import modules
import Testimonials from '../modules/Testimonials.js';
import Trainers from '../modules/Trainers.js';
import Schedule from '../modules/Schedule.js';

// Import styles
import './Home.css';

// Main export component
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meta: props.meta,
    }
  }

  render() {
    return (
      <div className="home__wrapper">
        <Programs />
        <Testimonials />
        <DoIt link="#" text="Get Started" blurb="Ready to start your fitness journey? Sign up for our Foundations program today." />
        <Trainers />
        <DoIt link="#" text="Join Us" blurb="Want to get fit and have fun? Check out our membership options." />
        <Schedule />
        <DoIt link="#" text="Contact Us" blurb="Have questions? We'd love to talk with you about our awesome fitness programs." />
      </div>
    );
  }
}

// Stateless child components

const Programs = (props) => {
  return (
    <div className="section__container">
      <div className="section home__programs">
        <div className="programs__heading">
          <h2 className="screen-reader-text">Our Programs</h2>
        </div>
        <div className="programs__left">
          <h3 className="program__heading">
            CrossFit
          </h3>
          <ul className="program__detail">
            <li>Fun, motivating group classes</li>
            <li>Led by professional CrossFit trainers</li>
            <li>Unlimited sessions per month</li>
          </ul>
          <div className="button__container">
            <a className="program__action button" href="#">
              Sign up now
            </a>
          </div>
        </div>
        <div className="programs__center">
          <h3 className="program__heading">
            Foundations
          </h3>
          <ul className="program__detail">
            <li>Start CrossFit with 1:1 guidance</li>
            <li>Learn how to eat for your goals</li>
            <li>Gain skills and confidence</li>
          </ul>
          <div className="button__container">
            <a className="program__action button" href="#">
              Get started
            </a>
          </div>
        </div>
        <div className="programs__right">
          <h3 className="program__heading">
            Youth
          </h3>
          <ul className="program__detail">
            <li>Learn about fitness and health</li>
            <li>Gain strength and confidence</li>
            <li>Have fun!</li>
          </ul>
          <div className="button__container">
            <a className="program__action button" href="#">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const DoIt = (props) => {
  return (
    <div className="section__container do-it__container">
      <div className="section do-it">
        <div className="do-it__blurb">
          {props.blurb}
        </div>
        <div className="do-it__link">
          <a className="button button--white-alt do-it__button" href={props.link}>{props.text}</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
