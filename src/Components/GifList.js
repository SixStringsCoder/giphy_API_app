import React from 'react';
import Gif from './Gif';
import NoGifs from './NoGifs';

const GifList = props => {

  let gifs;

  props.arrayOfGifs.length > 0
  ?
  gifs = props.arrayOfGifs.map( gif => <Gif gif={gif} key={gif.id} /> )
  :
  gifs = <NoGifs />


  return(
    <ul className="gif-list">
      { gifs }
    </ul>
  );
}

export default GifList;
