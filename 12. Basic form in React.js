// Basic form in React ->>
// - We have just created simple form
// - React is single page application but in form when we click on submit button all application gets reloaded
// - To stop complete reloading of application we add onSubmit event and in that we do like this below
//      Syntax:   e.preventDefault()
// - onSubmit event - This is form event for submiting the data of form on clicking Submit button
// - onChange event - Whenever we have change, this event gets triggered
//      Syntax :    onChange={anyFunction}

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const [interest, setInterest] = useState("");
  const [tnc, setTnc] = useState(false);

  function getFormData(e) {
    e.preventDefault();    //prevent the realoading of complete page
    console.log(name, interest, tnc);
  }

  return (
    <div className="App">
      <h1>Handle form in React</h1>

      <form onSubmit={getFormData}>
        <input type="text" placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)} style={{ padding: 20, textAlign: "center" }} />  <br /><br />

        <select onChange={(e) => setInterest(e.target.value)}>
          <option>Select Option</option>
          <option>Marvel</option>
          <option>DC</option>
        </select>    <br /><br />

        {/* e.target.checked will give true or false */}
        <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} /> <span>Accept Terms and Conditions</span> <br /><br />

        <button type='submit'>Submit</button>
        <button>Clear</button>
      </form>
    </div>
  );
}

export default App;
