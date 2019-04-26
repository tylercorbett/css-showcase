import React, { Component } from 'react';
import './App.scss';
import BoxSizing from './components/boxsizing/BoxSizing';
import ButtonShowcase from './components/buttonshowcase/ButtonShowcase';
import FlexBox from './components/flexbox/FlexBox';
import Footer from './components/footer/Footer';
class App extends Component {
  render() {
    return (
      <main className='all'>
        <div className='two'>
          <FlexBox/>
        </div>
         <div className='three'>
            <BoxSizing/>
        </div>
        <div className='one'>
          <ButtonShowcase/>
        </div>
        <Footer/>
      </main>
    );
  }
}

export default App;
