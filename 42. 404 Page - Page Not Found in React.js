// 404 Page - Page Not Found in React js ->>
// - The pages which are not created and user want to access them then we use 404 page ie. page not found
// - 404 is used to show the default page which not created yet
// - We import BrowserRouter from react to create 404 page like below
//    Syntax : import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
// - We need to create 404 page not found component 
// - If any route is not found just do this like below it will show 404 page
// Syntax : <Route path='*' element={<PageNotFount />} />
// - If any page is not created and we are accessing it, will also give 404 page

/* This is main parent component */

import logo from './logo.svg';
import './App.css';
import { Table } from 'react-bootstrap'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Link to="/">Home</Link> <br />
        <Link to="/about">About</Link><br />
        <Link to="/login">Login</Link>

        <Routes>
          <Route path='/' exact={true} element={<Home />} />
          <Route path='/about' element={<About />} />

          {/* This is for 404 page not found */}
          <Route path='*' element={<PageNotFount />} />
        </Routes>
      </Router>
    </div>
  )
}

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>This is Home Page</p>
    </div>
  )
}

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is About Page</p>
    </div>
  )
}

function PageNotFount() {
  return (
    <div>
      <h1>404 Page</h1>
      <p>This Page not fount</p>
    </div>
  )
}

export default App;
