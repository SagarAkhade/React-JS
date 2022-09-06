// DELETE Method with API in React js ->>
// - DELETE Method is used to delete data from API
// - The below is Syntax we can use to delete method

/* This is main parent component */

import logo from './logo.svg';
import './App.css';
import { Table } from 'react-bootstrap'
import { useEffect, useState } from 'react';

function App() {
  const url = "https://jsonplaceholder.typicode.com/users";

  const [data, setData] = useState([]);

  useEffect(() => {   //To update our list we called function inside useEffect Hokk
    getList();
  }, [])

  function getList() {
    fetch(url).then((responce) => responce.json())
      .then((data) => setData(data));
  }

  function deleteUser(id) {     // This is delete method to delete user
    fetch(`${url}/${id}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json()
    }).then((resp) => {
      console.log(resp)
      getList();
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
          </tr>
        </thead>
        <tbody>
          {
            data.map((item, i) =>
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td><button onClick={() => deleteUser(item.id)}>Delete</button></td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </div>
  )
}

export default App;
