import React from 'react';

// Import styles
import './Default.css';

class DefaultTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="section default__container">
      <h1 className="default__heading">{this.props.page.title}</h1>
      <div className="default__content" dangerouslySetInnerHTML={{__html: this.props.page.content}} />
      </div>
    );
  }


}

export default DefaultTemplate;
