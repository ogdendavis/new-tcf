import React from 'react';

// Import styles
import '../global/export.css';
import './Content.css';

// Import content templates
import Home from '../templates/Home.js';

// Main content component
// Eventually, should use react router to pass this arguments and go fetch content based on path. Can I do that? Who knows?!
class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      path: '/',
      meta: props.meta,
    }
  }

  render() {
    return (
      <Home meta={this.state.meta} />
    );
  }
}

// Stateless child components


export default Content;
