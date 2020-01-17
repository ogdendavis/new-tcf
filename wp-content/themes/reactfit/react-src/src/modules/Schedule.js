import React from 'react';

import './Schedule.css';

const Schedule = (props) => {
  return (
    <div className="section__container">
      <div className="section schedule">
        <h2 className="section__heading">Class Schedule</h2>
          <iframe title="Class Schedule" src={props.url} width="800" height="800"></iframe>
      </div>
    </div>
  );
}

export default Schedule;
