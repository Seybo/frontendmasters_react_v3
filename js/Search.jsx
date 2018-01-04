// @flow

import React from "react";
// import preload from "../data.json";
import ShowCard from "./ShowCard";

class Search extends React.Component {
  state = {
    searchTerm: ``
  };

  props: {
    shows: Array<Show>
  };

  handleSearchTermChange = (
    event: SyntheticKeyboardEvent & { target: HTMLInputElement }
  ) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div className="search">
        <header>
          <h1>svideo</h1>
          <input
            onChange={this.handleSearchTermChange}
            value={this.state.searchTerm}
            type="text"
            placeholder="Search"
          />
        </header>
        <div className="search">
          {this.props.shows
            .filter(
              show =>
                `${show.title} ${show.description}`
                  .toUpperCase()
                  .indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map(show => (
              <ShowCard
                key={show.imdbID}
                poster={show.poster}
                title={show.title}
                year={show.year}
                description={show.description}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default Search;
