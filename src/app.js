import React, { Component } from 'react';
import Steps from './components/Steps';
import './app.css';

class App extends Component {
  render () {
    return (
      <div className='app'>
        <Steps/>
      </div>
    );
  }
}

export default App;
