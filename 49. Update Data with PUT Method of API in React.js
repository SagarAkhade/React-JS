// Update Data with PUT Method of API in React js ->>
// - PUT Method is used to udate the data at server sides of API

/* This is main parent component */

import logo from './logo.svg';
import './App.css';
import { Table } from 'react-bootstrap'
import { useEffect, useState } from 'react';

function App() {
  const url = "https://jsonplaceholder.typicode.com/users";

  const [users, setUsers] = useState([]);

  const [name, setName] = useState("");
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const [userID, setUserId] = useState(null);

  useEffect(() => {   //To update our list we called function inside useEffect Hook
    getUsers();
  }, [])

  function getUsers() {
    fetch(url).then((result) => result.json())
      .then((resp) => {
        setUsers(resp)
        setName(resp[0].name)
        setUsername(resp[0].username)
        setEmail(resp[0].email)
        setUserId([resp[0].id])
      });
  }

  function deleteUser(id) {     // This is delete method to delete user
    fetch(`${url}/${id}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json()
    }).then((resp) => {
      console.log(resp)
      getUsers();
    })
  }

  function selectUser(id) {
    console.log(users[id - 1]);
    setName(users[id - 1].name)
    setUsername(users[id - 1].username)
    setEmail(users[id - 1].email)
    setUserId(users[id - 1].id)
  }

  // Here we using PUT method
  function updateUser() {
    console.log(name, userName, email, userID);
    let item = { name, userName, email, userID }
    fetch(`${url}/${userID}`, {
      method: 'PUT',
      header: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    }).then((result) => {
      result.json()
    }).then((resp) => {
      console.log(resp)
      getUsers();
    })
  }

  return (
    <div className='App'>
      <Table variant='dark' striped hover border="2">
        <thead>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Operations </th>
            <th>Update </th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((item, i) =>
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td><button onClick={() => deleteUser(item.id)}>Delete</button></td>
                <td><button onClick={() => selectUser(item.id)}>Update</button></td>
              </tr>
            )
          }
        </tbody>
      </Table>

      <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> <br /> <br />
        <input type="text" value={userName} onChange={(e) => setUsername(e.target.value)} />  <br /> <br />
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /> <br /> <br />
        <button onClick={updateUser}>Update User</button>
      </div>

    </div>
  )
}

export default App;
