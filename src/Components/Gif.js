import React from 'react';

const Gif = props => (
  <li className="gif-wrap">
    <a href={props.gif.bitly_url} target="_blank">
      <img src={props.gif.images.fixed_height.url} alt={props.gif.title} />
    </a>
  </li>
);

export default Gif;
