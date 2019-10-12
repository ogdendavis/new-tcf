import React from 'react';

// Import styles
import './Home.css';

// Import nav icons
import NavIcon from '../assets/img/NavIcons.js';

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

const Testimonials = (props) => {
  return (
    <div className="section__container testimonials__container">
      <div className="section home__testimonials">
        <h2 className="screen-reader-text">Testimonials</h2>

        <div className="testimonials__nav-container">
          <NavIcon icon='caret-left' class='testimonials__arrow--left' />
        </div>

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

        <div className="testimonials__nav-container">
          <NavIcon icon='caret-right' class='testimonials__arrow--left' />
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

const Trainers = (props) => {
  return (
    <div className="section__container">
      <div className="section home__trainers">
        <h2 className="section__heading">Our Trainers</h2>

        <div className="trainer">
          <div className="trainer__text">
            <h3>Nick Sellers</h3>
            Nick is awesome! He's so awesome that it's hard to describe how awesome he is. But let's try: He's more awesome than the awesomest thing that the awesomest person in the world could ever hope to think of.
          </div>
          <div className="trainer__photo">
            <img src="http://localhost/new-tcf/wp-content/uploads/2019/10/nick-cleans.jpg" alt="Nick Sellers" />
          </div>
        </div>

        <div className="trainer">
          <div className="trainer__text">
            <h3>Abrie Sellers</h3>
            Abrie is awesome! She's so awesome that it's hard to describe how awesome she is. But let's try: She's more awesome than the awesomest thing that the awesomest person in the world could ever hope to think of.
          </div>
          <div className="trainer__photo">
            <img src="http://localhost/new-tcf/wp-content/uploads/2019/10/abrie-square.jpg" alt="Abrie Sellers" />
          </div>
        </div>

        <div className="trainer">
          <div className="trainer__text">
            <h3>Lucas Ogden-Davis</h3>
            Lucas is ok, too. It's pretty easy to describe how ok he is. Imagine someone who is pretty ok. Now imagine that person imagining another person, who the original ok person thinks is ok. Lucas is that ok person, as envisioned by another ok person.
          </div>
          <div className="trainer__photo">
            <img src="http://localhost/new-tcf/wp-content/uploads/2019/10/lucas-silly.jpg" alt="Lucas Ogden-Davis" />
          </div>
        </div>

      </div>
    </div>
  );
}

const Schedule = (props) => {
  return (
    <div className="section__container">
      <div className="section home__schedule">
        <h2 className="section__heading">Class Schedule</h2>
          <iframe src="https://app.wodify.com/Schedule/PublicCalendarListView.aspx?tenant=3716" width="800" height="800"></iframe>
      </div>
    </div>
  );
}

export default Home;
