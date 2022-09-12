/* Q. Create a counter app with increment decrement and capture button, 
    when the user clicks on increment count value increases by 1 
    when you click on decrement count decreases by 1, and when you click on 
    capture the current count would be added to the list and we have to 
    maintain a list of captured value 
*/
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

/*----------------------------------*/
/* This is child Component */

import { useState } from "react";

const capturedList = [];

function CounterApp() {
    const [showList, setShowList] = useState(false)
    const [count, setCount] = useState(0);

    function decrementCounter() {
        if (count === 0) {
            return;
        }
        setCount(count - 1);
    }

    const captureValues = () => {
        capturedList.push(count);
    }

    console.log(capturedList);
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={decrementCounter}>Decrement</button>
            <button onClick={captureValues} >Capture Value</button>
        </>
    )
}

export default CounterApp;
