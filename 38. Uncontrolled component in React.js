// Uncontrolled component in React js ->>
// - Uncontrolled components has input fields and these are not controlled by states
// - Input fields in uncontrolled component are handle either by JavaScript(DOM) or with Refs 
// - We are using ref to get values from input field 
// - For using ref we need to import like this 
//    Syntax : import React, { useRef } from 'react';
// - And getting these values from input field like this 
//    Syntax:  <input ref={inputRef} type="text" /> <br />
// - When we have some field are handled by state and some fields are handled by refs/DOM then it is Uncontrolled Component

/* This is main parent component */

import logo from './logo.svg';
import './App.css';
import { Table, Button } from 'react-bootstrap'
import React, { useRef } from 'react';

function App() {
  let inputRef = useRef(null);  //initializing Ref
  let inputRef2 = useRef(null);

  function submitForm(e) {
    e.preventDefault();   // to prevent reloading of page on clicking submit
    console.log(`Input field 1 value : ${inputRef.current.value}`)
    console.log(`Input field 2 value : ${inputRef2.current.value}`)

    let input3 = document.getElementById('input3').value
    console.log(`Input field 3 value : ${input3}`)
  }

  return (
    <div className='App'>
      <h1>Uncontrolled Component </h1>

      <form onSubmit={submitForm}>
        {/* Controlling input field using the ref */}
        <input ref={inputRef} type="text" /> <br />
        <input ref={inputRef2} type="text" /> <br />

        {/* Controlling input field directly using DOM */}
        <input id='input3' type="text" /> <br />

        <button>Submit</button>
      </form>
    </div>
  )
}

export default App;
