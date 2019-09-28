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
      {/*This is placeholder content, replicating front-page content, for now. It'll change once design is finished and we're porting in content from the back end*/}
        This is the content!!!

        <a href="#" class="button">This is a button!</a>
      </main>
    );
  }
}

// Stateless child components


export default Content;
