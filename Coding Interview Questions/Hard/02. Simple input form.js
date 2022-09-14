/* 
Q. Create 2 input fields, 2 checkboxes (only one should be selectable)
   Create 2 buttons, 1 is submit (pale green coloured) and 1 is reset 
   (black coloured) When you click on submit, you've to show the values of
   input fields and checkboxvalue in browser console.
   When you click on reset, everything have to be reset

*/
import logo from './logo.svg';

import './App.css';
import { Table } from 'react-bootstrap'
import { Component, useRef, useState, useEffect } from 'react';

import SimpleForm from './Components/SimpleForm/SimpleForm';

/* This is parent Component */

function App() {
  return (
    <div className='App'>
      <SimpleForm />
    </div>
  )
}

export default App;

/*---------------------------*/
/* This is child component */

import { useState } from "react";


function SimpleForm() {
    const [name, setName] = useState();
    const [number, setNumber] = useState();
    const [check, setCheck] = useState(false);

    function showdata(e) {
        e.preventDefault();
        console.log(name, number, check);
    }

    return (
        <>
            <h1>Simple Form</h1>
            <form onSubmit={showdata}>
                <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter Name" /> <br /><br />
                <input type="number" onChange={(e) => setNumber(e.target.value)} placeholder="Enter Mobile" /> <br /><br />
                <input type="checkbox" onChange={(e) => setCheck(e.target.checked)} /> Terms<br /><br />
                <input type="checkbox" checked onChange={(e) => e.target.checked} /> Conditions<br /><br />
                <input type="submit" /><input type="reset" />
            </form>
        </>
    )
}

export default SimpleForm;
