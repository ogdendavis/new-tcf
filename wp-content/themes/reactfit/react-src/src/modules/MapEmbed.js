import React from 'react';

const MapEmbed = (props) => {
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  const frameWidth = Math.min(windowWidth - 32, 480);
  const frameHeight = Math.floor(frameWidth * .75)
  return (
    <iframe title="Map Embed" src={props.url} width={frameWidth.toString() + 'px'} height={frameHeight.toString() + 'px'} frameborder="0" style={{border:'0'}} allowfullscreen=""></iframe>
  );
}

export default MapEmbed;
