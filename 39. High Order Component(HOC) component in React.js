// High Order Component(HOC) component in React js ->>
// - Higher order component is component which takes other component as input using props and returns component
// - A component which take component as input and return the component is called as Higher Order Component(HOC).
/*
Syntax :  HOC taking input as component using props and returning the component 
        function HOC (props) {
          return(
            <h2><props.cmp /></h2>
          )
        }
*/
/* This is main parent component */

import logo from './logo.svg';
import './App.css';
import { Table } from 'react-bootstrap'
import React, { useState } from 'react';

function App() {
  return (
    <div className='App'>
      <h1>HOC</h1>
      <HOCRed cmp={Counter} />  {/*paasing component as props */}
      <HOCGreen cmp={Counter} />
      <HOCBlue cmp={Counter} />
    </div>
  )
}

// HOC component for red counter
function HOCRed(props) {
  return (
    <h2 style={{ backgroundColor: "red", width: 100 }}>Red<props.cmp /></h2>
  )
}

// HOC component for green counter
function HOCGreen(props) {
  return (
    <h2 style={{ backgroundColor: "green", width: 100 }}>Green<props.cmp /></h2>
  )
}

// HOC component for blue counter
function HOCBlue(props) {
  return (
    <h2 style={{ backgroundColor: "blue", width: 100 }}> Blue<props.cmp /></h2>
  )
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>{count}</h3>
      <button style={{ fontSize: 20 }} onClick={() => setCount(count + 1)}>Update</button>
    </div>
  )
}

export default App;
