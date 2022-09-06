// Dynamic Routing with Params in React js ->>
// - Dynamic routing is routing in which we don't know about the exact number of routing paths 
// Ex : Dynamic list of products 
// - Dynamic Routing done with the help of loops
// - For sending path inside other path just do like this below
//    Syntax : <Route path="/users/:id" element={<User /> } /> 
// - For passing multiple data use like this
//  Syntax : <Route path="/user/:id/:name/:email" element={<User />} />
// - For getting the paths to child component we need useParams Hook and import it from react in Child Component
// this is for the v6 of React routers 
// Syntax : import  { useParams } from 'react-router-dom';
// - And then declare that param inside the child component as below
// Syntax : const params  = useParams();
// - This params values are used like this below
// Syntax : {params.id}  {params.name}

/* This is main parent component */

import logo from './logo.svg';
import './App.css';
import { Table } from 'react-bootstrap'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import User from './User';

function App() {
  let users = [
    { id: 1, name: "sagar", email: "sagar@gmail.com" },
    { id: 2, name: "anil", email: "anil@gmail.com" },
    { id: 3, name: "sam", email: "sam@gmail.com" },
    { id: 4, name: "bruce", email: "bruce@gmail.com" },
    { id: 5, name: "tony", email: "tony@gmail.com" },
    { id: 13, name: "bat", email: "bat@gmail.com" },
  ]

  return (
    <div className='App'>
      <Router>
        <h1>React Dynamic Routing</h1>
        {
          users.map((item, i) =>
            <div key={i}>
              <Link to={'/users/' + item.id + "/" + item.name + "/" + item.email}><h3>{item.name}</h3></Link>
            </div>
          )
        }
        <Routes>
          <Route path="/users/:id/:name/:email" element={<User />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;

/*------------------------------*/

// Continued Dynamic Routing with Params ->>

/*This is child component */

import { useParams } from 'react-router-dom';

function User() {
    const params = useParams();

    console.log(params)
    return (
        <div className='App'>
            <h1>Hi this is user no {params.id}</h1>
            <h1>Hi this is {params.name}</h1>
            <h1>User email is {params.email}</h1>
        </div>
    )
}

export default User;
