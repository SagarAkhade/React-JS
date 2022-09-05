// Ref in React js ->>
// - Accorinding to React official, Ref should be avoided to use
// - Do not directly manipulate DOM beacuse it slows the speed of app
// - Ref has power to directly manipulate the DOM
// - Ref is used whenever its most neccessary to directly manipulate DOM
// - For using Ref first import it from React using below
//   Syntax :   import React, { createRef } from 'react';
// - To use the Ref add it into constructor of class component
/* Syntax :   constructor() {
                super();
                this.inputRef = createRef();
              }
*/
// - And use this Ref into any HTML tag as property
//    Syntax:  <input type="text" ref={this.inputRef}/>
// - Using Ref we directly get value of input field, Also we can change the css properties directly
/*
Syntax : 
    console.log(this.inputRef.current.value)  
    this.inputRef.current.style.color="red"  
    this.inputRef.current.style.backgroundColor = "black"
*/

/* This is main parent component */

import logo from './logo.svg';
import './App.css';
import { Table, Button } from 'react-bootstrap'
import User from './User';
import React, { createRef } from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.inputRef = createRef();
  }
  componentDidMount() {
    console.log(this.inputRef.current.value = "1000");  //Directly add value in webpage
  }

  getVal() {
    console.log(this.inputRef.current.value)  //this will give us values of input field directly
    this.inputRef.current.style.color = "red"  //This will directly changing css properties
    this.inputRef.current.style.backgroundColor = "black"
  }

  render() {
    return (
      <div className='App'>
        <h1>Ref in React </h1>
        <input type="text" ref={this.inputRef} />
        <button onClick={() => this.getVal()}>Check Ref</button>
      </div>
    )
  }
}

export default App;
