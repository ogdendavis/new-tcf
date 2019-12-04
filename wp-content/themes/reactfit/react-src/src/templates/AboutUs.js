import React from 'react';

import './AboutUs.css';

// Modules
import Hero from '../modules/Hero';
import Trainers from '../modules/Trainers'

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    console.log('About Us', this.props.page);
    // TEMP until we can get this from WP
    const videoEmbedCode = {
      __html: '<iframe width="560" height="315" src="https://www.youtube.com/embed/mlVrkiCoKkg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    }
    const fields = this.props.page.acf_fields
    return (
      <div className="about-us__wrapper">
        <Hero image={fields.hero_image} heading={fields.hero_heading} subhead={fields.hero_subhead} />
        <Intro video={videoEmbedCode} />
        <Community />
        <Trainers meta={this.props.meta}/>
        <ProgramDetail />
      </div>
    );
  }
}

// Stateless child components

const Intro = (props) => {
  return (
    <div className="section__container">
      <div className="section about-us__intro">
        <div className="intro__heading">
          <h2 className="section__heading">About Us</h2>
        </div>
        <div className="about-us__intro-text">
          <p>We opened Thomasville CrossFit to help our community achieve their health and fitness goals. Each day, we strive to build a strong, healthy, and fit community that supports each other. Our love for Thomasville is as great as our love for fitness! CrossFit provided a way for us to deliver functional fitness, nutrition education, and support to our community.</p>
          <h3>What is CrossFit?</h3>
          <p>Our Goal is to forge a broad, general and inclusive fitness program. We have designed a program that will best prepare our members for any physical task — not only for the unknown, but for the unknowable. We strive to increase work capacity across broad time and modal domains. Capacity is the ability to do real work, which is measurable using the basic terms of physics (force, distance and time). Life is unpredictable (much more so than sport) so real world fitness must be broad and not specialized, both in terms of duration and type of effort (time and modal domains).</p>
        </div>
        <div className="about-us__video-wrapper" dangerouslySetInnerHTML={props.video} />
      </div>
    </div>
  );
}

const Community = (props) => {
  return (
    <div className="section__container community__container">
      <div className="section about-us__community">
        <div className="community__heading">
          <h2 className="section__heading">Our Community</h2>
        </div>
        <div className="community__photos">
          <div className="community__photo" style={{background:'url("http://localhost/new-tcf/wp-content/uploads/2019/11/community0.jpg") center/cover no-repeat',}} />
          <div className="community__photo" style={{background:'url("http://localhost/new-tcf/wp-content/uploads/2019/11/community1.jpg") center/cover no-repeat',}} />
          <div className="community__photo" style={{background:'url("http://localhost/new-tcf/wp-content/uploads/2019/11/community2.jpg") center/cover no-repeat',}} />
          <div className="community__photo" style={{background:'url("http://localhost/new-tcf/wp-content/uploads/2019/11/community3.jpg") center/cover no-repeat',}} />
        </div>
        <div className="community__text">
          <p>The needs of our members differ by degree, not kind. Our former highs school and collegiate athletes, endurance athletes, grandparents, and soccer moms have all found their best fitness from the same regimen. Our melting pot of members drive each other to be better, record their data, get stronger, eat healthier, and truly support each other inside and outside of the box. While it challenges the world’s fittest, the CrossFit program is designed for universal scaling, making it the perfect application for any committed individual, regardless of experience. We scale load and intensity; we don’t change programs.</p>
        </div>
      </div>
    </div>
  );
}

const ProgramDetail = () => {
  return (
    <div className="section__container">
      <div className="section about-us__programs-details">
        <div className="programs-details__heading">
          <h2 className="section__heading">Our Programs</h2>
        </div>
        <div className="programs-details__program-detail">
          <div className="program-detail__text">
            <h3>Foundations</h3>
            <p>In our Foundations course, you will learn the fundamental movements of CrossFit, discuss your goals and limitations with coaches, gain nutritional guidance, and meet our CrossFit community! Over the course of five one-on-one sessions with one of our expert coaches, you'll build skills and gain confidence to prepare you for successful entry into our CrossFit group classes.</p>
          </div>
          <div className="program-detail__image-container">
            <img className="program-detail__image" src="http://localhost/new-tcf/wp-content/uploads/2019/11/coaches-n-leslie.jpg" alt="Foundations program" />
          </div>
        </div>
        <div className="programs-details__program-detail">
          <div className="program-detail__text">
            <h3>CrossFit</h3>
            <p>All of our workouts are based on functional movements – these are movements that you use everyday, everywhere. These will help you move the heaviest weight the furthest distance and are optimal for getting the most work done in the shortest amount of time. The magic is in the movements! Our coaches focus on the perfection of these movements and working with each athlete to make them their best and keep them safe. By using a constantly varied training program, these functional movements performed at high intensity produce dramatic fitness gains.</p>
          </div>
          <div className="program-detail__image-container">
            <img className="program-detail__image" src="http://localhost/new-tcf/wp-content/uploads/2019/11/learning-cleans.jpg" alt="CrossFit program" />
          </div>
        </div>
        <div className="programs-details__program-detail">
          <div className="program-detail__text">
            <h3>Youth</h3>
            <p>The benefits of teaching children and teenagers about fitness and healath can't be overstated. Our program uses the constantly varied and infinitely scalable CrossFit methodology to create workouts tailored to the needs of young athletes while also keeping things interesting and fun. Youth CrossFit attendees will gain strength and confidence while building skills to lead a healthy life.</p>
          </div>
          <div className="program-detail__image-container">
            <img className="program-detail__image" src="http://localhost/new-tcf/wp-content/uploads/2019/11/kids-farmer-carry.jpg" alt="Youth Fitness program" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
