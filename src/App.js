import React, { Component } from "react";

import Posts from "./components/fetch/Post/Posts";
import PostForm from "./components/fetch/Post/PostForm";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostForm />
        <hr />
        <Posts />
      </div>
    );
  }
}

export default App;
