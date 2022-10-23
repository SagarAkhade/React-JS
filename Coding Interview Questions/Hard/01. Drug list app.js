/* 
Q. 1. [{ "drugName":"Crocin Tablet", "drugId":"d1234", "in_stock":true,
"drugSafety":"LASA" }, { "drugName":"Paracetamol", "drugId":"d1235", "in_stock":false, "drugSafety":"NARCOTIC" }, 
   { "drugName":"Calpol", "drugId":"d1236", "in_stock":true , "drugSafety":"LASA" }, 
   { "drugName":"Centrizine 50", "drugId":"d1237", "in_stock":true, "drugSafety":"HIGH RISK" }, 
   { "drugName":"Calpol 80", "drugId":"d1238", "in_stock":false, "drugSafety":"HIGH RISK" }, 
   { "drugName":"Paracetamol 500", "drugId":"d1230", "in_stock":true, "drugSafety":"NARCOTIC" }, 
   { "drugName":"Calpol 50", "drugId":"d1239", "in_stock":false, "drugSafety":"LASA" }, 
   { "drugName":"Paracetamol 40", "drugId":"d1233", "in_stock":false, "drugSafety":"NARCOTIC" } 
]
   1. display this list of drugs
           2. Color it green if in_stock = true, color it red of in_stock = false
           2. Put a filter option for example --  all, in_stock and out_of_stock  
   3. delete option beside each drug --
   Note : Some functionalities need to be improved
*/
import logo from './logo.svg';

import './App.css';
import { Table } from 'react-bootstrap'
import { Component, useRef, useState, useEffect } from 'react';

import DrugListApp from './Components/DrugListApp/DrugListApp';
/* This is parent Component */

function App() {
  return (
    <div className='App'>
      <DrugListApp />
    </div>
  )
}

export default App;

/*---------------------------*/
/* This is child component */

import React from 'react'
import { useState } from 'react'
import { Table } from 'react-bootstrap'

function DrugListApp() {
    const [drugs, setDrugs] = useState(
        [
            { "drugName": "Crocin Tablet", "drugId": "d1234", "in_stock": true, "drugSafety": "LASA" },
            { "drugName": "Paracetamol", "drugId": "d1235", "in_stock": false, "drugSafety": "NARCOTIC" },
            { "drugName": "Calpol", "drugId": "d1236", "in_stock": true, "drugSafety": "LASA" },
            { "drugName": "Centrizine 50", "drugId": "d1237", "in_stock": true, "drugSafety": "HIGH RISK" },
            { "drugName": "Calpol 80", "drugId": "d1238", "in_stock": false, "drugSafety": "HIGH RISK" },
            { "drugName": "Paracetamol 500", "drugId": "d1230", "in_stock": true, "drugSafety": "NARCOTIC" },
            { "drugName": "Calpol 50", "drugId": "d1239", "in_stock": false, "drugSafety": "LASA" },
            { "drugName": "Paracetamol 40", "drugId": "d1233", "in_stock": false, "drugSafety": "NARCOTIC" }
        ]
    )
    const [filterDrungs, setFilterDrugs] = useState(1);

    function deleteDrugs(i) {
        const updatedDrugList = drugs.filter((element, index) => {
            return (i !== index);
        })
        setDrugs(updatedDrugList);
    }


    return (
        <>
            <h1>Drugs Store </h1>

            <button onClick={() => setFilterDrugs(1)}>All</button>
            <button onClick={() => setFilterDrugs(2)}>In Stock</button>
            <button onClick={() => setFilterDrugs(3)}>Out of Stock</button>

            <Table variant='dark'>
                <thead>
                    <tr>
                        <th>Sr. No.</th>
                        <th>drugName</th>
                        <th>drugId</th>
                        <th>drugSafety</th>
                        <th>Delete From List </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        drugs.map((element, i) => {
                            return (
                                <tr key={i}>
                                    {
                                        filterDrungs === 1 ?
                                            element.in_stock === true ?
                                                <>
                                                    <td style={{ backgroundColor: "green" }}>{i + 1}</td>
                                                    <td style={{ backgroundColor: "green" }}>{element.drugName}</td>
                                                    <td style={{ backgroundColor: "green" }}>{element.drugId}</td>
                                                    <td style={{ backgroundColor: "green" }}>{element.drugSafety}</td>
                                                    <td><button onClick={() => deleteDrugs(i)}>Delete</button></td>
                                                </>
                                                :
                                                <>
                                                    <td style={{ backgroundColor: "red" }}>{i + 1}</td>
                                                    <td style={{ backgroundColor: "red" }}>{element.drugName}</td>
                                                    <td style={{ backgroundColor: "red" }}>{element.drugId}</td>
                                                    <td style={{ backgroundColor: "red" }}>{element.drugSafety}</td>
                                                    <td><button onClick={() => deleteDrugs(i)}>Delete</button></td>
                                                </>
                                            :
                                            filterDrungs === 2 ?
                                                element.in_stock === true ?
                                                    <>
                                                        <td style={{ backgroundColor: "green" }}>{i + 1}</td>
                                                        <td style={{ backgroundColor: "green" }}>{element.drugName}</td>
                                                        <td style={{ backgroundColor: "green" }}>{element.drugId}</td>
                                                        <td style={{ backgroundColor: "green" }}>{element.drugSafety}</td>
                                                        <td><button onClick={() => deleteDrugs(i)}>Delete</button></td>
                                                    </> : null
                                                :
                                                filterDrungs === 3 ?
                                                    element.in_stock === false ?
                                                        <>
                                                            <td style={{ backgroundColor: "red" }}>{i + 1}</td>
                                                            <td style={{ backgroundColor: "red" }}>{element.drugName}</td>
                                                            <td style={{ backgroundColor: "red" }}>{element.drugId}</td>
                                                            <td style={{ backgroundColor: "red" }}>{element.drugSafety}</td>
                                                            <td><button onClick={() => deleteDrugs(i)}>Delete</button></td>
                                                        </> : null
                                                    : null
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}

export default DrugListApp;
