import React, { PureComponent } from 'react';
import styles from './ButtonShowcase.module.scss';

export default class ButtonShowcase extends PureComponent {
  handleChangeBorderRadius = event => {
    const myButton = document.getElementsByName('myButton')[0];
    const value = event.target.value;
    myButton.style.borderRadius = value;
  }
  handleChangeFontColor = event => {
    const myButton = document.getElementsByName('myButton')[0];
    const value = event.target.value;
    myButton.style.color = value;
  }
  handleChangeBackgroundColor = event => {
    const myButton = document.getElementsByName('myButton')[0];
    const value = event.target.value;
    myButton.style.backgroundColor = value;
  }
  handleChangeFontSize = event => {
    const myButton = document.getElementsByName('myButton')[0];
    const value = event.target.value;
    const newFontSize = parseInt(value) + '%';
    myButton.style.fontSize = newFontSize;
  }
  render() {
    return (
      <>
        <header>
          <h2 className={styles.title}>Button Builder</h2>
        </header>
        <main className={styles.main}>
          <div className={styles.controlsContainer}>
            <div className={styles.shapeContainer}>
              <h3 className={styles.h3}>Shape</h3>
              <select className={styles.select} onChange={this.handleChangeBorderRadius} name='border-radius'>
                <option name='square' value='0'>Square</option>
                <option name='rounded' value='2em'>Rounded</option>
              </select>
            </div>
            <div className={styles.colorContainer}>
              <h3 className={styles.h3}>Font Size</h3>
              <input className={styles.backgroundColor} type='range' name='font-size' min='10' max='250' value='120' onChange={this.handleChangeFontSize}/>
            </div>
            <div className={styles.colorContainer}>
              <h3 className={styles.h3}>Font Color</h3>
              <input className={styles.backgroundColor} type='color' onChange={this.handleChangeFontColor}/>
            </div>
            <div className={styles.colorContainer}>
              <h3 className={styles.h3}>Background Color</h3>
              <input className={styles.backgroundColor} type='color' onChange={this.handleChangeBackgroundColor} defaultValue='#f8f8f8'/>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.myButton} name='myButton'>Copy Styles</button>
          </div>
        </main>
      </>
    )
  }
}
