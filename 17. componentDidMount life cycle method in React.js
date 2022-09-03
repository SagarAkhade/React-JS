// componentDidMount life cycle method in React->>
// - In life cycle method first it called for constructor then render and after that componentDidMount called
// - constructor -> render -> componentDidMount
// - componentDidMount will be called after all HTML and DOM is ready
// - componentDidMount is used for calling API's[Best Example]
// - Things which are depend on HTML should be called inside the componentDidMount
// - Difference between componentDidMount and componentDidUpdate :-
//    - When our HTML is ready then componentDidMount executed
//    - When state or props are updated then componentDidUpdate executed
// - Whenever we update anything componentDidMount is not run again
// - componentDidMount executes only once when component is mounted so it is better for calling API's
// - In class component componentDidMount used like this
/*
Syntax : 
      componentDidMount(){ 
        console.log("componentDidMount");
      }
*/

/*This is main parent component */

import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "sagar",
    }
    console.log("Constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    console.log("render");
    return (
      <div className="App">
        <h1>Component Did Mount {this.state.name}</h1>
        <button onClick={() => this.setState({ name: "sam" })}>Update name</button>
      </div>
    );
  }
}

export default App;
