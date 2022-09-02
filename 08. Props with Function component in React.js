//Props with Function component in React ->>
// - props are basically properties(but not compulsory)
// - When we want transfer data from one component to other props are used
// - Here we passed on parameter as props for functional component
// - This props are coming from other file where we use this functional component 
// - props is object
// - props are used for dynamic data 
// - for accessing props just do like this 
//      Syntax :    {props.propertyName}
// **This file for functional component using props which we export**

function Student(props) {
    console.log(props);
    return (
        <div style={{ backgroundColor: "skyblue", margin: "10px" }}>   {/*This is one way of Styling in React */}
            <h1>Hello {props.name}</h1>
            <h2>Email : {props.email}</h2>
            <h4>Address : {props.other.address}</h4>
            <h4>Mobile : {props.other.mobile}</h4>
        </div>
    )
}

export default Student;

/*--------------------------------*/
// Continued Props in functional component ->>
// - As we are accessing the the above componet here as HTMl tag we can pass props here like this
//    Syntax : <Student name = {"sagar"}/>  
// - For passing multiple props
//    Syntax : <Student name={"sagar"} email={"sagar@gmail.com"} other={{address:'mumbai', moblie:'000'}}/>
// - This other parameter is prop which is passed
// - This is prop is accessed in component as its parameter 
// - We can also change the props using state 
// - We cannot use useState in class component
//**This file for Passing props to functional component**

import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './Student'

function App() {
  const [name, setName] = useState("Sagar");  //For useState

  return (
    <div className="App">
      <h1>Props in React</h1>
      <Student name={name} email={"sagar@gmail.com"} other={{ address: 'mumbai', mobile: '000' }} />   {/*props is passing here */}
      {/* <Student name={"peter"} email={"peter@gmail.com"} other={{address:'dehli', mobile:'111'}}/> */}
      {/* <Student name={"priti"} email={"priti@gmail.com"} other={{address:'noida', mobile:'222'}}/> */}

      <button onClick={() => { setName("Sam") }}>Upadate Name</button>
    </div>
  );
}

export default App;
