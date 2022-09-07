// Context API in React js ->>
// - Contex API help us in transferring data from various components
// - Using contex API we can transfer data in sibling components also
// - This contex API technique is easier than Redux and easy to use 
// - Here we are creating the Header and Footer and main content comoonent 
// - And using Main content component we transfering data to Header and Footer
// - Contex API has two parts Provider and Consumer
// - Provider -> provider sets the all data of file 
// - Consumer -> Consumer consumes the data provided by the provider
// - For creating contex API we need to create one file which work as provider 
// - In the provider file import createContext from react as below
//  Syntax : import { createContext } from "react";
// - To use this provider file do like this below 
//  Syntax : export const nameOfFile = createContext();
// - And then import that provider file in parent component App.js
// - And we use that provider component in parent component as HTML tag using below syntax
// Syntax :  <CommonContex.Provider value={color}> Everything inside this  </CommonContex.Provider>
// - We have created Main component 
// -In this Main component we we are cosuming the data
// - We need to import the main provider file inside the consumer file also
// - And enclose everything of Consumer component like this below
//  Syntax : <CommonContext.Consumer> It takes the call back function </CommonContext.Consumer >
// - Now we created UpdateButton component and export it to App.js component
// - And enclose everything of Consumer component like this below
// - Syntax : <CommonContext.Consumer> It takes the call back function </CommonContext.Consumer >
// - After that we have created the Header and Footer component 
// - And then import them in App.js

/* This is main parent component */

import logo from './logo.svg';
import './App.css';
import { Table } from 'react-bootstrap'
import { CommonContext } from './Components/CommonContext';
import Main from './Components/Main';
import UpdateButton from './Components/UpdateButton';
import Header from './Components/Header';
import Footer from './Components/Footer';

import { Component, useState } from 'react';

class App extends Component {
  constructor() {
    super()
    this.updateColor = (color) => {
      this.setState({
        color: color
      })
    }

    this.state = {
      color: "green",
      updateColor: this.updateColor
    }
  }

  render() {
    return (
      <CommonContext.Provider value={this.state}>
        <Header />
        <CommonContext.Consumer >
          {
            ({ color }) => (
              <h1 style={{ backgroundColor: color }}>Terms inside the Contex API</h1>
            )
          }
        </CommonContext.Consumer>

        <Main />
        <UpdateButton />
        <Footer />
      </CommonContext.Provider>
    )
  }
}

export default App;
/*------------------------*/
// Continued Contex API

/* This is provider for Contex API */

import { createContext } from "react";

export const CommonContext = createContext();
/*------------------------------------*/
// Continued Contex API

/* This is consumer for Contex API Main.js */

import { Table } from 'react-bootstrap'
import { CommonContext } from './CommonContext';
import { Component } from 'react';

class Main extends Component {
    render() {
        return (
            <CommonContext.Consumer >
                {
                    ({ color }) => (
                        <h1 style={{ backgroundColor: color }}>Hello this is main page</h1>
                    )
                }
            </CommonContext.Consumer>
        )
    }
}

export default Main;
/*-------------------------*/
// Continued Contex API

/* This is consumer for Contex API UpdateButton.js*/

import { Table } from 'react-bootstrap'
import { CommonContext } from './CommonContext';
import { Component } from 'react';

function UpdateButton() {
    return (
        <CommonContext.Consumer >
            {
                ({ updateColor }) => (
                    <div>
                        <button onClick={() => updateColor("yellow")} >Update yellow</button>
                        <button onClick={() => updateColor("blue")} >Update blue</button>
                        <button onClick={() => updateColor("red")} >Update Red</button>
                    </div>
                )
            }
        </CommonContext.Consumer>
    )
}

export default UpdateButton;
/*-----------------------------*/
// Continued Contex API

/* This is consumer for Contex API Header.js */

import { Table } from 'react-bootstrap'
import { CommonContext } from './CommonContext';
import { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <CommonContext.Consumer >
                {
                    ({ color }) => (
                        <h1 style={{ backgroundColor: color }}>Header Page</h1>
                    )
                }
            </CommonContext.Consumer>
        )
    }
}

export default Header;
/*------------------------------*/
// Continued Contex API

/* This is consumer for Contex API Footer.js */

import { Table } from 'react-bootstrap'
import { CommonContext } from './CommonContext';
import { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <CommonContext.Consumer >
                {
                    ({ color }) => (
                        <h1 style={{ backgroundColor: color, position: "absolute", bottom: 0, width: "100%" }}>Footer Page</h1>
                    )
                }
            </CommonContext.Consumer>
        )
    }
}

export default Footer;
