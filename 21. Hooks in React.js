// Hooks in React->>
// - With Hooks, we can use class component features in functional component such as state, life cycle, pure component, etc
// - useState is one of Hook, for using useState we need to import it using below
//    Syntax : import React, { useState } from 'react';
// - useState hook is used to store the state 
//    Syntax :  const [data, setData] = useState(anyDefaultValue);
// - updating state : setData(updatedValue)
// - Anythings that start with use it means it is an hook
// - use keyword is reserved for creating hooks
// - All life cycle method are come in useEffect hook

/* This is main parent component */

import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [data, setData] = useState("Sagar");

  return (
    <div className="App">
      <h1>{data} </h1>
      <button onClick={() => setData("akhade")}>Update data</button>  {/* Updating state */}
    </div>
  )
}

export default App;
