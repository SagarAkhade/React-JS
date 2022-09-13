/* 
Q. Digital Clock

*/
import logo from './logo.svg';

import './App.css';
import { Table } from 'react-bootstrap'
import { Component, useRef, useState, useEffect } from 'react';

import DigitalClock from './Components/DigitalClock/DigitalClock';

/* This is parent Component */

function App() {
  return (
    <div className='App'>
      <DigitalClock />
    </div>
  )
}

export default App;

/*---------------------------*/
/* This is child component */

import { Component } from "react";

class DigitalClock extends Component {
    constructor() {
        super();
        this.state = { time: new Date() };
    }
    currentTime() {
        this.setState({ time: new Date() });
    }
    componentDidMount() {
        this.interval = setInterval(() => this.currentTime(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return (
            <>
                <div >
                    <h1 id="time">{this.state.time.toLocaleTimeString()}</h1>
                </div>
            </>
        );
    }
}

export default DigitalClock;
