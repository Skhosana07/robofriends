import React, { Component, useState, useEffect } from "react";
import CardList from "../componets/CardList";
import "tachyons";
import Scroll from "../componets/Scroll";
import SearchBox from "../componets/SearchBox";
import "./App.css";
import ErrorBoundry from "../componets/ErrorBoundry";

function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {setRobots(users)});
      console.log(count)
  },[count]);//only run if count changes

  const onSearchChange = (event) => {
    setSearchfield(event.target.value); //update the state
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });


  return !robots.length ? (
    <h1 className="tc">Loading......</h1>
  ) : (
    <div className="tc">
      <h1 className="f2">RoboFriends</h1>
      <button onClick={() => setCount(count+1)}>Click Me!</button>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
}

export default App;
