import React from 'react';

import './Schedule.css';

const Schedule = (props) => {
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  const frameWidth = Math.min(windowWidth - 64, 800);
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const frameHeight = Math.min(windowHeight - 32, 800);
  return (
    <div className="section__container">
      <div className="section schedule">
        <h2 className="section__heading">Class Schedule</h2>
          <iframe title="Class Schedule" src={props.url} width={`${frameWidth}px`} height={`${frameHeight}px`}></iframe>
      </div>
    </div>
  );
}

export default Schedule;
