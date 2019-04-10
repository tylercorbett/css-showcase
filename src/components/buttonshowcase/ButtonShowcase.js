import React, { PureComponent } from 'react';
import styles from './ButtonShowcase.module.scss';

export default class ButtonShowcase extends PureComponent {
  render() {
    return (
      <>
        <header>
          <h2 className={styles.title}>Button Builder</h2>
        </header>
        <main>
          <div className={styles.controlsContainer}>
            <div className={styles.shapeContainer}>
              <h3 className={styles.h3}>Shape</h3>
              <select className={styles.select}>
                <option name='square' value='square'>Square</option>
                <option name='round' value='round'>Round</option>
                <option name='circle' value='circle'>Circle</option>
              </select>
            </div>
            <div className={styles.colorContainer}>
              <h3 className={styles.h3}>Color</h3>
              <input className={styles.color} type='color'/>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.myButton}>Copy Styles</button>
          </div>
        </main>
      </>
    )
  }
}
