import React, { Component } from "react";
import "./Fetch.css";

class Fetch extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    console.log("Did mount!");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => console.log(json));
  }

  render() {
    return <div className="Fetch">Fetch</div>;
  }
}

export default Fetch;
