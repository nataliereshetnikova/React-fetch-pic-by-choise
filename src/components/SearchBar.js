import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userChoise: "Search for...",
    };
  }
  componentDidUpdate() {
    console.log("search!");
  }
  getInput = (event) => {
    this.setState({ userChoise: event.target.value });
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="ui field">
            <label htmlFor="searchBar">Search for an image</label>
          </div>
          <div className="ui field">
            <div className="ui icon input">
              <input
                size="large"
                id="searchBar"
                type="text"
                placeholder={this.state.userChoise}
                onChange={this.getInput}
              />
              <i aria-hidden="true" className="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
