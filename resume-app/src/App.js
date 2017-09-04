import React, { Component } from 'react';
import logo  from './logo.svg';
import Cover from './Components/Cover';
import About from './Components/About';
import Exper from './Components/Exper';
import './assets/styles/stylesheet.css';

const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <Cover />
        <About />
        <Exper />
      </div>
    </div>
  );
}

export default App;
