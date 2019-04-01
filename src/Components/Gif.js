import React from 'react';
import { Consumer } from './Context';

const Gif = props => (
  <Consumer>
  { context => {
    return (
      <li className="gif-wrap" title={props.gif.title}>
        <a href={props.gif.bitly_url} target="_blank" rel="noopener noreferrer">
          <img src={props.gif.images.fixed_height.url} alt={props.gif.title} />
        </a>
      </li>
    )
  }}
  </Consumer>


);

export default Gif;
