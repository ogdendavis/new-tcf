import React from 'react';
import './Header.css';

// Main header component
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: this.props.menuItems,
      open: false,
    }
  }

  render() {
    return (
      <div className="header">
        <HeaderContact />
        <div className="header__row-two">
          <HeaderLogo />
          <HeaderMenu items={this.state.menuItems} />
        </div>
      </div>
    );
  }
}

// Stateless child components
const HeaderMenu = (props) => {
  const innerContent = props.items.map(item => {
    const itemKey = 'header-menu-' + item.id;
    return (
      <div className="header-menu__item" key={itemKey}>
        <a href={item.url}>{item.title}</a>
      </div>
    );
  });

  return (
    <div className="header-menu">
      {innerContent}
    </div>
  );
}

const HeaderContact = (props) => {
  return(
    <div className="header__contact">
      <span className="phone">229-977-5025</span>
      <span className="email">abrie@thomasvillecrossfit.com</span>
      <span className="address">118 Fairbanks Ave, Thomasville GA, 31792</span>
    </div>
  );
}

const HeaderLogo = (props) => {
  return(
    <div className="header__logo">
      <img src="//localhost/new-tcf/wp-content/uploads/2019/09/SM-tcf-logo-full.png" alt="TCF logo" />
    </div>
  );
}

export default Header
