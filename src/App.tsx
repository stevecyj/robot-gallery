import React from 'react';
import logo from './assets/images/logo.svg';
import styles from './App.module.css';
import robots from './mockdata/robots.json';
import Robot from './components/Robot';

// const html = "<img onerror='alert(\"Hacked\")' src='invalid-image' />";
// const jsHacked = "javascript: alert('Hacked!');";

function App() {
  return (
    <div className={styles.app}>
      {/* <div>{html}</div>
      <a href={jsHacked}>my site</a> */}
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt='logo' />
        <h1>羅伯特機器人炫酷吊炸天 online 購物平台的名字要長</h1>
      </div>
      <div className={styles.robotList}>
        {robots.map((r) => (
          <Robot id={r.id} email={r.email} name={r.name} />
        ))}
      </div>
    </div>
  );
}

export default App;
