import React from 'react';
import Header from '../Header';
import DataFormContainer from '../DataFormContainer';
import Footer from "../Footer/Footer";
import styles from './App.module.css';

const App = () => (
    <div className={styles.App}>
        <Header/>
        <DataFormContainer/>
        <Footer/>
    </div>
);

export default App;
