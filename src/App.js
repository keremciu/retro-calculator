import React, { Component } from 'react';
import Calculator from './Calculator'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Retro Calculator</h1>
        </header>
        <div className="App-intro">
          <Calculator />
        </div>
        <div className="Footer-text">
        Developed by <strong>Kerem Sevencan</strong> for Flixbus.
        </div>
      </div>
    );
  }
}

export default App;
