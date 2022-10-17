// Lifting State Up (Sending Data of Child to parent component) in React js ->>
// - For passing the data from parent to child we simply used the props
// - For passing data from child component to parent we create function in parent component
// - And inside that function we use paramter to accessing the data coming from the child 
// - And use that data inside the parent component itself
// - We can send any type of data from child like string, varibles, array, object, etc

/* This is main parent component */

import logo from './logo.svg';
import './App.css';
import { Table } from 'react-bootstrap'
import User from './User';

function App() {

  function parentAlert(data) {
    alert(data.name + " " + data.email)
  }

  return (
    <div className='App'>
      <h1>Lifting State Up </h1>
      <User alert={parentAlert} />
    </div>
  )
}

export default App;

/*------------------------*/
// Continued Lifting State Up ->>

/*This is child component */
import { Button } from 'react-bootstrap'

function User(props) {

    const data = "sagar akhade"
    const data1 = { name: "sagar", email: "sagar@gmail.com" }
    return (
        <div>
            <h2>User Name : {data1.name}</h2>
            <Button onClick={() => props.alert(data1)}>Click Me </Button>
        </div>
    )
}

export default User;
