import React, { PureComponent } from 'react';
import styles from './FlexBox.module.scss';

export default class FlexBox extends PureComponent {
  handleChange = event => {
    const value = event.target.value;
    const boxContainer = document.getElementsByName('boxContainer')[0];
    boxContainer.style.flexDirection = (value);
  }
  render() {
    return(
      <>
        <header>
          <h2 className={styles.title}>Flex Box</h2>
        </header>
        <main className={styles.main}>
            <div className={styles.flexDirection}>
                <label className={styles.directionLabel}>Flex Direction</label>
                <select className={styles.select} onChange={this.handleChange}>
                    <option value='row'>Row</option>
                    <option value='row-reverse'>Row-Reverse</option>
                    <option value='column'>Column</option>
                    <option value='column-reverse'>Column-Reverse</option>
                </select>
            </div>
            <div className={styles.boxContainer} name='boxContainer'>
                <div className={styles.one}>1</div>
                <div className={styles.two}>2</div>
                <div className={styles.three}>3</div>
                <div className={styles.four}>4</div>
            </div>
            <p className={styles.description}>
                Flex box is everyting you need to position elements how you&#39;d like. Play with some of the above controls to move these four boxes around.
            </p>
        </main>
      </>
    )
  }
}
