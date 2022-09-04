// Handle Array with List in React js ->>
// - In react map method is used for iterating arrays 
// - Map method takes callback function
// - for loop is not used for iterating array in react
// - Beacuse map method is only supported in return block but for loop is not supported in return block
// - Use of JS in HTML is called JSX
// - For using JS in HTML write JS code inside {code}

/* This is main parent component */

import logo from './logo.svg';
import './App.css';
import { Button, Alert } from 'react-bootstrap'

function App() {
  const students = ["Sagar", "Anil", "Sam", "Peter"];
  //map
  students.map((item) => {
    console.log("My name is " + item);
  })

  for (let i = 0; i < students.length; i++) {
    console.log("forloop My name is " + students[i]);
  }

  // Array of Objects List 
  const studentDetails = [
    { name: "Sagar", email: "sagar@gmail", contact: 888 },
    { name: "Anil", email: "anil@gmail", contact: 111 },
    { name: "Peter", email: "peter@gmail", contact: 222 },
    { name: "Sam", email: "sam@gmail", contact: 333 }
  ]

  return (
    <div className="App">
      <h1>Handle Array with List </h1>
      {/* For using JS and HTML together write code inside {codeJS&HTML} */}
      {
        students.map((data) =>
          <h1>{data}</h1>
        )
      }

      {/* Showing data inside Array of object using table */}
      <table border="1">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Number</th>
        </tr>
        {
          studentDetails.map((data) =>
            <tr>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.contact}</td>
            </tr>
          )
        }
      </table>
    </div>
  )
}

export default App;
