import React from 'react';

// Import modules
import Hero from '../modules/Hero';
import Testimonials from '../modules/Testimonials';

// Import styles
import './GetStarted.css';

class GetStarted extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="get-started__wrapper">
        <Hero home={false} image={'http://localhost/new-tcf/wp-content/uploads/2019/11/learning-cleans.jpg'} />
        <Testimonials />
      </div>
    );
  }
}

export default GetStarted;
