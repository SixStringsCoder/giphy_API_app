import React from 'react';
import { Consumer } from './Context';
import Gif from './Gif';
import NoGifs from './NoGifs';

const GifList = () => {
  return (
    <Consumer>
      { context => {
        let gifs;

        context.length > 0
        ?
        gifs = context.map( gif => <Gif gif={gif} key={gif.id} /> )
        :
        gifs = <NoGifs />

        return (
          <ul className="gif-list">
            { gifs }
          </ul>
        )
      }}
    </Consumer>
  );
}

export default GifList;
