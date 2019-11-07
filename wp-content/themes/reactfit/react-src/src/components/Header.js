import React from 'react';

// Import styles
import '../global/export.css';
import './Header.css';

// Main header component
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: this.props.menuItems,
      scrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if(document.documentElement.scrollTop > 120 && this.state.scrolled === false) {
      this.setState({ scrolled: true, });
    }
    else if (document.documentElement.scrollTop <= 80 && this.state.scrolled === true) {
      this.setState({ scrolled: false, });
    }
  }

  render() {
    const classes = this.state.scrolled ? 'site-header site-header--scrolled' : 'site-header';
    return (
      <div className={classes}>
        <div className="header__row-one">
          <HeaderContact />
        </div>
        <div className="header__row-two">
          <HeaderLogo url={this.props.home} />
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
    <div className="header__menu">
      {innerContent}
    </div>
  );
}

const HeaderContact = (props) => {
  return(
    <div className="header__contact">
      <i className="fa fa-phone-alt"></i>
      <span className="contact__phone">229-977-5025</span>
      <i className="fa fa-envelope"></i>
      <span className="contact__email">abrie@thomasvillecrossfit.com</span>
      <i className="fa fa-map-marker-alt"></i>
      <span className="contact__address">118 Fairbanks Ave, Thomasville GA, 31792</span>
    </div>
  );
}

const HeaderLogo = (props) => {
  return(
    <div className="header__logo">
      <a href={props.url}>
        <img src="//localhost/new-tcf/wp-content/uploads/2019/09/SM-tcf-logo-transparent-white.png" alt="TCF logo" />
      </a>
    </div>
  );
}

export default Header;
