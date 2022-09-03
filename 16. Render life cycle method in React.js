// Render life cycle method in React->>
// -	Render is presenting data after complete of execution
// - Whenever there is any change in HTML code the component gets completely re-render
// - Also if there is any update in state and props the complete component gets re-render

/*This is main parent component */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import User from './User'

function App() {
  const [name, setName] = useState("Sagar");
  return (
    <div className="App">
      <h1>Hello World</h1>
      <User name={name} />
      <button onClick={() => setName("Akhade")}>Update Name</button>
    </div>
  );

}

export default App;

/*---------------------------*/

// Continued Render life cycle method ->>

/*This is child component */

import React from 'react';

class User extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "sagar@gamil.com"
        }
    }
    render() {
        console.log("Render Method", this.props, this.state.email)
        return (
            <div>
                <h1>User Component</h1>
                <button onClick={() => this.setState({ email: "abc@xyz.com" })}>Update Email</button>
            </div>
        )
    }
}

export default User;

