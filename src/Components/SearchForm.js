import React, { Component } from 'react';

export default class SearchForm extends Component {

  state = {
    searchText: '',
    isStickers: false,
    searchType: 'gifs'
  }

  handleWhichSearch = e => {
    this.setState( prevState => {
      return {
      isStickers: !prevState.isStickers,
      searchType: !prevState.isStickers ? 'stickers' : 'gifs'
      }
    });
  }

  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state.searchType, this.state.searchText);
    // e.currentTarget.reset();
  }

  render() {
    console.log(this.state.isStickers, this.state.searchType);
    return (
      <form className="search-form" onSubmit={this.handleSubmit} >
        <div id="switchArea">
          <label className="switch">
            <input type="checkbox" onChange={this.handleWhichSearch} />
            <span className="slider round"></span>
          </label>
          <h5 className="autoWord">{this.state.isStickers ? "STICKERS" : "GIFS"}</h5>
        </div>

        <label className="is-hidden" htmlFor="search">Search</label>
        <input type="search"
               onChange={this.onSearchChange}
               name="search"
               placeholder="Search..." />
        <button type="submit" id="submit" className="search-button">
          <i className="material-icons icn-search">search</i>
        </button>
      </form>
    );
  }
}
