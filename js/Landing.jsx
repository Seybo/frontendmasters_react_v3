// @flow

import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setSearchTerm } from "./actionCreators";

// .,. const handleSearchTermChange = searchTerm => console.log(searchTerm);

const Landing = (props: {
  searchTerm: string,
  handleSearchTermChange: Function
}) => (
  <div className="landing">
    <h1>svideo</h1>
    <input
      value={props.searchTerm}
      type="text"
      placeholder="search"
      onChange={() => props.handleSearchTermChange(props.searchTerm)}
    />
    <Link to="/search">or Browse All</Link>
  </div>
);

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

// dispatch is passing an action to a root reducer
const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
