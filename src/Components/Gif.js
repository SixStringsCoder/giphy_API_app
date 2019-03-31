import React from 'react';
import PropTypes from 'prop-types';

const Gif = props => (
  <li className="gif-wrap" title={props.gif.title}>
    <a href={props.gif.bitly_url} target="_blank">
      <img src={props.gif.images.fixed_height.url} alt={props.gif.title} />
    </a>
  </li>
);

Gif.propTypes = {
  bitly_url: PropTypes.string.isRequired
}

export default Gif;
