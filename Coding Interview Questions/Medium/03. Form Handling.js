/* 
Q. Take the Name and Gender of the user and add it to the below list. 
   Also, user can delete it.

- For Hannlding form we import useForm like this below
- Syntax : import { useForm } from 'react-hook-form'
- And then this useForm is used like this below in function
- Syntax :     const { register, handleSubmit } = useForm();
- Here register-> Object  , handleSubmit->function which take function as parameter
- And then in form tag do like this below
- Syntax : <form onSubmit={handleSubmit(submit)}>
- And to add values in register object do like this below
- Syntax : <input {...register("firstName")} type="text" /> 

*/
import logo from './logo.svg';

import './App.css';
import { Table } from 'react-bootstrap'
import { Component, useRef, useState, useEffect } from 'react';

import FormHandling from './Components/FormHandling/FormHandling';

/* This is parent Component */

function App() {
  return (
    <div className='App'>
      <FormHandling />
    </div>
  )
}

export default App;

/*---------------------------*/
/* This is child component */

import { useState } from 'react';
import { useForm } from 'react-hook-form'

function FormHandling() {
    const { register, handleSubmit } = useForm();
    const [result, setResult] = useState('');
    function submit(data) {
        setResult(JSON.stringify(data));
    }

    return (
        <>
            <form onSubmit={handleSubmit(submit)}>
                <input {...register("firstName")} type="text" placeholder="Enter First Name" /> <br /><br />
                <input {...register("lastName")} type="text" placeholder="Enter Last Name" /> <br /><br />
                <select {...register("category")}>
                    <option value="">Select Your Options</option>
                    <option value="A">Option A </option>
                    <option value="B">Option B </option>
                </select> <br /><br />

                <input type="submit" />
            </form>
            <p>{result}</p>
        </>
    )
}

export default FormHandling;
