/* 
Q.  Date and Time App
*/
import logo from './logo.svg';

import './App.css';
import { Table } from 'react-bootstrap'
import { Component, useRef, useState, useEffect } from 'react';

import DateAndTimeApp from './Components/DateAndTimeApp/DateAndTimeApp';
/* This is parent Component */

function App() {
  return (
    <div className='App'>
      <DateAndTimeApp />
    </div>
  )
}

export default App;

/*---------------------------*/
/* This is child component */

import { useState } from "react";

function DateAndTimeApp() {
    const [render, setRender] = useState(false);
    function display() {
        setRender(!render);
    }

    return (
        <>
            <DisplayDateTime />
            <button onClick={display}>Show current Date and Time</button>
        </>

    )
}

function DisplayDateTime() {
    const timmer = new Date();

    return (
        <>
            <h1>Date : {timmer.getDate()}/{timmer.getMonth() + 1}/{timmer.getFullYear()}</h1>
            <h1>Current Time : {timmer.toLocaleTimeString()}</h1>
        </>
    )
}
export default DateAndTimeApp;
