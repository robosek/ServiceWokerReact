import React, { Component } from 'react';
import logo from './logo.svg';
import cat from './cat.gif';
import './App.css';
import ImageButton from './components/ImageButton.react'
import CustomImage from './components/CustomImage.react'
import ConnectionController from './components/ConnectionController.react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Offline test application</h2>  
        </div>
        <br/>
        <div className="container">
          <ConnectionController />
          <br />
          <ImageButton uniqueId="imageButton" titleText="Get random image" />
        </div>
      </div>
    );
  }
}

export default App;
