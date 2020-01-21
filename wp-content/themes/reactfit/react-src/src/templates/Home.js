import React from 'react';

// Import modules
import Hero from '../modules/Hero';
import Testimonials from '../modules/Testimonials';
import Trainers from '../modules/Trainers';
import Schedule from '../modules/Schedule';
import Programs from '../modules/Programs';

// Import styles
import './Home.css';

// Main export component
const Home = (props) => {
  const fields = props.page.acf_fields;

  return (
    <div className="home__wrapper">
      <Hero image={fields.hero_image} heading={fields.hero_heading} subhead={fields.hero_subhead} />
      <Programs meta={props.meta} />
      <Testimonials meta={props.meta}/>
      <DoIt link={fields.c2a1_button_link} text={fields.c2a1_button_text} blurb={fields.c2a1_text} />
      <Trainers meta={props.meta} />
      <DoIt link={fields.c2a2_button_link} text={fields.c2a2_button_text} blurb={fields.c2a2_text} />
      <Schedule url={fields.schedule_url}/>
      <DoIt link={fields.c2a3_button_link} text={fields.c2a3_button_text} blurb={fields.c2a3_text} />
    </div>
  );
}

// Child components

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
