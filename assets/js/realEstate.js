import React, { Component } from "react";
import ReactDOM from "react-dom";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <h1>Hello World</h1>
        <h2>This is my first react app</h2>
        <h3>Sup</h3>
      </div>
    );
  }
}

const app = document.getElementById("app");

ReactDOM.render(<Main />, app);
