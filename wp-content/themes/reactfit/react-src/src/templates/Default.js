import React from 'react';

// Import styles
import './Default.css';

const DefaultTemplate = (props) => {
  return (
    <div className="section default__container">
      <h1 className="default__heading">{props.page.title}</h1>
      <div className="default__content" dangerouslySetInnerHTML={{__html: props.page.content}} />
    </div>
  );
}

export default DefaultTemplate;
