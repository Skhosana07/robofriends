import React, { Component } from "react";
import CardList from "../componets/CardList";
import "tachyons";
import Scroll from "../componets/Scroll";
import SearchBox from "../componets/SearchBox";
import "./App.css";
import ErrorBoundry from "../componets/ErrorBoundry";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  } //initializing the state, these are variables that control application behaviour

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value }); //update the state
  };

  render() {
    const { robots, searchfield } = this.state;

    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !robots.length ? (
      <h1 className="tc">Loading......</h1>
    ) : (
      <div className="tc">
        <h1 className="f2">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />

        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default App;
