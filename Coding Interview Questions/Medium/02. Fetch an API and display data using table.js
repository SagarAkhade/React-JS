/* 
Q.  Fetch the API and show data in table form
    URL : https://jsonplaceholder.typicode.com/users
*/
import logo from './logo.svg';

import './App.css';
import { Table } from 'react-bootstrap'
import { Component, useRef, useState, useEffect } from 'react';

import FetchAPI from './Components/FetchAPI/FetchAPI';

/* This is parent Component */

function App() {
  return (
    <div className='App'>
      <FetchAPI />
    </div>
  )
}

export default App;

/*---------------------------*/
/* This is child component */

import { useState } from "react";
import { useEffect } from "react";
import { Table } from 'react-bootstrap'

function FetchAPI() {
    const URL = "https://jsonplaceholder.typicode.com/users";
    const [data, setData] = useState([]);

    useEffect(() => {
        // fetch(URL).then((result)=>result.json()).then((data)=>setData(data));

        async function getData() {
            const responce = await fetch(URL);
            if (!responce.ok) {
                throw new Error("Something wends wrong")
            }
            const data = await responce.json();
            return data;
        }
        getData().then((data) => setData(data)).catch((error) => error)
    }, [])

    return (
        <>
            <Table variant="dark" hover striped>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, i) =>
                            <tr key={i}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </>
    )
}

export default FetchAPI;
