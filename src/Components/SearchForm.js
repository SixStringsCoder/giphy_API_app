import React, { Component } from 'react';

class SearchForm extends Component {

  state = {
    searchText: '',
    isStickers: false,
    searchType: 'gifs'
  }

  // Load Stickers of GIFs
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
  }

  render() {
    const { isStickers } = this.state;
    return (
      <form className="search-form" onSubmit={this.handleSubmit} >
        <div id="switchArea">
          <label className="switch">
            <input type="checkbox" onChange={this.handleWhichSearch} />
            <span className="slider round"></span>
          </label>
          <h5 className="autoWord">{isStickers ? "STICKERS" : "GIFS"}</h5>
        </div>

        <label className="is-hidden" htmlFor="search">Search</label>
        <input type="search"
               id="searchfield"
               onChange={this.onSearchChange}
               name="search"
               placeholder="Search..." />
        <button type="submit" id="submit" className="search-button">
          <i className="material-icons icon-search">search</i>
        </button>
      </form>
    );
  }
}

export default SearchForm;
