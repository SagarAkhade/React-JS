// Install and use Bootstrap in React->>
// - Bootstrap is library
// - Bootstrap is basically used for styling purpose with additional functionality
// - It provides the responsiveness to webpage
// - For installing Bootstrap go to Google and type "react bootstrap" and click on Official link
// - In that website click on  {get started button}
// - Then copy installation command 
// - And run that command in command prompt of our project Or paste in terminal of project file in VS code
//     command : npm install react-bootstrap bootstrap
// - For Using bootstrap import its functionality and paste this below syntax in "index.js" file
//   import 'bootstrap/dist/css/bootstrap.min.css';
// - Now for accessing this functionality import like this below in component where want to use 
//   import {Button} from 'react-bootstrap'   -> for using button

/* This is main parent component */

import logo from './logo.svg';
import './App.css';
import { Button, Alert } from 'react-bootstrap'


function App() {

  return (
    <div className="App">
      <h1>BootStrap functionality</h1>
      <Button onClick={() => alert("From Bootstrap")}> Click Me</Button> <br />
      {/* This below buttons are copied from react-bootstrap website */}
      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}<br />
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}<br />
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button> <Button variant="link">Link</Button> <br />

      {/* This below Alert  copied from react-bootstrap website */}
      {
        <Alert variant="warning">
          This is a  alert—check it out!
        </Alert>
      }
    </div>
  )
}

export default App;
