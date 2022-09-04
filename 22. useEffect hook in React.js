// useEffect hook in React->>
// - useEffect hook is for the all life cycle methods
// - useEffect hook is invoked whenever there is update in state or props
// - For using useEffect we need to import it 
//      Syntax : import React, { useEffect } from 'react';
// - useEffect take the callback function
/*
Synatx: useEffect
        useEffect(() => {    //This is work as componentDidMount
          console.log("useEffect");
        })
*/
// - We can have multiple useEffect for different-different conditions
// Interview Q : we cannot use Hooks in Class component

/* This is main parent component */

import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {    //This is working as componentDidMount
    console.log("useEffect");
  })
 
  return (
    <div className="App">
      <h1>useEffect in React {count}</h1>
      <button onClick={() => setCount(count + 1)}>Update component </button>
    </div>
  )
}

export default App;
