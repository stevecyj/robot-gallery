import React from 'react';
import './App.css';
import robots from './mockdata/robots.json';
import Robot from './components/Robot';

// const html = "<img onerror='alert(\"Hacked\")' src='invalid-image' />";
// const jsHacked = "javascript: alert('Hacked!');";

function App() {
  return (
    <>
      {/* <div>{html}</div>
      <a href={jsHacked}>my site</a> */}
      <ul>
        {robots.map((r) => (
          <Robot id={r.id} email={r.email} name={r.name} />
        ))}
      </ul>
    </>
  );
}

export default App;
