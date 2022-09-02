// State in functional component in React ->>
// - State is object in which we can store data
// - State is used over variable, because variables are not get updated but state gets updated
// - State are basically used for updating data in React
// - When we update the state whole component gets Re-rendered
// - For using state we need to import useState like below
//      Sytax : import {useState} from 'react'
// - useState is hook which is used to update the state 
// - Now we want to use this state using following Syntax
//      Syntax : const [data, setData] = useState('anyDefaultName')
// - This anyDefaultName referring for data here 

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(0);  // Declaration of state
  function updateData() {
    setData(data + 1)       // -> We are updating the state for data 
  }

  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={updateData}>Update Data</button>
    </div>
  );
}

export default App;
