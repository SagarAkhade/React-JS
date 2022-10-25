/* 
Q. Digital Clock
*/
import logo from './logo.svg';

import './App.css';
import { Table } from 'react-bootstrap'
import { Component, useRef, useState, useEffect } from 'react';

import DigitalClock from './Components/DigitalClock/DigitalClockFunction';

/* This is parent Component */

function App() {
  return (
    <div className='App'>
      <DigitalClock />
    </div>
  )
}

export default App;

/*---------------------------*/
/* This is child component */

import React from 'react'
import { useState } from 'react';

const DigitalClockUsingFunction = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    setInterval(()=>setTime(new Date().toLocaleTimeString()), 1000);

    return (
        <>
            <h1>Digital Clock</h1>
            <h1>{time}</h1>
        </>
    )
}

export default DigitalClockUsingFunction;
