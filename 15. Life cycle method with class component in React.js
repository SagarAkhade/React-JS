// Life cycle method with class component in React->>
//-	Life Cycle method has 3 phases
// o Mounting phase – Mounting phase is basically loading of component
// o Updating phase – Updating phase is like we update props or state of component
// o Unmounting phase – Unmounting phase is removing component completely

//Constructor life cycle method ->>
// - constructor is a life cycle method

import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: "Sagar",
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Hello {this.state.data}</h1>
      </div>
    );
  }
}

export default App;
