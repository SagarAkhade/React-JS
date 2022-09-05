// Fragments in React js ->>
// - React Fragment is used to handle the multiple element or components
// - Components are basically which we create in different-different files
// - Elements are basically the HTML tags Ex : <h1>,<div>, etc
// - React fragment is used as wrapper, which wrapps all elemets and component in single in tag
// - React fragment is used with 3 ways  
/*  1.  Syntax 
        <React.Fragment>
          All Elements and Component inside this 
        </React.Fragment>
*/
/*
2. first import the Frament from react like this and use it 
Synatax : import React,{Fragment} from 'react';
            <Fragment>
              <h1>Reuse Component with List </h1>
            </Fragment>
*/
/*
3. Just use empty tag to wrap all elements and components <></>
Syntax :  <>
            <h1>Reuse Component with List </h1>
            <h1>Reuse Component with List </h1>
          </>
*/

/* This is main parent component */

import logo from './logo.svg';
import './App.css';
import { Table } from 'react-bootstrap'
import React, { Fragment } from 'react';
import Cols from './Cols';

function App() {
  return (
    <>
      <h1>Reuse Component with List </h1>
      <table>
        <tbody>
          <tr>
            <Cols />
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default App;

/*-----------------------*/
// Continued Fragments in React ->>

/*This is child component */

function Cols() {
    return (
        <>
            <td>Sagar</td>
            <td>Akhade</td>
        </>
    )
}

export default Cols;
