// Pre-filled form in React js ->>
// - We are making simple form
// - on clicking button API values are gone in input fields ;)

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

  useEffect(() => {   //To update our list we called function inside useEffect Hokk
    getUsers();
  }, [])

  function getUsers() {
    fetch(url).then((result) => result.json())
      .then((resp) => {
        setUsers(resp)
        setName(resp[0].name)
        setUsername(resp[0].username)
        setEmail(resp[0].email)
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
        <input type="text" value={name} /> <br /> <br />
        <input type="text" value={userName} />  <br /> <br />
        <input type="text" value={email} /> <br /> <br />
        <button>Update User</button>
      </div>

    </div>
  )
}

export default App;
