import React, { Component } from 'react';
import './App.scss';
import BoxSizing from './components/boxsizing/BoxSizing';
import ButtonShowcase from './components/buttonshowcase/ButtonShowcase';
import FlexBox from './components/flexbox/FlexBox';
class App extends Component {
  render() {
    return (
      <main>
        <div className='two'>
          <FlexBox/>
        </div>
         <div className='three'>
            <BoxSizing/>
        </div>
        <div className='one'>
          <ButtonShowcase/>
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
