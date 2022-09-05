// Pure Component in React js ->>
// - Pure component is just feature of react
// - Pure component are applied in class component only
// - Pure component stops the re-rendering of component 
// Ex : suppose we are updating the same data again and again using state, so it checks 
// whether the previous data matches or not, And if matched pure component stops re-rendering
// - state in class component always define inside the constructor of class
// - To use pure component we need to import it like below and use it in class 
// Syntax :  import React,{PureComponent} from 'react';
// - Pure component checks the previous value of state/props and if it is same on update,
//  it stops the re-rendering of the component 
// - Pure component stops re-rendering if prevData == currentData on update
// - Pure component similarly works on props also

/* This is main parent component */

import logo from './logo.svg';
import './App.css';
import { Table } from 'react-bootstrap'
import User from './User';
import React, { PureComponent } from 'react';

class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 1,
    }
  }
  render() {
    console.log("Check-re-rendering");
    return (
      <div className='App'>
        <h1>Pure Component in React {this.state.count}</h1>
        <button onClick={() => this.setState({ count: 1 })}>Update count</button>
        <User count={this.state.count} />
      </div>
    )
  }
}

export default App;

/*-------------------------------*/

// Continued Pure Component ->>

/*This is child component */
import React, { PureComponent } from 'react';

class User extends PureComponent {

    render() {
        console.log("Child re-rendering")
        console.log("Check-re-rendering");
        return (
            <div className='App'>
                <h1>User Component Count : {this.props.count}</h1>
            </div>
        )
    }
}

export default User;
