import React, { PureComponent } from 'react';
import styles from './FlexBox.module.scss';

export default class FlexBox extends PureComponent {
  state = {
    flexDirection: 'row'
  }
  render() {
    return(
      <>
        <header>
          <h2 className={styles.title}>Flex Box Demo</h2>
        </header>
        <main className={styles.main}>
            <select className={styles.select}>
                <option value='row'>Row</option>
                <option value='rowReverse'>Row-Reverse</option>
                <option value='column'>Column</option>
                <option value='columnReverse'>Column-Reverse</option>
            </select>
        </main>
      </>
    )
  }
}
