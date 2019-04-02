import React from 'react';

const Gif = props => (
    <li className="gif-wrap" title={props.gif.title}>
      <a href={props.gif.bitly_url} target="_blank" rel="noopener noreferrer">
        <img src={props.gif.images.fixed_height.url} alt={props.gif.title} />
      </a>
    </li>
);

export default Gif;
