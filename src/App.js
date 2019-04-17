import React, { Component } from 'react';
import './App.css';
import Game from './components/game';

class App extends Component {
  render() {
    console.log(React.version);
    return (
      <div className="App">
        <Game/>
      </div>
    );
  }
}

export default App;
