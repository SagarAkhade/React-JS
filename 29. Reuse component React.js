// Reuse component React js ->>
// - The component which we use again and again are basically Reusable components
// - Once that component is created it is used in different components 

/* This is main parent component */

import logo from './logo.svg';
import './App.css';
import { Table } from 'react-bootstrap'
import User from './User';

function App() {

  // Array inside the Array is nested Array
  const users = [
    {
      name: "Sagar", email: "sagar@gmail.com", contact: "111"
    },
    {
      name: "Bruce", email: "Bruce@gmail.com", contact: "222"
    },
    {
      name: "Peter", email: "Peter@gmail.com", contact: "333"
    },
    {
      name: "Anil", email: "Anil@gmail.com", contact: "444"
    },
  ]

  return (
    <div className="App">
      <h1>Reuse Component with List </h1>
      {
        users.map((item) =>

          <User data={item} />   // passing props

        )
      }
    </div>
  )
}

export default App;

/*----------------------*/
// Continued Reuse component ->>

/*This is child component */


function User(props) {

    return (
        <div>
            <span> {props.data.name}</span>
            <span> {props.data.email}</span>
            <span> {props.data.contact}</span>
            <button onClick={() => alert(props.data.name)}>Your Name</button>
        </div>
    )
}

export default User;

