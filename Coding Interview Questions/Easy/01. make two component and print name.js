// Q. make two component and print name

import logo from './logo.svg';
import './App.css';
import { Table } from 'react-bootstrap'
import { useRef, useState, useEffect } from 'react';

/* This is parent Component */

import FirstName from './Components/PrintingNameUsingTwoComponents/FirstName';
import LastName from './Components/PrintingNameUsingTwoComponents/LastName';
function App() {
  return (
    <div className='App'>
      <FirstName />
      <LastName />
    </div>
  )
}

export default App;

/*------------------------------*/
/* This is child Component */

function FirstName(){
    return(
        <h1>John</h1>
    )
}

export default FirstName;

/*----------------------------------*/
/* This is child Component */

function LastName(){
    return(
        <h1>Smith</h1>
    )
}

export default LastName;
