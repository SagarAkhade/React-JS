// Q. Transfer the data between Two Sibling Components in React JS 

/* This is Parent Component */

import "./styles.css";
import Child1 from './TranseferDataInSiblings/Child1';
import Child2 from './TranseferDataInSiblings/Child2';

import { useState } from "react";

export default function App() {
  const [transferData, setTransferData] = useState();
  function dataToTransfer(data){
    setTransferData(data);
  }

  return(
    <div className='App'>
      <Child1 dataToTransfer={dataToTransfer}/>
      <Child2 transferData={transferData}/>
    </div>
  )
}

/*----------------------------------*/
/* This is Child Commponent 1 */

import {useState} from 'react';

function Child1(props){
  const [count, setCount] = useState(0);
  
  props.dataToTransfer(count);
  return(
    <>
      <h1>{count}</h1>
      <button onClick={()=>{
        setCount(count + 1);
        
      }}>Increase Counter</button>
    </>
  )
}

export default Child1;

/*--------------------------*/
/* This is Child Commponent 2 */

function Child2(props){
  return(
    <>
      <h1>{props.transferData}</h1>
    </>
  )
}

export default Child2;
