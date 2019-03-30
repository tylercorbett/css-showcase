import React, { PureComponent } from 'react';
import styles from './BoxSizing.module.scss';

export default class BoxSizing extends PureComponent {
  handleClick = event => {
    console.log(event.target.className);
  }
  render() {
      return (
          <>  
            <header>
              <h2 className={styles.title}> Content-Box (Default) vs. Border-Box</h2>
            </header>
            <main className={styles.main}>
              <button className={styles.changeButton} type='button' onClick={this.handleClick}>Change</button>
              <div className={styles.box}/>
            </main>
          </>
      );
  }
}