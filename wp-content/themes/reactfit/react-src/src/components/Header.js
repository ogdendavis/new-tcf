import React from 'react';
import './Header.css';

// function Header() {
//   return (
//     <h1>Hello!</h1>
//   )
// }
//
// export default Header;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  }

  render() {
    return (
      <h1>Hola!</h1>
    );
  }
}

export default Header
