// Previous State in Functional Component of React js ->>
// - previous state is basically the state before the current updated state
// - When we update state that updating state variable itself takes the callback function
// and the parameter of that callback function is itself is its previous value
/* Syntax : updating state 
        setCount((prev)=>{
          console.log(prev)
          return count + 1; 
        });
*/
/* This is main parent component */

import logo from './logo.svg';
import './App.css';
import { Table } from 'react-bootstrap'
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(1);

  function updateCounter() {
    let rand = Math.floor(Math.random() * 10) //Generating random values 1-10
    setCount((prev) => {
      console.log(prev)
      if (prev < 5) {
        alert("low value");
      }
      return rand;
    });
  }
  return (
    <div className='App'>
      <h1>{count}</h1>
      <button onClick={updateCounter}>Click Me to update counter</button>
    </div>
  )
}

export default App;
