import React from 'react';

// Import modules
import Hero from '../modules/Hero';
import Testimonials from '../modules/Testimonials';
import Trainers from '../modules/Trainers';
import Schedule from '../modules/Schedule';
import Programs from '../modules/Programs';

// Import styles
import './Home.css';

// Main export component
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    // Temporary object to hold Program info
    const tempPrograms = [
      {
        title: 'CrossFit',
        points: [
          'Fun, motivating group classes',
          'Led by professional CrossFit trainers',
          'Unlimited sessions per month',
        ],
        button: 'Sign up now',
        image: 'http://localhost/new-tcf/wp-content/uploads/2019/10/demo-team.jpg',
      },
      {
        title: 'Foundations',
        points: [
          'Start CrossFit with 1:1 guidance',
          'Learn how to eat for your goals',
          'Gain skills and confidence',
        ],
        button: 'Get started',
        image: 'http://localhost/new-tcf/wp-content/uploads/2019/10/pete-coaches.jpg',
      },
      {
        title: 'Youth',
        points: [
          'Learn about fitness and health',
          'Gain strength and confidence',
          'have fun!',
        ],
        button: 'Learn more',
        image: 'http://localhost/new-tcf/wp-content/uploads/2019/10/teens.jpg',
      },
    ];
    this.setState({ programs: tempPrograms });
  }


  render() {
    const fields = this.props.page.acf_fields;

    return (
      <div className="home__wrapper">
        <Hero image={fields.hero_image} heading={fields.hero_heading} subhead={fields.hero_subhead} />
        <Programs meta={this.props.meta} programs={this.state.programs} />
        <Testimonials meta={this.props.meta}/>
        <DoIt link={fields.c2a1_button_link} text={fields.c2a1_button_text} blurb={fields.c2a1_text} />
        <Trainers meta={this.props.meta} />
        <DoIt link={fields.c2a2_button_link} text={fields.c2a2_button_text} blurb={fields.c2a2_text} />
        <Schedule />
        <DoIt link={fields.c2a3_button_link} text={fields.c2a3_button_text} blurb={fields.c2a3_text} />
      </div>
    );
  }
}

// Stateless child components

const DoIt = (props) => {
  return (
    <div className="section__container do-it__container">
      <div className="section do-it">
        <div className="do-it__blurb">
          {props.blurb}
        </div>
        <div className="do-it__link">
          <a className="button button--white-alt do-it__button" href={props.link}>{props.text}</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
