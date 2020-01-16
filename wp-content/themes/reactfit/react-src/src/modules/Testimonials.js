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
    this.slider = new Glide('.glide', {
      type: 'carousel',
      autoplay: 7000,
      hoverpause: true,
    });
    this.slider.mount();
  }

  render() {
    const width = this.props.meta.width;

    const containerClass = this.props.addClass ? 'glide section__container testimonials__container ' + this.props.addClass : 'glide section__container testimonials__container';

    const renderedSlides = this.state.testimonials
        .sort((a,b) => {
          return Number(a.acf_fields.display_order) >= Number(b.acf_fields.display_order) ? 1 : -1;
        })
        .map(testimonial => {
          const img = testimonial.acf_fields.image;
          const useImg = width < 768 ?   img.sizes.medium :
                         width < 1024 ? img.sizes.medium_large :
                         width < 1536 ? img.sizes.large :
                         width < 2048 ? img.sizes['1536x1536'] :
                         img.sizes['2048x2048'];

          return (
            <li className="glide__slide testimonial" key={'testimonial' + testimonial.acf_fields.first_name + testimonial.acf_fields.last_name}>
              <div className="testimonial__text">
                <div className="testimonial__quote">
                  {testimonial.acf_fields.text}
                </div>
                <div className="testimonial__author">
                  {testimonial.acf_fields.first_name}
                </div>
              </div>
              <div className="testimonial__photo">
                <img src={useImg} alt={testimonial.acf_fields.image.alt} />
              </div>
            </li>
          );
        });

    return (
      <div className={containerClass}>
        <h2 className="screen-reader-text">Testimonials</h2>
      {/* Slides go in glide__track */}
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides testimonials__slides">
            {renderedSlides}
          </ul>
        </div>
        {/* Arrow controls for slider */}
        <div className="glide__arrows testimonials__nav-container" data-glide-el="controls">
          <button className="glide__arrow glide__arrow--left testimonials__nav-button" data-glide-dir="<"><NavIcon icon='caret-left' class='testimonials__arrow' /></button>
          <button className="glide__arrow glide__arrow--right testimonials__nav-button" data-glide-dir=">"><NavIcon icon='caret-right' class='testimonials__arrow' /></button>
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
