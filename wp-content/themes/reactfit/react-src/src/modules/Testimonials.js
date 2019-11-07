import React from 'react';

import './Testimonials.css'

// Import nav icons
import NavIcon from '../assets/img/NavIcons.js';

class Testimonials extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="section__container testimonials__container">
        <div className="section testimonials">
          <h2 className="screen-reader-text">Testimonials</h2>

          <div className="testimonials__nav-container">
            <NavIcon icon='caret-left' class='testimonials__arrow--left' />
          </div>

          <div className="testimonials__carousel">
            <div className="testimonial__text">
              <div className="testimonial test">
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
}

export default Testimonials;
