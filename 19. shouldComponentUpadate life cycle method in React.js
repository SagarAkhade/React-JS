// shouldComponentUpadate life cycle method in React->>
// - Using shouldComponentUpadate we can apply condition that when our component should update or not 
// - shouldComponentUpadate can also stop rendering using some condition
// - shouldComponentUpadate by default returns false and block the updating of render method
// - When we return ture from the shouldComponentUpadate then it will allow render() method to update(re-render)
// - Using shouldComponentUpadate we can control the rendering of component with some conditions 
// - shouldComponentUpadate used to increase the speed of application 
/*
Syntax : shouldComponentUpdate in class component 
      shouldComponentUpdate() {
        console.log("shouldComponentUpdate", this.state.count);
        if (this.state.count > 5 && this.state.count < 10) {
          return true;
        }
        return false;
      }
*/
// - We can call API inside the componentDidUpdate if we want conditional call for API
// - otherwise we can call API inside componentDidMount

/* This is main parent component */

import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    }
    console.log("constructor");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate", this.state.count);
    if (this.state.count > 5 && this.state.count < 10) {
      return true;
    }
    return false;
  }

  render() {
    console.log("render");
    return (
      <div className="App">
        <h1>Should Component Update {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Update Counter</button>
      </div>
    );
  }
}

export default App;
