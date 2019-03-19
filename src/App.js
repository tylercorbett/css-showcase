import React, { Component } from 'react';
import './App.css';
import BoxSizing from './components/BoxSizing';

class App extends Component {
  render() {
    return (
      <main>
        <div className='one'>
          <h1 >Div 1</h1>
        </div>
        <div className='two'>
          <h1>Div 2</h1>
        </div>
        <div className='three'>
            <BoxSizing/>
        </div>
        <div className='four'>
          <h1>Div 4</h1>
        </div>
        <div className='five'>
          <h1>Div 5</h1>
        </div>
        <div className='six'>
          <h1>Div 6</h1>
        </div>
      </main>
    );
  }
}

export default App;
