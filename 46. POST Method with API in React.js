// POST Method with API in React js ->>
// - POST method is used to send our data to server 
// - These below syntax we use to POST data on server

/* This is main parent component */

import logo from './logo.svg';
import './App.css';
import { Table } from 'react-bootstrap'
import { useEffect, useState } from 'react';

function App() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  function saveUser() {
    console.log({ name, email, mobile });
    let data = { name, email, mobile }
    fetch(url, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)   // JSON.stringify() method gives us String
    }).then((result) => {
      console.log("result", result)
      result.json()
    }).then((resp) => console.log(resp));
  }

  return (
    <div className='App'>
      <h1>POST API Example</h1>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" /> <br /><br />
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} name="email" /> <br /><br />
      <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} name="mobile" /> <br /><br />
      <button onClick={saveUser} type='button'>Save new User</button>
    </div>
  )
}

export default App;
