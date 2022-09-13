/* 
Q. Create a button, Display Date and Time on click of that button.

*/
import logo from './logo.svg';

import './App.css';
import { Table } from 'react-bootstrap'
import { useRef, useState, useEffect } from 'react';

import DisplayDateAndTime from './Components/DisplayDateAndTime/DisplayDateAndTime';

/* This is parent Component */

function App() {

  return (
    <div className='App'>
      <DisplayDateAndTime />
    </div>
  )
}

export default App;

/*---------------------------*/
/* This is child component */

import { useState } from "react";

function DisplayDateAndTime() {
    const [redering, setRedering] = useState(false);

    function display() {
        setRedering(!redering);
    }

    return (
        <>
            <h1>Display Date and Time</h1>
            <button onClick={display}>Display Date and Time</button>

            <DisplayDate />
        </>
    )
}

function DisplayDate() {
    const dateAndTime = new Date();
    return (
        <>
            <h1>{`${dateAndTime.getDate()}, ${dateAndTime.getMonth() + 1}, ${dateAndTime.getFullYear()}, ${dateAndTime.getHours()}hr : ${dateAndTime.getMinutes()}min : ${dateAndTime.getSeconds()}sec`}
            </h1>
        </>
    )
}

export default DisplayDateAndTime;
