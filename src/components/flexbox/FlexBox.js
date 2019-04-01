import React, { PureComponent } from 'react';
import styles from './FlexBox.module.scss';

export default class FlexBox extends PureComponent {
  state = {
    flexDirection: 'row'
  }
  handleChange = event => {
    console.log(event.target.value);
    const value = event.target.value;
    const boxContainer = document.getElementsByName('boxContainer')[0];
    console.log(boxContainer);
    boxContainer.style.flexDirection = (value);
  }
  render() {
    return(
      <>
        <header>
          <h2 className={styles.title}>Flex Box</h2>
        </header>
        <main className={styles.main}>
            <select className={styles.select} onChange={this.handleChange}>
                <option value='row'>Row</option>
                <option value='row-reverse'>Row-Reverse</option>
                <option value='column'>Column</option>
                <option value='column-reverse'>Column-Reverse</option>
            </select>
            <div className={styles.boxContainer} name='boxContainer'>
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
