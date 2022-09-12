/* Q. Implement a page that contains an input field and a button, 
      the user will input the color name and after  hitting the button, 
      the page background color should be changed
*/
import logo from './logo.svg';

import './App.css';
import { Table } from 'react-bootstrap'
import { useRef, useState, useEffect } from 'react';

import InputFieldColorToBody from './Components/InputFieldColorToBody/InputFieldColorToBody';

/* This is parent Component */

function App() {
  return (
    <div className='App'>
      <InputFieldColorToBody />
    </div>
  )
}

export default App;

/*-----------------------*/
/* Child Component */

import { useState } from "react";

function InputFieldColorToBody() {
    const [color, setColor] = useState("white");

    function changeBackgroundColor() {
        document.body.style.backgroundColor = color;
    }

    return (
        <>
            <input type="text" onChange={(e) => setColor(e.target.value)} />
            <button onClick={changeBackgroundColor}>Submit Color</button>
        </>
    )
}

export default InputFieldColorToBody;
