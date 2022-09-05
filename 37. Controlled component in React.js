// Controlled component in React js ->>
// - Controlled or uncontrolled components have any input field or complete form with many input fields
// - In react when we handle input fields with states is called as Controlled Component 
// - Uncontrolled components are those which are directly controlled by DOM
// - In controlled components the value in input field are controlled by states
// - In input field of controlled components the input field has onChange event  for updating state
// - Controlled components are created by using below
//    Syntax : <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
// - In input field we can set default value to input field using below 
//    Syntax : <input type="text" defaultValue="000" onChange={(e) => setVal(e.target.value)} />
// - Controlled components are used with both functional and class component
/* This is main parent component */

import logo from './logo.svg';
import './App.css';
import { Table, Button } from 'react-bootstrap'
import React, { useState } from 'react';

function App() {
  let [val, setVal] = useState("000"); // initializing state with default value 000

  return (
    <div className='App'>
      <h1>Controlled Component </h1>
      {/* <input type="text" defaultValue="000" onChange={(e) => setVal(e.target.value)} /> */}
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />

      <h3>Value: {val}</h3>
    </div>
  )
}

export default App;
