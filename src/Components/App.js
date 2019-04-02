import React, { Component } from 'react';
import { Provider } from './Context';
import axios from 'axios';
import './App.css';
import SearchForm from './SearchForm';
import GifList from './GifList';

class App extends Component {
  state = {
      gifs: [],
      isLoading: true
  }

  componentDidMount() {
    this.searchGiphy();
  }

  searchGiphy = (searchType="gifs", searchTerm="blueberrie") => {
    const url = 'https://api.giphy.com/v1/';
    const searchKey = 'search?api_key=szl6VYCm8RNBR4II8d3xu8zbD6NeRwQK&';

    axios.get(`${url}${searchType}/${searchKey}q=${searchTerm}&limit=24&offset=0&rating=R&lang=en`)
    .then(response => this.setState({
      gifs: response.data.data,
      isLoading: false
    }, console.log(`${url}${searchType}/${searchKey}q=${searchTerm}&limit=24&offset=0&rating=R&lang=en`)))
    .catch(error => {
      console.log("YO! Something's really, really wrong here!", error);
    });
  }

  render() {
    console.log(this.state.gifs);
    return (
      <Provider value={{
        gifs: this.state.gifs,
      }}>
        <div>
          <div className="main-header">
            <div className="inner">
              <h1 className="main-title">GOTTA GIF IT</h1>
              <SearchForm onSearch={this.searchGiphy} />
            </div>
          </div>
          <div className="main-content">
            {
              this.state.isLoading
              ?
              <h2>LOADING...</h2>
              :
              <GifList />
            }
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
