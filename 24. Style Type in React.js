// Style Type in React->>
// - There are 3 types for adding Style in React 
// 1. Normal stylesheet - 
//    - like the normal css file and import it in component where it is used
//    - In react class is added as className
//        Syntax : <h1 className='class1 class2'>Style</h1>
// 2. Style with variable or Inline style - 
//   - In inline styling style is added inside the HTML tag itself
//   - properties are written in camelCase Ex: backgroundColor
//      Syntax : <h1 style={{color:'red', backgroundColor:'black'}}>Inline Styling</h1>
// 3. CSS with Module
//    - For styling with module create another file with file name as nameOfFile.module.css
//    - Import this css module file like this 
//        Syntax : import style from './nameOfFile.module.css'
//    - And add that css using below this
//        Syntax : <h1 className={style.className}>CSS with Module</h1>

/* This is main parent component */

import logo from './logo.svg';
import './App.css';
import './style.css'
import style from './custom.module.css'

function App() {

  return (
    <div className="App">
      <h1 className='primary secondary'>Style using Normal stylesheet in React js</h1>

      <h1 style={{ color: 'red', backgroundColor: 'black' }}>Inline Styling</h1>

      <h1 className={style.success}>CSS with Module</h1>
    </div>
  )
}

export default App;

/*----------------------------*/

/* Continued 1. Normal stylesheet */
/* This file is used above for Noraml styling */
.primary {
    background-color: black;
    color: green;
}

.secondary {
    padding: 10px;
}

/*-------------------------*/

/* Continued 3. CSS with Module */
/* This file is used above for CSS with Module styling */
.success {
    color: gold;
    background-color: black;
}
