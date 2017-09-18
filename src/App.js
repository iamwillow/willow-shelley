import React, { Component } from 'react';
import Cover from './Components/Cover';
import About from './Components/About';
import Exper from './Components/Exper';
import './assets/styles/stylesheet.css';

class App extends Component {
  render() {
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
}

export default App;
