import React from 'react';
import axios from 'axios';

import './Trainers.css';

class Coaches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  async componentDidMount() {
    const coaches = await axios
      .get(this.props.home + '/wp-json/wp/v2/coaches')
      .then(response => {
        return response.data;
      })
      .catch(error => console.error(error));

    this.setState({
      coaches: coaches,
    });
  }

  render() {
    return(

        <div className="section__container">
          <div className="section trainers">
            <h2 className="section__heading">Our Trainers</h2>

            <div className="trainers__container">

              <div className="trainer" style={{
                background: "url('http://localhost/new-tcf/wp-content/uploads/2019/10/nick-cleans-square.jpg') center/cover no-repeat"
              }}>
                <h3>Nick Sellers</h3>
                <div className="trainer__text">
                  Nick is awesome! He's so awesome that it's hard to describe how awesome he is. But let's try: He's more awesome than the awesomest thing that the awesomest person in the world could ever hope to think of.
                </div>
              </div>

              <div className="trainer" style={{
                background: "url('http://localhost/new-tcf/wp-content/uploads/2019/10/abrie-square.jpg') center/cover no-repeat"
              }}>
                <h3>Abrie Sellers</h3>
                <div className="trainer__text">
                  Abrie is awesome! She's so awesome that it's hard to describe how awesome she is. But let's try: She's more awesome than the awesomest thing that the awesomest person in the world could ever hope to think of.
                </div>
              </div>

              <div className="trainer" style={{
                background: "url('http://localhost/new-tcf/wp-content/uploads/2019/10/lucas-silly-mod.jpg') center/cover no-repeat"
              }}>
                <h3>Lucas Ogden-Davis</h3>
                <div className="trainer__text">
                  Lucas is ok, too. It's pretty easy to describe how ok he is. Imagine someone who is pretty ok. Now imagine that person imagining another person, who the original ok person thinks is ok. Lucas is that ok person, as envisioned by another ok person.
                </div>
              </div>

            </div>
          </div>
        </div>
    );
  }
}

export default Coaches;
