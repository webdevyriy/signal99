import React from 'react';
import logo from './footer-logo.svg';
import styles from './Footer.module.css';

const Footer: React.FC = () => (
    <footer className={styles.appFooter}>
        <img className={styles.appFooterLogo} src={logo} alt="logo"/>
    </footer>
);

export default Footer;
