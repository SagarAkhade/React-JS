// Nested List with Nested Array React js ->>
// - Nesting means creating a child inside the parrent 
// - Array inside array is basically a Nested Array

/* This is main parent component */

import logo from './logo.svg';
import './App.css';
import { Table } from 'react-bootstrap'

function App() {

  // Array inside the Array is nested Array
  const users = [
    {
      name: "Sagar", email: "sagar@gmail.com", address: [
        { Hn: "10", city: "Mumbai", country: "India" },
        { Hn: "34", city: "Noida", country: "India" },
        { Hn: "43", city: "Gurgaon", country: "India" },
        { Hn: "90", city: "Dehli", country: "India" },
      ]
    },
    {
      name: "Bruce", email: "Bruce@gmail.com", address: [
        { Hn: "10", city: "Mumbai", country: "India" },
        { Hn: "34", city: "Noida", country: "India" },
        { Hn: "43", city: "Gurgaon", country: "India" },
        { Hn: "90", city: "Dehli", country: "India" },
      ]
    },
    {
      name: "Peter", email: "Peter@gmail.com", address: [
        { Hn: "10", city: "Mumbai", country: "India" },
        { Hn: "34", city: "Noida", country: "India" },
        { Hn: "43", city: "Gurgaon", country: "India" },
        { Hn: "90", city: "Dehli", country: "India" },
      ]
    },
    {
      name: "Anil", email: "Anil@gmail.com", address: [
        { Hn: "10", city: "Mumbai", country: "India" },
        { Hn: "34", city: "Noida", country: "India" },
        { Hn: "43", city: "Gurgaon", country: "India" },
        { Hn: "90", city: "Dehli", country: "India" },
      ]
    },
  ]


  return (
    <div className="App">
      <h1>Nested List </h1>
      <Table variant='dark' striped>
        <tbody>
          <tr>
            <th>Sr. No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>

          {
            users.map((item, i) =>
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <Table variant='dark' size="sm" striped hover bordered >
                    <tbody>
                      {
                        item.address.map((data, i) =>
                          <tr key={i}>
                            <td>{data.Hn}</td>
                            <td>{data.city}</td>
                            <td>{data.country}</td>
                          </tr>
                        )
                      }
                    </tbody>
                  </Table>
                </td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </div>
  )
}

export default App;
