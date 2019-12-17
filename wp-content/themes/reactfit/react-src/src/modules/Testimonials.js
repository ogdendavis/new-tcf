import React from 'react';
import axios from 'axios';

// Slider library -- installed via yarn
import Glide from '@glidejs/glide';
import '../../node_modules/@glidejs/glide/dist/css/glide.core.min.css'

import './Testimonials.css';

// Import nav icons
import NavIcon from '../assets/img/NavIcons.js';

class Testimonials extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addClass: false,
      testimonials: [],
    }

    this.initializeGlider = this.initializeGlider.bind(this);
  }

  async componentDidMount() {
    const testimonials = await axios
    .get(this.props.meta.home + '/wp-json/reactfit/testimonials')
    .then(response => {
      return response.data;
    })
    .catch(error => console.error(error));

    this.setState({
      testimonials: testimonials,
    }, this.initializeGlider);
  }

  initializeGlider() {
    this.slider = new Glide('.glide');
    this.slider.mount();
  }

  render() {
    return (
      <div className="glide">
      {/* Slides go in glide__track */}
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            <li className="glide__slide">0</li>
            <li className="glide__slide">1</li>
            <li className="glide__slide">2</li>
          </ul>
        </div>
        {/* Arrow controls for slider */}
        <div className="glide__arrows" data-glide-el="controls">
          <button className="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
          <button className="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
        </div>
      </div>

    );
  }

  // Original render, saved for reference
  //
  // render() {
  //   const width = this.props.meta.width;
  //   const containerClass = this.props.addClass ? 'section__container testimonials__container ' + this.props.addClass : 'section__container testimonials__container';
  //
  //   const renderedTestimonials = this.state.testimonials
  //   .sort((a,b) => {
  //     return Number(a.acf_fields.display_order) >= Number(b.acf_fields.display_order) ? 1 : -1;
  //   })
  //   .map(testimonial => {
  //     const img = testimonial.acf_fields.image;
  //     const useImg = width < 768 ?   img.sizes.medium :
  //                    width < 1024 ? img.sizes.medium_large :
  //                    width < 1536 ? img.sizes.large :
  //                    width < 2048 ? img.sizes['1536x1536'] :
  //                    img.sizes['2048x2048'];
  //
  //     return (
  //       <div className="testimonial" key={'testimonial' + testimonial.acf_fields.first_name + testimonial.acf_fields.last_name}>
  //         <div className="testimonial__text">
  //           <div className="testimonial__quote">
  //             {testimonial.acf_fields.text}
  //           </div>
  //           <div className="testimonial__author">
  //             {testimonial.acf_fields.first_name}
  //           </div>
  //         </div>
  //         <div className="testimonial__photo">
  //           <img src={useImg} alt={testimonial.acf_fields.image.alt} />
  //         </div>
  //       </div>
  //     );
  //   });
  //
  //   return (
  //     <div className={containerClass}>
  //       <div className="section testimonials">
  //         <h2 className="screen-reader-text">Testimonials</h2>
  //
  //         <div className="testimonials__nav-container">
  //           <NavIcon icon='caret-left' class='testimonials__arrow' />
  //         </div>
  //
  //         <div className="testimonials__carousel">
  //           {renderedTestimonials}
  //         </div>
  //
  //         <div className="testimonials__nav-container">
  //           <NavIcon icon='caret-right' class='testimonials__arrow' />
  //         </div>
  //
  //       </div>
  //     </div>
  //   );
  // }
}

export default Testimonials;
