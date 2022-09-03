// Hide and show Element in React ->>
// - We can hide and show element using the two methods 1. using two buttons 2. Using toggle 

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [status, setStatus] = useState(true);  //Initializing state for two buttons
  const [status1, setStatus1] = useState(true);  //Initializing state for toggle buttons

  return (
    <div className="App">
      {/* Changing Element using two buttons */}
      {status ? <h1>Hello World !!!</h1> : null}

      <button onClick={() => setStatus(false)}>Hide</button>
      <button onClick={() => setStatus(true)}>Show</button>
      <br />

      {/* Changing Element using Single button toggle */}
      <button onClick={() => setStatus1(!status1)}>Toggle</button>
      {status1 ? <h1>Hello India !!!</h1> : null}

    </div>
  );
}

export default App;
