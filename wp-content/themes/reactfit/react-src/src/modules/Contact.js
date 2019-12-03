import React from 'react';
import axios from 'axios';

import './Contact.css';

// Main export component
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rendered: false,
      addClass: false,
    }
  }

  componentDidMount() {
    // Get rendered form
    const theForm = async () => {
      const form = await axios
        .get(this.props.meta.home + '/wp-json/reactfit/contact-form/' + this.props.id)
        .then(response => {
          return response.data;
        })
        .catch(error => console.error(error));
      return form;
    }

    // Put the form in state. This also calls the styling function
    const putFormInState = async () => {
      const renderedForm = await theForm();
      this.setState({
        rendered: renderedForm,
      }, styleForm);
    }

    // Style the form by adding pre-styled button class. Assumes only one form on page.
    const styleForm = () => {
      if (!this.props.buttonClass) {
        return;
      }
      const submitButton = document.querySelector('.wpcf7-submit');
      const splitClasses = this.props.buttonClass.split(' ');
      splitClasses.forEach(cl => {
        submitButton.classList.add(cl);
      });
    }

    putFormInState();
  }

  render() {
    const containerClass = this.props.addClass ? 'wpcf7__container ' + this.props.addClass : 'wpcf7__container';
    return (
      <div className={containerClass} dangerouslySetInnerHTML={{
        __html: this.state.rendered
      }} />
    );
  }

}

export default Contact;
