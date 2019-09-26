import React from 'react';

// Import styles
import '../global/export.css';
import './Footer.css';

// Main header component
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div class="site-footer">
        FOOTER!
      </div>
    );
  }
}

export default Footer;
