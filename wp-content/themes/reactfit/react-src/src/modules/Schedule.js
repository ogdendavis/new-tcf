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
            <iframe title="Class Schedule" src="https://app.wodify.com/Schedule/PublicCalendarListView.aspx?tenant=3716" width="800" height="800"></iframe>
        </div>
      </div>
    );
  }
}

export default Schedule;
