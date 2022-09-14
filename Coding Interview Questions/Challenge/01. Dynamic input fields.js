/* 
Q. create a new React component 
   with 2 input fields, input1 and input2. Users can type any number in 
   either of these input fields. You need to ensure that (input2 minus
   input1) is equal to 1 always. Means if user type value 5 in input1 
   then input2 value should change to 6 (to make input2 - input1 = 1).
   And similarly, if input2 value is 100 then input1 value should 
   change to 99. You need to just play around with input values 
   Note: In the UI only 2 input fields should be present. No button needed
 (Challenge)
*/
import logo from './logo.svg';

import './App.css';
import { Table } from 'react-bootstrap'
import { Component, useRef, useState, useEffect } from 'react';

import InputFieldGame from './Components/InputFieldGame/InputFieldGame';
/* This is parent Component */

function App() {

  return (
    <div className='App'>
      <InputFieldGame />
    </div>
  )
}

export default App;

/*---------------------------*/
/* This is child component */

import { useRef } from "react";

function InputFieldGame() {
    var input1 = useRef();
    var input2 = useRef();

    function inputVal1() {
        input2.current.value = +input1.current.value + 1;
    }

    function inputVal2() {
        input1.current.value = +input2.current.value - 1;
    }

    return (
        <>
            <input type="number" onChange={inputVal1} ref={input1} /> < br /><br />
            <input type="number" onChange={inputVal2} ref={input2} /> < br /><br />
        </>
    )
}

export default InputFieldGame;
