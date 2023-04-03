import React from 'react';
import logo from './logo.svg';
import styles from './Header.module.css';

const Header: React.FC = () => (
  <header className={styles.appHeader}>
      <img src={logo} alt=""/>
  </header>
);

export default Header;
