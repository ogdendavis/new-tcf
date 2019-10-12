import React from 'react';

const NavIcon = (props) => {
  // Default class for nav icons, can be overriden with props
  const iconClass = props.class ? props.class : 'nav-icon';

  // Constants holding icon svgs
  const caretLeft = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.32 25.07" style={{transform: 'rotate(180deg)'}} className={iconClass}><path d="M5.42.67a2.3 2.3 0 0 0-3.27 0L.7 2.13a2.3 2.3 0 0 0 0 3.28l5.53 5.48a2.3 2.3 0 0 1 0 3.3L.7 19.62a2.3 2.3 0 0 0 0 3.28l1.45 1.47a2.3 2.3 0 0 0 3.27 0l10.23-10.22a2.3 2.3 0 0 0 0-3.27z"/></svg>
  );

  const caretRight = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.32 25.07" className={iconClass}><path d="M5.42.67a2.3 2.3 0 0 0-3.27 0L.7 2.13a2.3 2.3 0 0 0 0 3.28l5.53 5.48a2.3 2.3 0 0 1 0 3.3L.7 19.62a2.3 2.3 0 0 0 0 3.28l1.45 1.47a2.3 2.3 0 0 0 3.27 0l10.23-10.22a2.3 2.3 0 0 0 0-3.27z"/></svg>
  );

  // Outputting the correct icon
  switch (props.icon) {
    case 'caret-left':
      return caretLeft;
    case 'caret-right':
    case 'caret':
      return caretRight;
    default:
      return (
        <p style={{color:'red'}}>
          No argument provided. Please pass an 'icon' argument representing the nav icon svg you want to include. Optionally, pass an additional 'class' argument with classes you want added to the svg as a single string.
        </p>
      );
  }
}

export default NavIcon;
