// Q. Create Two input fields and display them  

import logo from './logo.svg';
import './App.css';
import { Table } from 'react-bootstrap'
import { useRef } from 'react';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(false);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  function display(e) {
    e.preventDefault();
    setShow(true)
    setIncome(document.getElementById('income').value);
    setExpense(document.getElementById('expense').value);
  }

  return (
    <div className='App'>
      <form onSubmit={display}>
        Income : <input type='text' id="income" /> <br /> <br />
        Expenses : <input type='text' id="expense" /> <br /> <br />
        <button type='submit'>Submit</button>
      </form>

      {
        show ?
          <DisplayIncome income={income} expense={expense} />
          : null
      }

    </div>
  )
}

function DisplayIncome(props) {
  return (
    <>
      <h1> Income : {props.income}</h1>
      <h1> Expenses : {props.expense}</h1>
    </>

  )
}

export default App;
