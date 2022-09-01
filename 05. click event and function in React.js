//Click Event and Function in ReactJs ->>
// Syntax : <button onClick={FunctionName}>Click Me</button>
// Or we can also use Arrow function in onClick event like below
// Syntax : <button onClick={()=>FunctionName()}>Click Me</button>
//- When we want to use values of JS in HTML sections just do like this
// Syntax : <h1>{JSvariable}</h1>

import logo from './logo.svg';
import './App.css';

function App() {
  let data = 'sagar'
  function apple() {
    data = "peter"
    alert(data);
  }

  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={apple}>Click Me</button>
    </div>
  );
}

export default App;
