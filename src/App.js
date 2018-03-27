import React, { Component } from 'react';
import './App.css';
import { Header, Body } from './Layouts'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
