import React from 'react';
import styles from './Footer.module.scss';

export default function Footer() {
  return(
    <footer className={styles.footer}>
        Created by <a className={styles.link} href='https://twitter.com/thetylercorbett'>Tyler Corbett</a>
    </footer>
  )
}
