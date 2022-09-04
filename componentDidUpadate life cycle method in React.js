// componentDidUpadate life cycle method in React->>
// - componentDidUpadate is executed after we update state or props
// - componentDidUpadate executes only whenever there is update of anything in component 
// - Do not update state in componentDidUpadate, because it will go in loop again and again 
// - If we want to update state in componentDidUpadate then must update it inside conditions
/*
Syntax in class component 
      componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate");
      }
*/
// - componentDidUpdate has 3 parameters -> 
//    1. prevProps - shows the previous props
//    2. prevState - shows the previous state
//    3. snapshot  - It enables your component to capture some information from the DOM
// - Never update state inside the render method because it will update all component again
// - componentDidUpdate will not invoked if shouldComponentUpdate return false

/* This is main parent component */

import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    }
    console.log("constructor");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
    console.log(prevState);
    console.log(snapshot);   // O/p : undifined because we have not pass anything
    if (this.state.counter < 10) {   // updating state using condition
      this.setState({ counter: this.state.counter + 1 })
    }
  }

  render() {
    console.log("render");
    return (
      <div className="App">
        <h1>Component Did Update {this.state.counter}</h1>
        <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>Update Counter</button>
      </div>
    );
  }
}

export default App;
