import React from 'react';
import styles from './App.module.css';
import robots from './mockdata/robots.json';
import Robot from './components/Robot';

// const html = "<img onerror='alert(\"Hacked\")' src='invalid-image' />";
// const jsHacked = "javascript: alert('Hacked!');";

function App() {
  return (
    <div className='app'>
      {/* <div>{html}</div>
      <a href={jsHacked}>my site</a> */}
      <div className={styles.robotList}>
        {robots.map((r) => (
          <Robot id={r.id} email={r.email} name={r.name} />
        ))}
      </div>
    </div>
  );
}

export default App;
