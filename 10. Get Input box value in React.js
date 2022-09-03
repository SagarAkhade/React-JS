// Get Input box value in React ->>
// - For getting input box value we can add onChange or onClick event on input field
// - onChange event : whenever we press any key from keyboard this event gets triggered
//- onClick event : whenever we press button this event gets triggered

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(null);  //initializing state
  const [print, setPrint] = useState(false);  //initializing another state for printing 

  function getData(val) {
    console.log(val.target.value);   //Here we are getting value from input field
    setData(val.target.value);
  }

  return (
    <div className="App">

      <h1>{data}</h1>   {/* This is for onChange event */}

      <input type="text" onChange={getData} />

      <button onClick={() => setPrint(true)}>Print Data</button>

      {
        print ? <h1>{data}</h1> : null
      }    {/* for onClick event   */}
    </div>
  );
}

export default App;
