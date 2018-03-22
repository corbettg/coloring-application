import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SketchExample from './Components/Canvas'
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
