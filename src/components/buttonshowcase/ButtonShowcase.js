import React, { PureComponent } from 'react';
import styles from './ButtonShowcase.module.scss';

export default class ButtonShowcase extends PureComponent {
  render() {
    return (
      <>
        <header>
          <h2 className={styles.title}>Button Builder</h2>
        </header>
        <div className={styles.controlsContainer}>
          <select className={styles.select}>
            <option name='round' value='round'>Round</option>
            <option name='square' value='square'>Square</option>
            <option name='circle' value='circle'>Circle</option>
          </select>
          <input className={styles.color} type='color'/>
        </div>
      </>
    )
  }
}
