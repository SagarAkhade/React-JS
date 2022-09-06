// Call get method API in React js ->>
// - API : Application Programing Interface
// - To get the data from API we use get Method
// - To store the data in database we use post method
// - To update data we use put method
// - To remove data we use delete method
// - Whenever we want to get data from API we use fetch method
// - API calls in functional component is done in useEffect hook
//    Syntax : useEffect(callback function, [])
// - To fetch the API in React we used the useHook like below this
/* Syntax : 
        useEffect(() => {
            fetch(url).then((responce)=>responce.json())
                      .then((data) => setData(data));
        }, []) 
*/

/* This is main parent component */

import logo from './logo.svg';
import './App.css';
import { Table } from 'react-bootstrap'
import { useEffect, useState } from 'react';

function App() {
  const url = "https://jsonplaceholder.typicode.com/users";

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url).then((responce) => responce.json())
      .then((data) => setData(data));
    /*
    //Another way to fetch API using the async await keywords
    async function getData() {
      const responce = await fetch(url);
      if (!responce.ok) {
        throw new Error("Something went wrog")
      }
      const data = await responce.json();
      return data;
    }
    getData().then((data) => setData(data)).catch((error) => error);
    */
  }, [])

  return (
    <div className='App'>
      <Table variant='dark' striped hover border="2">
        <thead>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>Username</th>
            <th>Email</th>
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
              </tr>
            )
          }
        </tbody>
      </Table>
    </div>
  )
}

export default App;
