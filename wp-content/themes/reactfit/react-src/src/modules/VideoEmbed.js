import React from 'react';

const VideoEmbed = (props) => {
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  const frameWidth = Math.min(windowWidth - 32, 560);
  const frameHeight = Math.floor(frameWidth * .5625)
  return (
    <iframe title="Video Embed" width={frameWidth.toString() + 'px'} height={frameHeight.toString() + 'px'} src={props.url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  );
}

export default VideoEmbed;
