// Routing Setup in React js ->>
// - Routing is basically we convert component to different-different pages and access them using links
// - Rounting is converting components to different-different pages and link them using links 
// so that we can render different pages in our React app
// - For installing Routing setup go to google and type "react router"
// - To install react routing -> go to terminal of VS code of our project and use below command [routing v6 is used now days]
//   Command : npm install react-router-dom + Enter
// - For using rounting we need to import like this below
//    Syntax : import { BrowserRouter as Router } from 'react-router-dom'; 
// - Now using the routing in parent component everyting inside this 
/* 
Syntax :      <Router>
                <Link to="/home" >Home Page</Link>
                <br />
                <Link to="/about" >About Page</Link>

                <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path="/about" element={<About />} />
                </Routes>

              </Router>
*/
// - Now we need to import links in react like below
//    Syntax : import { BrowserRouter as Router, Link  } from 'react-router-dom';
// - Use of links are below
//    Syntax : <Link to="/home" >Home Page</Link>
// - Now we import the Route and Routes from react like this
//  Syntax : import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
// - Now for routing different pages use like this 
/* Syntax : this is new feature in routing V6
For using Routes first import it from react and all route components are wrap inside Routes
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
*/

/* This is main parent component */

import logo from './logo.svg';
import './App.css';
import { Table } from 'react-bootstrap'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>

        <Link to="/home" >Home Page</Link>
        <br />
        <Link to="/about" >About Page</Link>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

      </Router>
    </div>

  )
}

function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <p>This is Home page of website</p>
    </div>
  )
}

function About() {
  return (
    <div>
      <h1>About page</h1>
      <p>This is About page of website</p>
    </div>
  )
}

export default App;
