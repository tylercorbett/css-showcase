import React, { PureComponent } from 'react';
import styles from './BoxSizing.css';

export default class BoxSizing extends PureComponent {
    render() {
        return (
            <>  
                <header>
                  <h2 className={styles.h2}>Content-Box (Default) vs. Border-Box</h2>
                </header>
                <main className={styles.h2}>
                  <button type='button'>Change</button>
                  <div className='box'>

                  </div>
                </main>
            </>
        );
    }
}