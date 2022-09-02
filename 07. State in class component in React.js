// State in class component in React ->>
// - class components are used very less
// - For creating class component we need import Componet from react using below 
//     Syntax :  import React,{Component} from 'react'
// - State is basically data container like variables(let, const, var)
// - we use state to store any type of data (like: string, object, array)
// - The main difference between state and variables is variables do not update the whole component,  
// but when we update state, our whole component gets Re-render 
//- For using State in class component we must need to add constructor for class
// - In that constructor we must use super() keyword for access the main class methods,
// and initialize our state in that constructor 
/*
 - Add state using following syntax
    constructor(){
      super();
      this.state = {
        data : "valueForData",
      }
    }
*/
//- And to use this objects value in return do like this {this.state.data}
// - Whenever we create state using class component we need to create Arrow function for onClick event
// - We should not use state outside the component its not recomanded 
// - To update state using following syntax
//      Syntax :  this.setState({ data: this.state.data + 1 });
// - state is public object

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {       // initializing state object here 
      data: 1,
    }
  }
  apple() {
    this.setState({ data: this.state.data + 1 });  // Updating state here
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.data}</h1>
        <button onClick={() => this.apple()}>Click Me</button>
      </div>
    );
  }
}

export default App;
