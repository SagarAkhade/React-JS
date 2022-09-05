// forwardRef in React js ->>
// - forwardRef is advance version of Ref
// - forwardRef is used to manipulate DOM of child components
// - First creat useRef in parent component and 
// - In child component pass that created ref using below this
//    Syntax :  <User ref={inputRef} />
// - In the child component import forwardRef as below
//      Syntax : import React, { forwardRef } from 'react';
// - forwardRef is basically wraper for the child component and while exporting that child component use like this below
//    Synatax : export default forwardRef(User);
// - And useRef coming from the parent component is used in child component in the second parameter of function as below this
// Syntax : function User(props, inputRef) {}
// - And use this second parameter as normal value in child components ref like this below
//    Syntax : <input type="text" ref={inputRef} />
// - Ref should be used as less as possible because it slows the performance of react app
/* This is main parent component */

import logo from './logo.svg';
import './App.css';
import { Table, Button } from 'react-bootstrap'
import User from './User';
import React, { useRef } from 'react';

function App() {
  let inputRef = useRef(null);  //initiliazing ref
  function updateInput() {
    inputRef.current.value = "1000";  // adding value
    inputRef.current.style.color = "red"; // color is changing
    inputRef.current.style.backgroundColor = "skyblue"; // background color is changing
    inputRef.current.focus();  // focus goes to input field
  }
  return (
    <div className='App'>
      <h1>forwardRef in React </h1>
      <User ref={inputRef} />   {/*passing ref to child component */}
      <button onClick={updateInput}>Update InputBox</button>
    </div>
  )
}

export default App;

/*---------------------------------*/

// Continued forwardRef in React ->>

/*This is child component */

import React, { forwardRef } from 'react';

function User(props, inputRef) {
    return (
        <div className='App'>
            <input type="text" ref={inputRef} />
        </div>
    )
}

export default forwardRef(User);
