import React from 'react';

// Import styles
import '../global/export.css';
import './Content.css';

// Main content component
// Eventually, should use react router to pass this arguments and go fetch content based on path. Can I do that? Who knows?!
class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      path: '/',
    }
  }

  render() {
    return (
      <main className="site-main">
        This is the content!!!
      </main>
    );
  }
}

// Stateless child components


export default Content;
