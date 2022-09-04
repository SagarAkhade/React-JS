// componentWillUnmount life cycle method in React->>
// - Whenever our component gets removed from the DOM then componentWillUnmount invoked
// - When we hide any component in react then that component completly removed from DOM
// at this time componentWillUnmount invoked
// - We can call any function, event, API call inside the componentWillUnmount
/*
Syntax : componentWillUnmount in class component
          componentWillUnmount(){
              alert("componentWillUnmount called");
          }
*/
// Interview Q : shouldComponentUpadate called first, if it return true value then componentDidUpdate called
// Interview Q : If our parent component is functional component
// and child component is class component then componentWillUnmount will be called from child,
// it depends on child component

/* This is main parent component */

import logo from './logo.svg';
import './App.css';
import React from 'react';
import Student from './Student';
 
class App extends React.Component {
  constructor() {
    super();
    this.state = {   //initializing the state
      show: true,
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Component Will Unmount </h1>
        <button onClick={() => this.setState({ show: !this.state.show })}>Toggle Child Component</button>

        {this.state.show ? <Student /> : <h1>Child Component removed</h1>}

      </div>
    );
  }
}

export default App;

/*---------------------*/
// continued componentWillUnmount life cycle ->>

/*This is child component */

import React, { Component } from "react";

class Student extends Component {
    componentWillUnmount() {
        alert("componentWillUnmount called");
    }
    render() {
        return (
            <div>
                <h1>Student Component</h1>
            </div>
        )
    }
}

export default Student;
