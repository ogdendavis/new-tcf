import React from 'react';
import axios from 'axios';
import './Header.css';

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
        <HeaderMenu items={this.state.menuItems} />
      </div>
    );
  }
}

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

const HeaderLogo = (props) => {

}

export default Header
