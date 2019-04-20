import React, { PureComponent } from 'react';
import styles from './BoxSizing.module.scss';

export default class BoxSizing extends PureComponent {
  handleClick = event => {
    const changeBox = document.getElementsByName('changeBox')[0];
    const paddingLineLeft = document.getElementsByName('paddingLineLeft')[0];
    const paddingLineRight = document.getElementsByName('paddingLineRight')[0];

    paddingLineLeft.style.left = 0;
    paddingLineRight.style.right = 0;


    if(changeBox.style.boxSizing === 'border-box') {
      changeBox.style.boxSizing = 'content-box';
      changeBox.innerHTML = 'Content Box';
      paddingLineLeft.style.left = 0;
      paddingLineRight.style.right = 0;
    }
    else {
      changeBox.style.boxSizing = 'border-box';
      changeBox.innerHTML = 'Border Box';
      paddingLineLeft.style.left = '1.9em';
      paddingLineRight.style.right = '1.9em';
    }
  }
  componentDidMount() {
    const changeBox = document.getElementsByName('changeBox')[0];
    changeBox.style.boxSizing = 'border-box';
  }
  render() {
    return (
        <>  
          <header className={styles.header}>
            <h2 className={styles.title}> Content-Box vs. Border-Box</h2>
          </header>
          <main className={styles.main}>
            <button className={styles.changeButton} type='button' onClick={this.handleClick}>Change</button>
            <div className={styles.box} name='changeBox'>Border Box</div>
            <div className={styles.widthLineContainer}>
              <span className={styles.paddingLineLeft} name='paddingLineLeft'>Padding</span>
              <span className={styles.widthLine}>The box&#39;s width</span>
              <span className={styles.paddingLineRight} name='paddingLineRight'>Padding</span>
            </div>
            <p className={styles.description}>Box-sizing tells us whether the padding is included in width. Notice how the width stays the same but the padding is either inside or outside the box.</p>
          </main>
        </>
    );
  }
}