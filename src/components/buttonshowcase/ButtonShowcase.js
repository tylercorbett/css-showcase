import React, { PureComponent } from 'react';
import styles from './ButtonShowcase.module.scss';

export default class ButtonShowcase extends PureComponent {
  render() {
    return (
      <>
        <h2 className={styles.h2}>Fancy Buttons</h2>
        <div className={styles.button1Container}>
          <button className={styles.button1}>Press Me</button>
        </div>
      </>
    )
  }
}
