import React, { PureComponent } from 'react';
import styles from './ButtonShowcase.module.scss';

export default class ButtonShowcase extends PureComponent {
  handleChangeBorderRadius = event => {
    const myButton = document.getElementsByName('myButton')[0];
    const value = event.target.value;
    myButton.style.borderRadius = value;
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
              <input className={styles.backgroundColor} type='range' name='font-size' onChange={this.handleChange}/>
            </div>
            <div className={styles.colorContainer}>
              <h3 className={styles.h3}>Background Color</h3>
              <input className={styles.backgroundColor} type='color' onChange={this.handleChange}/>
            </div>
            <div className={styles.colorContainer}>
              <h3 className={styles.h3}>Font Color</h3>
              <input className={styles.backgroundColor} type='color' onChange={this.handleChange}/>
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
