import React from 'react';

import './AboutUs.css';

// Modules
import Hero from '../modules/Hero';
import Trainers from '../modules/Trainers';
import Programs from '../modules/Programs';
import VideoEmbed from  '../modules/VideoEmbed';

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const fields = this.props.page.acf_fields
    return (
      <div className="about-us__wrapper">
        <Hero image={fields.hero_image} heading={fields.hero_heading} subhead={fields.hero_subhead} />
        <Intro fields={fields} />
        <Community fields={fields} />
        <Trainers meta={this.props.meta}/>
        <Programs title={'Our Programs'} detail={true} meta={this.props.meta} />
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
          <h2 className="section__heading">{props.fields.intro_heading}</h2>
        </div>
        <div className="about-us__intro-text">
          <p>{props.fields.intro_body}</p>
        </div>
        <div className="about-us__video-wrapper">
          <VideoEmbed url={props.fields.intro_video_url} />
        </div>
      </div>
    </div>
  );
}

const Community = (props) => {
  return (
    <div className="section__container community__container">
      <div className="section about-us__community">
        <div className="community__heading">
          <h2 className="section__heading">{props.fields.community_heading}</h2>
        </div>
        <div className="community__photos">
          <div className="community__photo" style={{background:'url("' + props.fields.community_image_1.url + '") center/cover no-repeat',}} />
          <div className="community__photo" style={{background:'url("' + props.fields.community_image_2.url + '") center/cover no-repeat',}} />
          <div className="community__photo" style={{background:'url("' + props.fields.community_image_3.url + '") center/cover no-repeat',}} />
          <div className="community__photo" style={{background:'url("' + props.fields.community_image_4.url + '") center/cover no-repeat',}} />
        </div>
        <div className="community__text">
          <p>{props.fields.community_body}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
