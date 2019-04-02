import React from 'react';
import { Consumer } from './Context';
import Gif from './Gif';
import NoGifs from './NoGifs';

const GifList = () => {
  return (
    <Consumer>
      { context => {
        let gifs;
        context.gifs.length > 0
        ?
        gifs = context.gifs.map( gif => <Gif gif={gif} key={gif.id} /> )
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
