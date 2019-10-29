import React from 'react';

// Import styles
import './Default.css';

class DefaultTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      meta: props.meta,
      title: props.title,
      content: props.content,
    }
  }

  render() {
    return (
      <div className="section default__container" dangerouslySetInnerHTML={{__html: this.state.content}} />
    );
  }


}

export default DefaultTemplate;
