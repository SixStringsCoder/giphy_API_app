import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      gifs: [],
      isLoading: true
    }
  }

  componentDidMount() {
    this.searchGiphy();
  }

  searchGiphy = (searchType="gifs", searchTerm="sharks") => {
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
            <GifList arrayOfGifs={this.state.gifs} />
          }
        </div>
      </div>
    );
  }
}
