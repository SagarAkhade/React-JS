// Q. Create a counter application

import logo from './logo.svg';
import './App.css';
import { Table } from 'react-bootstrap'
import { useRef, useState, useEffect } from 'react';

import CounterApp from './Components/CounterApp/CounterApp';

/* This is parent Component */

function App() {
  return (
    <div className='App'>
      <CounterApp />
    </div>
  )
}

export default App;

/*----------------------------*/
/* This is child Component */

import { useState } from "react";

function CounterApp() {
    const [count, setCount] = useState(0);

    function decrementCounter() {
        if (count === 0) {
            return;
        }
        setCount(count - 1);
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={decrementCounter}>Decrement</button>
        </>

    )
}

export default CounterApp;
