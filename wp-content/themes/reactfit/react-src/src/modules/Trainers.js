import React from 'react';
import axios from 'axios';

import './Trainers.css';

class Coaches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coaches: [],
    }
  }

  async componentDidMount() {
    const coaches = await axios
      .get(this.props.meta.home + '/wp-json/wp/v2/coaches')
      .then(response => {
        return response.data;
      })
      .catch(error => console.error(error));

    this.setState({
      coaches: coaches,
    });
  }

  render() {
    const width = this.props.meta.width;
    const renderedCoaches = this.state.coaches
      .sort((a,b) => {
        return Number(a.acf_fields.display_order) >= Number(b.acf_fields.display_order) ? 1 : -1;
      })
      .map(coach => {
        const img = coach.acf_fields.image;
        const bgImage = width < 768 ?   img.sizes.medium :
                       width < 1024 ? img.sizes.medium_large :
                       width < 1536 ? img.sizes.large :
                       width < 2048 ? img.sizes['1536x1536'] :
                       img.sizes['2048x2048'];
        const trainerStyle = {
          background: 'url("' + bgImage + '") center/cover no-repeat',
        }
        return (
          <div className="trainer" style={trainerStyle} key={'coach' + coach.acf_fields.first_name}>
            <h3>{coach.acf_fields.first_name} {coach.acf_fields.last_name}</h3>
            <div className="trainer__text">
              {coach.acf_fields.bio}
            </div>
          </div>
        );
      });

    return(

        <div className="section__container">
          <div className="section trainers">
            <h2 className="section__heading">Our Trainers</h2>
            <div className="trainers__container">
              {renderedCoaches}
            </div>
          </div>
        </div>
    );
  }
}

export default Coaches;
