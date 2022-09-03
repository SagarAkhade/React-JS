//Props with class component in React ->>
// - props with class component first we need to create class component
// - For creating class component import react using following 
//      Syntax : import React,{Component} from 'react'
// - class componet must have render method 
// - To get value of props in class component use like below
//      Syntax : {this.props.anyPassedProp}
// - To  see what props we passing can be see using console.log(this.props) in render section
// - Adding style to HTML using below 
//       Syntax : <div style={{ backgroundColor: "skyblue", margin: 20 }}>
// **This file for class component using props which we export[Child Component]**

import React, { Component } from "react";

class Student extends Component {

    render() {
        console.log(this.props)   //printing props in console

        return (
            <div style={{ backgroundColor: "skyblue", margin: 20 }}>
                <h1>Hello {this.props.name}</h1>
                <h3>{this.props.email}</h3>
                <h4>{this.props.obj.address}</h4>
                <h4>{this.props.obj.mobile}</h4>
            </div>
        )
    }
}

export default Student;


/*---------------------------*/
// Continued Props in class component ->>
//- Similar to functional component we can pass props in class component
//     Syntax : <Student name={name} email={"sagar@gmail.com"} obj={{ address: "Mumbai", mobile: "000" }} />
// - Props are passed in HTML tag 
// - We can use props multiple times
// - We can only change props in parent component whether its functional or class component, and not in child component
//- To change values we need to use states
//- For using state first import useState from react using below
//      import {useState} from 'react'
//**This file for Passing props to class component[Parent Component]**

import logo from './logo.svg';
import './App.css';
import Student from './Student';
import { useState } from 'react';


function App() {
  const [name, setName] = useState("Sagar");  // Initializing state

  return (
    <div className="App">
      <h1>Props in React with class component</h1>
      <Student name={name} email={"sagar@gmail.com"} obj={{ address: "Mumbai", mobile: "000" }} />
      {/* <Student name={"peter"} email={"peter@gmail.com"} obj={{ address: "Dehli", mobile: "111" }} /> */}
      <button onClick={() => setName("Sam")}>Update Name</button>
    </div>
  );
}

export default App;
