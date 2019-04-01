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
          <h2 className={styles.title}>Flex Box</h2>
        </header>
        <main className={styles.main}>
            <select className={styles.select}>
                <option value='row'>Row</option>
                <option value='rowReverse'>Row-Reverse</option>
                <option value='column'>Column</option>
                <option value='columnReverse'>Column-Reverse</option>
            </select>
            <div className={styles.boxContainer}>
                <div className={styles.one}>1</div>
                <div className={styles.two}>2</div>
                <div className={styles.three}>3</div>
                <div className={styles.four}>4</div>
            </div>
        </main>
      </>
    )
  }
}
