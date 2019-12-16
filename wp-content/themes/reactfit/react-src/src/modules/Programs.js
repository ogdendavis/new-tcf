import React from 'react';
import axios from 'axios';

import './Programs.css';

class Programs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      programs: [],
    }

    this.generateMarkup = this.generateMarkup.bind(this);
  }

  async componentDidMount() {
    const programs = await axios
      .get(this.props.meta.home + '/wp-json/reactfit/programs')
      .then(response => {
        return response.data;
      })
      .catch(error => console.error(error));

    this.setState({
      programs: programs,
    });
  }

  componentDidUpdate() {
    // Anchor links don't work out of the box with React Router, so quick implementation
    if (window.location.href.includes('/#')) {
      window.setTimeout(function() {
        const anchor = document.querySelector('#' + window.location.href.split('/#')[1]);
        anchor.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }, 500)
    }
  }

  generateMarkup(prog,width) {
    const fields = prog.acf_fields;
    const img = fields.featured_image;
    const progImage = width < 768 ? img.sizes.medium :
                      width < 1024 ? img.sizes.medium_large :
                      width < 1536 ? img.sizes.large :
                      width < 2048 ? img.sizes['1536x1536'] :
                      img.sizes['2048x2048'];
    const anchor = 'about-' + fields.name.toLowerCase();
    const buttonLink = fields.button_link ? fields.button_link : this.props.meta.home + '/about-thomasville-crossfit/#' + anchor;

    //return (<h1 style={{fontSize: '10rem', color:'red'}}>FARTS</h1>);

    // Different markup for simple display and detail display
    // Detail display indicated if prop passed as detail={true}
    return this.props.detail ?
      // Case for detail version first
      (
        <div className="programs-details__program-detail" key={'detailProgram' + fields.name} id={anchor}>
          <div className="program-detail__text">
            <h3>{fields.name}</h3>
            <p>{fields.program_blurb}</p>
          </div>
          <div className="program-detail__image-container">
            <img className="program-detail__image" src={fields.detail_image.url} alt={fields.detail_image.alt} />
          </div>
        </div>
      )

      // Return simple version if detail not specified
      : (
          <div key={'prog' + fields.name} className="program" style={{
            background: 'linear-gradient(var(--black-a6),var(--black-a6)), url("' + progImage + '") center/cover no-repeat',
          }}>
            <h2 className="program__heading">
              {fields.name}
            </h2>
            <ul className="program__detail">
              <li key={`${fields.name}-feature1`}>{fields.feature1}</li>
              <li key={`${fields.name}-feature2`}>{fields.feature2}</li>
              <li key={`${fields.name}-feature3`}>{fields.feature3}</li>
            </ul>
            <div className="button__container">
              <a className="program__action button" href={buttonLink}>
                {fields.button_text}
              </a>
            </div>
          </div>
        );
  }

  render() {
    const width = this.props.meta.width;

    const renderedPrograms = this.state.programs ?
      this.state.programs
        .filter(prog => prog.acf_fields.featured_program === true)
        .sort((a,b) => {
          return Number(a.acf_fields.order) >= Number(b.acf_fields.order) ? 1 : -1;
        })
        .map(prog => this.generateMarkup(prog,width))
      : '';

    const heading = this.props.title ? (
      <div className="programs__heading">
        <h2 className="section__heading">{this.props.title}</h2>
      </div>
    ) : null;

    return (
      <div className="section__container">
        <div className="section programs">
          {heading}
          {renderedPrograms}
        </div>
      </div>
    );
  }
}

export default Programs;
