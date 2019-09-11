import React from 'react';
import axios from 'axios';
import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [],
      open: false,
    }

    this.setMenu = this.setMenu.bind(this);
  }

  componentDidMount() {
    this.setMenu();
  }

  setMenu() {
    axios
      .get('http://localhost/new-tcf/wp-json/reactfit/header-menu')
      .then(response => {
        // Just pull out needed data for now (might want more, if we get fancy)
        const items = response.data.map(item => {
          return {
            id: item.ID,
            title: item.title,
            url: item.url,
          };
        });
        // Put it in state!
        this.setState({
          menuItems: items,
        });
      })
      .catch(error => console.log(error));
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

export default Header
