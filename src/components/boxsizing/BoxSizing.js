import React, { PureComponent } from 'react';
import styles from './BoxSizing.module.scss';

export default class BoxSizing extends PureComponent {
  handleClick = event => {
    const changeBox = document.getElementsByName('changeBox')[0];
    if(changeBox.style.boxSizing === 'border-box') {
      changeBox.style.boxSizing = 'content-box';
      changeBox.innerHTML = 'Content Box'
    }
    else {
      changeBox.style.boxSizing = 'border-box';
      changeBox.innerHTML = 'Border Box'
    }
  }
  render() {
      return (
          <>  
            <header className={styles.header}>
              <h2 className={styles.title}> Content-Box (Default) vs. Border-Box</h2>
            </header>
            <main className={styles.main}>
              <button className={styles.changeButton} type='button' onClick={this.handleClick}>Change</button>
              <div className={styles.box} name='changeBox'>Content-Box</div>
              <p className={styles.description}>The 'box-sizing' attribute sets whether an element&#39;s padding is included in its total width. By default, elements will <strong>NOT</strong> include padding in their width.</p>
            </main>
          </>
      );
  }
}