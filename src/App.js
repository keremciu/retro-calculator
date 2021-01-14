import React, { Component } from "react";
import Calculator from "./Calculator";
import "./App.css";

import photo from "./photo.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Retro Calculator</h1>
          <p>
            Independent memory and profit-margin percent function make this
            calculator a perfect choice for business use.
          </p>
          <p className="App-lead">
            Casio SL-300SV Solar Powered Standard Function Calculator
          </p>
        </header>
        <div className="App-intro">
          <Calculator />
          <div className="original-photo">
            <p className="App-lead">Original photo for comparison</p>
            <img src={photo} alt="Original Casio SL-300SV" width="50%" />
          </div>
        </div>
        <div className="Footer-text">
          Developed by <strong>Kerem Sevencan</strong>. Source code{" "}
          <a
            href="https://github.com/keremciu/retro-calculator"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub repository
          </a>
        </div>
      </div>
    );
  }
}

export default App;
