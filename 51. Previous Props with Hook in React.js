// Previous Props with Hook in React js ->>
// - Previous props are basically the previous values of props just before the current value of props
// - For getting previous props value in child component we import useEffect and useRef like this
//   Syntax : import {useEffect, useRef} from 'react';
// - For getting previous props value we do like this 
/*Syntax : prevProps-> stores the previous value of prop
        const lastProp = useRef();
        useEffect(()=>{
            lastProp.current = props.count;
        })
        const prevProps = lastProp.current;
*/
/* This is main parent component */

import logo from './logo.svg';
import './App.css';
import { Table } from 'react-bootstrap'
import { useState } from 'react';
import User from './User';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <User count={count} />
      <button onClick={() => setCount(Math.floor(Math.random() * 10))}>Update Counter</button>
    </div>
  )
}

export default App;

/*-------------------------------*/

// Continued Previous Props with Hook ->>

/*This is child component */

import { useEffect, useRef } from 'react';

function User(props) {
    const lastProp = useRef();
    useEffect(() => {
        lastProp.current = props.count;
    })
    const prevProps = lastProp.current;
    return (
        <div className='App'>
            <h1>Current value :  {props.count}</h1>
            <h1>Previous value :  {prevProps}</h1>
        </div>
    )
}

export default User;
