//  useEffect with state and prop in React->>
// - Whenever we want to update useEffect on particular state or props we have to pass second parameter to useEffect
// - That second parameter can be state or props
// - useEffect will be updated only on that state/props which we have pass as second parameter
/*
Syntax : 
        useEffect(()=>{
          console.log("useEffect called with data state")
        },[anyState, anyProps, basicallyMultipleStateOrProps])
*/

/* This is main parent component */

import logo from './logo.svg';
import './App.css';
import User from './User';
import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(10);
  const [count, setCount] = useState(100);

  useEffect(() => {   // This useEffect only invoked when data is updated
    console.log("useEffect called with data state" + data)
  }, [data])

  useEffect(() => {   // This useEffect only invoked when count is updated
    console.log("useEffect called with count state " + count);
  }, [count])

  return (
    <div className="App">
      {/* This is for useEffect with updating state */}
      <h1>Count : {count}</h1>
      <h1>Data : {data}</h1>

      <button onClick={() => setCount(count + 1)}>Update count </button>
      <button onClick={() => setData(data + 1)}>Update Data </button>

      {/* This is for useEffect with updating props */}
      <User count={count} data={data} /> {/*passing props to user component */}
    </div>
  )
}

export default App;
