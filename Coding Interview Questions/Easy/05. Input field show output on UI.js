/* Q. Basic Implementation of React - Input Field value should be shown in Output
*/
import logo from './logo.svg';

import './App.css';
import { Table } from 'react-bootstrap'
import { useRef, useState, useEffect } from 'react';

import InputFieldWithShowingOutput from './Components/InputFieldWithShowingOutput/InputFieldWithShowingOutput';
/* This is parent Component */

function App() {
  return (
    <div className='App'>
      <InputFieldWithShowingOutput />
    </div>
  )
}

export default App;

/*---------------------------*/
/* This is child component */

import { useState } from "react";

function InputFieldWithShowingOutput() {
    const [show, setShow] = useState(false);
    const [inputVal, setInputVal] = useState("");
    return (
        <div style={{marginTop:10}}>
            <input type="text" onChange={(e)=>setInputVal(e.target.value)}/>
            
            <h1>{inputVal}</h1>
        </div>
    )
}

export default InputFieldWithShowingOutput;
