import React from 'react';

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
        <DoIt />
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
              Learn More
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
              Sign up now
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

const Testimonials = (props) => {
  return (
    <div className="section__container testimonials__container">
      <div className="section home__testimonials">
        <h2 className="screen-reader-text">Testimonials</h2>
        <div className="testimonials__carousel">
          <div className="testimonial__text">
            <div className="testimonial">
              I love Thomasville Crossfit. Nick and Abrie have really helped motivate me to be a better person and I have lots of new friends! We help each other great stronger and in better shape everyday. I thank God for Thomasville CrossFit -- it has changed my life!
            </div>
            <div className="testimonial__author">
              Shane
            </div>
          </div>
          <div className="testimonial__photo">
            <img src="http://localhost/new-tcf/wp-content/uploads/2019/10/shane.jpg" alt="Shane holding a kettlebell" />
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
        Put a button to do a thing!
      </div>
    </div>
  );
}

export default Home;