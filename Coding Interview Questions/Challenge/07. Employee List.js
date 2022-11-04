/*
Q. Employee List
  Create two pages with Home page containing list of Managers and Employees and List page.
  Add button to each manager and employee onClick of button in List page show that manager with his respective emplyee.
  Note : The database can in array format or use any database
  Note : UI can be improved but not neccessary
*/
import React from 'react';
import './App.css';
import MainPage from './Components/EmployeeList/MainPage';

function App() {
  return (
    <div className='App'>
      <MainPage />
    </div>
  );
}

export default App;

/*---------------------------*/
/* This is Main component */

import React from 'react'
import Home from './Home';
import Details from './Details';

import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import { useState } from 'react';
function MainPage() {
    const data = [
        { name: 'sam', designation: 'manager', phone: '111', reportTo: '1' },
        { name: 'john', designation: 'manager', phone: '222', reportTo: '2' },
        { name: 'smith', designation: 'manager', phone: '333', reportTo: '3' },
        { name: 'dev', designation: 'employee', phone: '333', reportTo: '1' },
        { name: 'smith', designation: 'employee', phone: '444', reportTo: '1' },
        { name: 'sham', designation: 'employee', phone: '555', reportTo: '1' },
        { name: 'ram', designation: 'employee', phone: '666', reportTo: '2' },
        { name: 'sachin', designation: 'employee', phone: '777', reportTo: '2' },
        { name: 'shlok', designation: 'employee', phone: '888', reportTo: '3' },
        { name: 'aniket', designation: 'employee', phone: '999', reportTo: '3' },
    ]

    const [seeId, setId] = useState();
    const [seeDetails, setSeeDetails] = useState([]);
    function getDetails(id) {
        const details = data.find((element, index) => {
            return (id === index)
        })
        setId(details.reportTo);
        const updatedList = data.filter((element, i) => {
            return (element.reportTo === seeId);
        })
        setSeeDetails(updatedList);
    }
    console.log(seeDetails);

    const [search, setSearch] = useState('');

    // console.log(search);
    return (
        <>
            <Router>
                <Link to='/' >List </Link> &nbsp;
                <Link to='/empolyee' >Details</Link>
                <br /><br />

                <Routes>
                    <Route path='/' exact={true} element={<Home data={data} getDetails={getDetails} setSearch={setSearch} search={search} />} />
                    <Route path='/empolyee' element={<Details seeDetails={seeDetails} />} />
                </Routes>
            </Router>
        </>
    )
}

export default MainPage;

/*---------------------------*/
/* This is Child component */

import React, { useState } from 'react'

function Home({ data, getDetails, search, setSearch }) {
    const [man, setMan] = useState('');
    return (
        <>
            <input
                type='text'
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search here...'
            /> <br /><br />
            {
                data.filter((element)=>{
                    if(search === ''){
                        return element;
                    }
                    else if(element.name.toLowerCase().includes(search.toLowerCase())){
                        return element;
                    }
                })
                .map((element, i) => {
                    return (
                        <div key={i} style={{ display: "flex", justifyContent: "space-around" }}>
                            <span>Name: <strong>{element.name}</strong></span>
                            <span>Designation: <strong>{element.designation}</strong></span>
                            <span>Phone number: {element.phone}</span>
                            <button onClick={() => getDetails(i)}>See Details</button>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Home;

/*---------------------------*/
/* This is Child component */

import React from 'react'

function Details({ seeDetails }) {
    return (
        <>
            {
                seeDetails.map((element, i) => {
                    return (
                        <div key={i} style={{ display: "flex", justifyContent: 'space-around' }}>
                            <span>Name:<strong>{element.name}</strong></span>
                            <span>Designation: <strong>{element.designation}</strong></span>
                            <span>Phone number: {element.phone}</span>
                        </div>
                    )
                })

            }
        </>
    )
}

export default Details;
