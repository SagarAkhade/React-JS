// Routing Example with best practice in React js ->>
// - First we add Router wrapper in index.js
// - And then include main parent component App in Router
// - Now we put all links inside Nav.js file And then impoting them in parent component
// - We Adding Home page in different file as Home.js and import it to parent component
// - Similarly we Adding About page in different file as About.js and import it to parent component
// - For setting default home page just do like this below
/* Synatx : <Link to="/" >Home Page</Link>     //Setting default link
  <Route path="/" exact={true} element={<Home />} />  //Accessing default Home page
*/
// - We can also directly set HTML code inside the <Route>
//  Syntax: <Route> <Direct HTML Code> </Route>
// - In react we strictky use <Link > for routing not <a> anchor tag,
// because while nevigation the <a> tag completely reaload the web page 

/* This is main parent component */

import logo from './logo.svg';
import './App.css';
import { Table } from 'react-bootstrap'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import Nav from './Nav'
import Home from './Home'
import About from './About';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App;

/*---------------------------*/

// Continued Routing Example
// This is index.js file

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';   //for using bootstrap


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*---------------------*/
// Continued Routing Example

/*This is Child component for the Links  */

import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div>
            <Link to="/" >Home Page</Link>
            <br />
            <Link to="/about" >About Page</Link>
        </div>
    )
}

export default Nav;
/*------------------------------*/
// Continued Routing Example

/*This is Child component for the Home page */

function Home() {
    return (
        <div>
            <h1>Home page</h1>
            <p>This is Home page of website</p>
        </div>
    )
}

export default Home;
/*------------------*/
// Continued Routing Example

/*This is Child component for the About page */

function About() {
    return (
        <div>
            <h1>About page</h1>
            <p>This is About page of website</p>
        </div>
    )
}

export default About;
