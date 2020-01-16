import React from 'react';

// Import styles
import './Header.css';

// Main header component
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
    }

    this.handleScroll = this.handleScroll.bind(this);
    this.handleHammy = this.handleHammy.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    document.querySelector('.header__hammy').addEventListener('click', this.handleHammy);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    document.querySelector('.header__hammy').removeEventListener('click', this.handleHammy);
  }

  handleScroll = () => {
    if(document.documentElement.scrollTop > 120 && this.state.scrolled === false) {
      this.setState({ scrolled: true, });
    }
    else if (document.documentElement.scrollTop <= 80 && this.state.scrolled === true) {
      this.setState({ scrolled: false, });
    }
  }

  handleHammy = () => {
    const header = document.querySelector('.site-header');
    if (header.classList.contains('site-header--open')) {
      document.querySelector('.header__content').style.height = '0';
    }
    else {
      const hammyHeight = document.querySelector('.header__hammy').offsetHeight;
      const headerContent = document.querySelector('.header__content');
      headerContent.style.height = `${window.innerHeight - hammyHeight + 2}px`;
      headerContent.style.top = `${hammyHeight - 2}px`;
    }
    header.classList.toggle('site-header--open');
  }

  render() {
    const classes = this.state.scrolled ? 'site-header site-header--scrolled' : 'site-header';
    return (
      <div className={classes}>
        <div className="header__hammy">
          <div className="hammy__top" />
          <div className="hammy__mid" />
          <div className="hammy__bot" />
        </div>
        <div className="header__content">
          <div className="header__row-one">
            <HeaderContact contact={this.props.meta.contact}/>
          </div>
          <div className="header__row-two">
            <HeaderLogo url={this.props.meta.home} logo={this.props.logo} />
            <HeaderMenu items={this.props.menuItems} />
          </div>
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
        <a className="header__nav-link" href={item.url}>{item.title}</a>
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
      <span className="contact__group">
        <i className="fa fa-phone-alt"></i>
        <span className="contact__phone">{props.contact.phone}</span>
      </span>
      <span className="contact__group">
        <i className="fa fa-envelope"></i>
        <span className="contact__email">{props.contact.email}</span>
      </span>
      <span className="contact__group">
        <i className="fa fa-map-marker-alt"></i>
        <span className="contact__address">{props.contact.address}, Thomasville GA, 31792</span>
      </span>
    </div>
  );
}

const HeaderLogo = (props) => {
  return(
    <div className="header__logo">
      <a href={props.url}>
        <img src={props.logo} alt="TCF logo" />
      </a>
    </div>
  );
}

export default Header;
