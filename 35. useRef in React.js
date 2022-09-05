// useRef in React js ->>
// - useRef is Hook which used to manpulate the DOM
// - Whenever it is not possible to manipulate DOM using state or props and we need to directly manipulate DOM then useRef used
// -  useRef is Hook used in functional component
// - Whichever start with use in React then it is Hook
// - To use useRef first import it from react like below
//   Syntax :    import React, { useRef } from 'react';
// - To use useRef do like this
//  Syntax :   let inputRef = useRef(anyDefaultValue);
// - And to use this useRef just do like this in HTML tag
//    Syntax :   <input type="text" ref={inputRef} />
// - We can manipulate DOM directly using useRef as below
/* Synatx:
    inputRef.current.value = "1000";  
    inputRef.current.focus();   
    inputRef.current.style.color = "red"  
    inputRef.current.style.backgroundColor = "yellow"  
    //inputRef.current.style.display = "none" 
*/

/* This is main parent component */

import logo from './logo.svg';
import './App.css';
import { Table, Button } from 'react-bootstrap'
import React, { useRef } from 'react';

function App() {
  let inputRef = useRef(null);  //initializing useRef

  function handleInput() {
    inputRef.current.value = "1000";   //adding value directly
    inputRef.current.focus();   // it move the cursor in input field
    inputRef.current.style.color = "red"  // color of input field changed
    inputRef.current.style.backgroundColor = "yellow"  // background color of input field changed
    //inputRef.current.style.display = "none" // display of input becomes none
  }
  return (
    <div className='App'>
      <h1>Ref in React </h1>
      <input type="text" ref={inputRef} />  {/* Adding ref in HTML */}
      <button onClick={handleInput}>Handle Input</button>
    </div>
  )
}

export default App;
