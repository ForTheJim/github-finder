import React, { Component } from "react";
import Proptypes from "prop-types";

export class Search extends Component {
  state = {
    text: "",
  };

  static propTypes = {
    searchUsers: Proptypes.func.isRequired,
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: "" });
  };
  render() {
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <input
            type="text"
            name="text"
            placeholder="Find User"
            value={this.state.text}
            onChange={this.onChange}></input>
          <button type="submit" value="Search" className="btn">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
