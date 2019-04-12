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
      </main>
    );
  }
}

export default App;
