/* 
Q.  There is a three count state count A, count B and count C 
   with initial state 0, and a button (Click Me). so every 5th value of
   count A, count B should be increase by one and every 10th value of 
   count A, count C should be increase by one
*/
import logo from './logo.svg';

import './App.css';
import { Table } from 'react-bootstrap'
import { Component, useRef, useState, useEffect } from 'react';

import CounterWithSomeCondition from './Components/CounterWithSomeCondition/CounterWithSomeCondition';

/* This is parent Component */

function App() {
  return (
    <div className='App'>
      <CounterWithSomeCondition />
    </div>
  )
}

export default App;

/*---------------------------*/
/* This is child component */

import { useState } from "react";

function CounterWithSomeCondition(){
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);
    const [countC, setCountC] = useState(0);

    function setCounters(){
        setCountA(countA + 1);
        if(countA % 5 === 0 && countA !== 0){
            setCountB(countB + 1);
        }
        if(countA % 10 === 0 && countA !== 0){
            setCountC(countC + 1);
        }

    }
    return(
        <>
            <h3>Count A : {countA}</h3>
            <h3>Count B : {countB}</h3>
            <h3>Count C : {countC}</h3>
            <button onClick={setCounters}>Click Me</button> 
        </>
    )
}

export default CounterWithSomeCondition;
