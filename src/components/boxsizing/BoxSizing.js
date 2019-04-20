import React, { PureComponent } from 'react';
import styles from './BoxSizing.module.scss';

export default class BoxSizing extends PureComponent {
  state = {
    show: false
  }
  handleClick = event => {
    const changeBox = document.getElementsByName('changeBox')[0];
    if(changeBox.style.boxSizing === 'border-box') {
      changeBox.style.boxSizing = 'content-box';
      changeBox.innerHTML = 'Content Box'
      this.setState({ show: true });
    }
    else {
      changeBox.style.boxSizing = 'border-box';
      changeBox.innerHTML = 'Border Box';
      this.setState({ show: false });
    }
  }
  componentDidMount() {
    const changeBox = document.getElementsByName('changeBox')[0];
    changeBox.style.boxSizing = 'border-box';
  }
  render() {
    const { show } = this.state;
    return (
        <>  
          <header className={styles.header}>
            <h2 className={styles.title}> Content-Box vs. Border-Box</h2>
          </header>
          <main className={styles.main}>
            <button className={styles.changeButton} type='button' onClick={this.handleClick}>Change</button>
            <div className={styles.box} name='changeBox'>Border Box</div>
            <div className={styles.widthLineContainer}>
              { show && <span className={styles.paddingLine}>Padding</span> }
              <span className={styles.widthLine}>The box&#39;s width</span>
              { show && <span className={styles.paddingLine}>Padding</span> }
            </div>
            <p className={styles.description}>Box-sizing tells us whether the padding is included in width. Notice how the width stays the same but the padding is either inside or outside the box.</p>
          </main>
        </>
    );
  }
}