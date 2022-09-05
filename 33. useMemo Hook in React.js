// useMemo Hook in React js ->>
// - useMemo hook improves the performance of react app
// - useMemo hook is similar as Pure component in class component, but they are for functional component
// - useMemo is used because when we update any data with same values again and again 
// it will uneccessarily update all component, and to stop 
// this uneccessary re-rendering of component we use useMemo Hook
// - To use the useMemo import like this from react
//      Syntax : import React,{ useMemo } from 'react';
// - useMemo take two parameters-> useMemo((callback fuction), [dataOnWhichToUpdate])
/* Syntax: 
      const multiCountMemo = useMemo(() => {
        console.log("multiCount")
        return count * 5;
      }, [count])
*/
// - using useMemo we can avoid unwanted re-rendering of component 

/* This is main parent component */

import logo from './logo.svg';
import './App.css';
import { Table, Button } from 'react-bootstrap'
import User from './User';
import React, { useState, useMemo } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);

  const multiCountMemo = useMemo(() => {
    console.log("multiCount")
    return count * 5;
  }, [count])

  return (
    <div className='App'>
      <h1>useMemo Hook in React </h1>

      <h2>Count : {count}</h2>
      <h2>Item : {item}</h2>
      <h2>{multiCountMemo}</h2>

      <Button onClick={() => setCount(count + 1)}>Update count</Button>
      <Button onClick={() => setItem(item * 10)}>Update Item</Button>
    </div>
  )
}

export default App;
