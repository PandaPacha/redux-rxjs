import React, { Component } from 'react';
import './App.css';
import { MouseClick } from './components/MouseClick'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <MouseClick/>
      </div>
    );
  }
}
