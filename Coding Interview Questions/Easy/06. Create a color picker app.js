/* 
Q. Create a colour picker app.
- For using color picker we import the color picker library in React using below command
- Syntax : npm install react-color-palette
- And we need to paste this below in index.js 
- Syntax : import "react-color-palette/lib/css/styles.css";
- And import these hooks from react-color-palette as below
- Syntax : import { ColorPicker, useColor } from "react-color-palette";
*/
import logo from './logo.svg';

import './App.css';
import { Table } from 'react-bootstrap'
import { useRef, useState, useEffect } from 'react';
import ColorPickerApp from './Components/ColorPickerApp/ColorPickerApp';

/* This is parent Component */

function App() {
  return ( 
    <div className='App'>
      <ColorPickerApp />
    </div>
  )
}

export default App;

/*---------------------------*/
/* This is child component */

import { ColorPicker, useColor } from "react-color-palette";


function ColorPickerApp() {
    const [color, setColor] = useColor("hex", "#121212");

    return (
        <div>
            <h1>Color Picker</h1>
            <ColorPicker width={456} height={228} color={color} onChange={setColor} hideHSV dark />
        </div>
    )
}
export default ColorPickerApp;
