import React from 'react';

import './Schedule.css';

class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="section__container">
        <div className="section schedule">
          <h2 className="section__heading">Class Schedule</h2>
            <iframe title="Class Schedule" src={this.props.url} width="800" height="800"></iframe>
        </div>
      </div>
    );
  }
}

export default Schedule;
