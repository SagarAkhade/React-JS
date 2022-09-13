/* 
Q.  How to perform unmounting in functional component.
*/
import logo from './logo.svg';

import './App.css';
import { Table } from 'react-bootstrap'
import { Component, useRef, useState, useEffect } from 'react';

import UnmountingApp from './Components/UnmountingApp/UnmountingApp';

/* This is parent Component */

function App() {
  return (
    <div className='App'>
      <UnmountingApp />
    </div>
  )
}

export default App;

/*---------------------------*/
/* This is child component */

import { useState } from "react";

function UnmountingApp() {
    const [toggle, setToggle] = useState(false);

    function toggling() {
        setToggle(!toggle);
    }

    return (
        <>
            <button onClick={toggling}>Toggle</button>

            {
                toggle ? <UnmountingCoponent /> : null
            }
        </>
    )
}

function UnmountingCoponent() {
    return (
        <h1>This is Unmounting Component</h1>
    )
}

export default UnmountingApp;
