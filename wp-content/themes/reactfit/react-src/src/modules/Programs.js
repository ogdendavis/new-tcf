import React from 'react';

import './Programs.css';

class Programs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const renderedPrograms = this.props.programs ? this.props.programs.map(prog => {
      return (
        <div key={'prog' + prog.title} className="program" style={{
          background: 'linear-gradient(var(--black-a6),var(--black-a6)), url("' + prog.image + '") center/cover no-repeat',
        }}>
          <h2 className="program__heading">
            {prog.title}
          </h2>
          <ul className="program__detail">
            {prog.points.map(deet => {
              return (<li key={'prdt' + prog.points.indexOf(deet)}>{deet}</li>);
            })}
          </ul>
          <div className="button__container">
            <a className="program__action button" href="#">
              {prog.button}
            </a>
          </div>
        </div>
      );
    }) : '';

    return (
      <div className="section__container">
        <div className="section programs">
          {renderedPrograms}
        </div>
      </div>
    );
  }
}

export default Programs;
