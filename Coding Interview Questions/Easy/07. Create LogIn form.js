/* 
Q. Create logIn form

- For creating forms in React we uses library of forms using below syntax install it first 
- Syntax : npm install react-hook-form
- And do like this according to 
- import useForm hook using below
- Syntax : import { useForm } from "react-hook-form";
- Here we created simple LogIn form to keep simplicity 

*/
import logo from './logo.svg';

import './App.css';
import { Table } from 'react-bootstrap'
import { useRef, useState, useEffect } from 'react';

import LogInForm from './Components/LogInForm/LogInForm';

/* This is parent Component */

function App() {
  
  return ( 
    <div className='App'>
      <LogInForm />
    </div>
  )
}

export default App;

/*---------------------------*/
/* This is child component */

import { cleanup } from '@testing-library/react';
import { useRef } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form'

function LogInForm() {
    function handleForm(e) {
        e.preventDefault();
        const nameField = document.getElementById("nameField");
        const emailField = document.getElementById("emailField");
        const passField = document.getElementById("passField");

        console.log(nameField.value, emailField.value, passField.value)
        
        nameField.value="";
        emailField.value="";
        passField.value="";
    }

    return (
        <div className="form">
            <h1>LogInForm</h1>

            <form onSubmit={handleForm}>
                Enter Name : <input type="text" id="nameField" required placeholder="Enter Your Name" /> <br /> <br />
                Enter Email : <input type="email" id="emailField" required placeholder="Enter Your Email"  />  <br /> <br />
                Enter Password : <input type="password" id="passField" required placeholder="Enter Your Password"  />  <br /> <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default LogInForm;
