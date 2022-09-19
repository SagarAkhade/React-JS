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

import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

function DrugListApp() {
    var [drugs, setDrugs] = useState([
        {
            "drugName": "Crocin Tablet", "drugId": "d1234", "in_stock": true,
            "drugSafety": "LASA"
        },
        {
            "drugName": "Paracetamol", "drugId": "d1235", "in_stock": false, "drugSafety": "NARCOTIC"
        },
        {
            "drugName": "Calpol", "drugId": "d1236", "in_stock": true, "drugSafety": "LASA"
        },
        {
            "drugName": "Centrizine 50", "drugId": "d1237", "in_stock": true, "drugSafety": "HIGH RISK"
        },
        {
            "drugName": "Calpol 80", "drugId": "d1238", "in_stock": false, "drugSafety": "HIGH RISK"
        },
        {
            "drugName": "Paracetamol 500", "drugId": "d1230", "in_stock": true, "drugSafety": "NARCOTIC"
        },
        {
            "drugName": "Calpol 50", "drugId": "d1239", "in_stock": false, "drugSafety": "LASA"
        },
        {
            "drugName": "Paracetamol 40", "drugId": "d1233", "in_stock": false, "drugSafety": "NARCOTIC"
        }
    ])

    //need to work on this function for functionality
    function deleteItem(i) {
        const updatedList = drugs.filter((element, index) => {
            return (i !== index)
        })
        setDrugs(updatedList); 
    }
    console.log(drugs)
    return (
        <>
            <h1>Drug Store</h1>
            <Table variant='dark' hover>
                <thead>
                    <tr>
                        <th>Sr. No.</th>
                        <th>Drug Name</th>
                        <th>Drung ID</th>
                        <th>Drug Safety</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        drugs.map((item, i) =>
                            <tr key={i}>{
                                item.in_stock === true ?
                                    <>
                                        <td style={{ backgroundColor: "green" }}>{i + 1}</td>
                                        <td style={{ backgroundColor: "green" }}>{item.drugName}</td>
                                        <td style={{ backgroundColor: "green" }}>{item.drugId}</td>
                                        <td style={{ backgroundColor: "green" }}>{item.drugSafety}</td>
                                        <td><button onClick={(e) => deleteItem(i)}>Delete</button></td>
                                    </> :
                                    <>
                                        <td style={{ backgroundColor: "red" }}>{i + 1}</td>
                                        <td style={{ backgroundColor: "red" }}>{item.drugName}</td>
                                        <td style={{ backgroundColor: "red" }}>{item.drugId}</td>
                                        <td style={{ backgroundColor: "red" }}>{item.drugSafety}</td>
                                        <td><button onClick={(e) => deleteItem(i)}>Delete</button></td>
                                    </>
                            }
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </>
    )

}

export default DrugListApp;
