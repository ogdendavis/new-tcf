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
      <div className="section__container">
        <div className="section home__programs">
          <div className="programs__heading">
            <h2 className="screen-reader-text">Our Programs</h2>
          </div>
          <div className="programs__left">
            <h3>CrossFit</h3>
          </div>
          <div className="programs__center">
            <h3>Foundations</h3>
          </div>
          <div className="programs__right">
            <h3>Youth</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
