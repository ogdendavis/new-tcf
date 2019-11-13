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
        <Intro home={this.state.home} id='285' addClass='get-started__form'/>
        <Testimonials />
      </div>
    );
  }
}

// Stateless child components

const Intro = (props) => {
  return (
    <div className="get-started__intro">
      <Contact home={props.home} id={props.id} addClass={props.addClass} />
    </div>
  );
}

export default GetStarted;
