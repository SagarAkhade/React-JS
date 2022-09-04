// List with Bootstrap and Unique key React js ->>
// - When we are using map method inside return method it gives us below error
// Warning: Each child in a list should have a unique "key" prop.
// - This above error comes beacuse the virtual dom needs unique key for every item
// - So to eliminate this error we pass one more parameter in callback function of map method 
/*
Synatx :     Eliminating Unique key error
        {
          users.map((item, i) =>
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.contact}</td>
            </tr>
          )
        }
*/
// - Adding Bootstrap table for list ->
// - just go to react bootstrap site and copy table styling from there
// - for importing just do like this below
//      import { Table } from 'react-bootstrap'
// - We can also apply conditions on list while displaying


/* This is main parent component */

import logo from './logo.svg';
import './App.css';
import { Table } from 'react-bootstrap'

function App() {

  // Array of Objects List 
  const users = [
    { name: "Sagar", email: "sagar@gmail", contact: 111 },
    { name: "Anil", email: "anil@gmail", contact: 111 },
    { name: "Peter", email: "peter@gmail", contact: 111 },
    { name: "Sam", email: "sam@gmail", contact: 111 }
  ]

  return (
    <div className="App">
      <h1>Handle Array with List </h1>
      <Table striped bordered hover variant='dark'>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((item, i) =>
              // applying condition
              item.contact === 111 ?
                <tr key={i}>
                  <td>{i}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.contact}</td>
                </tr> : null
            )
          }
        </tbody>
      </Table>
    </div>
  )
}

export default App;
