import React from 'react';

// Import modules
import Hero from '../modules/Hero';
import Testimonials from '../modules/Testimonials';
import Contact from '../modules/Contact';

// Import styles
import './GetStarted.css';

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
        <Contact home={this.state.home} id='285'/>
        <Testimonials />
      </div>
    );
  }
}

export default GetStarted;
