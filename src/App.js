import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ButtonGrid from './ButtonGrid'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='App-header'>
          <ButtonGrid />
        </div>
      </div>
    );
  }
}

export default App;
