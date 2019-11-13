import React from 'react';
import axios from 'axios';

import './Contact.css';

// Main export component
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: this.props.home,
      id: this.props.id,
      rendered: false,
      addClass: false,
    }
  }

  componentDidMount() {
    const theForm = async () => {
      const form = await axios
        .get(this.state.home + '/wp-json/reactfit/contact-form/' + this.state.id).
        then(response => {
          return response.data;
        })
        .catch(error => console.error(error));
      return form;
    }

    const putFormInState = async () => {
      const renderedForm = await theForm();
      this.setState({
        rendered: renderedForm,
      });
    }

    putFormInState();

    if (this.props.addClass) {
      this.setState({ addClass: this.props.addClass });
    }
  }

  render() {
    const containerClass = this.state.addClass ? 'section__container contact__container ' + this.state.addClass : 'section__container contact__container'
    return (
      <div className={containerClass}>
        <div className="section contact">
          <div className="wpcf7__container" dangerouslySetInnerHTML={{
            __html: this.state.rendered
          }} />
        </div>
      </div>
    );
  }

}

export default Contact;
