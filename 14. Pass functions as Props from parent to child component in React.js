// Pass functions as Porps from parent to child component in React->>
// - When we have same function to be called inside many child components 
// - Then that function we declare in parent component and pass as props for its child components 

/*This is main parent component */

import logo from './logo.svg';
import './App.css';
import User from './User';
import Members from './Members';

function App() {
  function getData() {
    alert("Hello from App");
  }

  return (
    <div className="App">
      <User data={getData} />
      <User data={getData} />
      <div style={{ float: "right" }}>
        <Members data={getData} />
      </div>
    </div>
  );
}

export default App;
