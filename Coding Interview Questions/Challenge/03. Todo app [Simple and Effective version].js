/* 
Q. Todo App [Basic Version]

- This below cdn links we have applied in index.html file from public folder
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css"
      integrity="sha512-BnbUDfEUfV0Slx6TunuB042k9tuKe3xrD6q4mg5Ed72LTgzDIcLPxg6yI2gcMFRyomt+yJJxE+zJwNmxki6/RA=="
      crossorigin="anonymous" />

*/
import logo from './logo.svg';

import React from 'react';
import './App.css';
import Todo from './Components/Todo_v1.1/todo';

function App() {
  return (
    <div className='1'>
      <Todo />
    </div>
  );
}

export default App;

/*----------------------*/
/* This is child component */

// For importing functional arrow component using the short-hand => rafce => react arrow functional component 

// Local storage ->>
// - Local storage is used to store the data in local storage
// - To add data do below this
// - Syntax : localStorage.setItem('anyNameThatRepresentsData', JSON.stringify(anyData))
// - Example : localStorage.setItem('list', JSON.stringify(items))
// - it stores the data in key-value pair format, and in only String form
// - JSON.stringify(items) converts the data into string
// - To get the data from the local storage we do like this 
// - let list = localStorage.getItem('lists');
// - JSON.parse(localStorage.getItem('lists')) -> convert to array
// - And to convert this data from string to numberal format we use JSON.parse() method

import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import image from '../Todo_v1.1/image.jpg'
import './style.css'

// To get the data from Local storage
const getLocalItems = () => {
    let lists = localStorage.getItem('lists');
    console.log(lists);
    // Getting back data from localStorage and converting it into array form
    if (lists) {
        return JSON.parse(localStorage.getItem('lists'));
    }
    else {
        return [];
    }
}

const Todo = () => {
    const [inputData, setInputData] = useState('');  //for getting todo item
    const [items, setItems] = useState(getLocalItems()); // for storing complete list of items
    const [toggleSubmit, setToggleSubmit] = useState(true);  // for toggling the plus and edit icon
    const [isEditItme, setIsEditItme] = useState(null);  // for getting the id of item that is edited 

    //Adding to list Item
    const addItem = () => {
        if (!inputData) {
            alert("Input List cannot be empty!!!");
        }
        //For updating Edited data 
        else if (inputData && !toggleSubmit) {
            setItems(
                items.map((element) => {
                    if (element.id === isEditItme) {
                        return { ...element, name: inputData }
                    }
                    return element;
                })
            )
            setToggleSubmit(true);

            setInputData('')

            setIsEditItme(null);
        }
        else {
            // here we are Adding data in list 
            const allInputData = { id: new Date().getTime().toString(), name: inputData }
            setItems([...items, allInputData])  //Here we are storing all list using spread operator 
            setInputData('')   // now we are removing data from input field
        }
    }

    // Deleting the list Item
    const deleteItem = (index) => {

        // Filter method returns the list which not equal to current deleted id
        const updatedItems = items.filter((element) => {
            return (index != element.id);
        })

        setItems(updatedItems);
    }

    // Remove all
    const removeAll = () => {
        setItems([]);
    }

    // Add data to local storage so when we refresh the page the list not removed 
    // We are using the useEffect hook so that whenever the items list is updated it will store data in local storage
    // - JSON.stringify(items) converts the data into string
    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(items))
    }, [items])

    //Here we are editing items of list 
    // 1: get the id and name of the data which user clicked to edit
    // 2: set the toggle mode to change the submit button into edit button
    // 3: Now update the value of the setInput with new updated value to edit
    // 4: To pass the current element Id to new state variable for reference
    const editItem = (id) => {
        let newEditItems = items.find((element) => {
            return element.id === id;
        });
        console.log(newEditItems);
        setToggleSubmit(false);

        setInputData(newEditItems.name)

        setIsEditItme(id);
    }

    return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        <img src={image} alt='Todo logo' />
                        <figcaption>Add Your List Here ✌🏻</figcaption>
                    </figure>

                    <div className='addItems'>
                        <input type="text" placeholder='✍🏻 Add Items....'
                            value={inputData}
                            onChange={(e) => setInputData(e.target.value)}
                        />
                        {
                            toggleSubmit ? <i className='fa fa-plus add-btn' title="Add Item" onClick={addItem}> </i> :
                                <i className='far fa-edit add-btn' title="Update Item" onClick={addItem}> </i>
                        }

                    </div>

                    <div className='showItems'>
                        {
                            items.map((element) => {
                                return (
                                    <div className='eachItem' key={element.id}>
                                        <h3>{element.name}</h3>

                                        <div className='todo-btn'>
                                            <i className='far fa-edit add-btn' title="Edit Item"
                                                onClick={() => editItem(element.id)}> </i>
                                            <i className='far fa-trash-alt add-btn' title="Delete Item"
                                                onClick={() => deleteItem(element.id)}> </i>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    {/* Cleat all buttons */}
                    <div className='showItems'>
                        <button className='btn  effect04' data-sm-link-text="REMOVE ALL"
                            onClick={removeAll}><span>CHECK LIST</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo;

/*--------------------------------*/
/* CSS file */
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Source Sans Pro", sans-serif;
}

html {
  font-size: 62.5%;
}

.main-div {
  min-height: 100vh;
  background: #060822;
  display: flex;
  justify-content: center;
  /* align-items: center; */
}

.child-div {
  text-align: center;
  margin-top: 12rem;
}

.child-div figure img {
  width: 10rem;
  height: 8rem;
}

.child-div figure figcaption {
  color: #fff;
  font-size: 2.2rem;
  padding-top: 2rem;
  text-transform: capitalize;
}

input {
  /* display: block; */
  min-width: 40rem;
  height: 3.4rem;
  padding: 2rem 1.2rem;
  font-size: 1.8rem;
  line-height: 1.42857143;
  margin-top: 2rem;
  color: rgb(58, 57, 57);
  background-color: #fff;
  background-image: none;
  border: 0.1rem solid #ccc;
  border-radius: 0.4rem;
  -webkit-box-shadow: inset 0 0.1rem 0.1rem rgb(0 0 0 / 8%);
  box-shadow: inset 0 0.1rem 0.1rem rgb(0 0 0 / 8%);
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
}

input,
input:focus,
input:active,
input:active:focus {
  border: none;
  padding: 2.3rem 1.5rem;
  outline: none;
}
input {
  -webkit-box-shadow: none;
  box-shadow: none;
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
}
input:focus {
  -webkit-box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.2);
}

/*  Please Subscribe to ThapaTechnical Youtube Channel
/* Click Here: https://www.youtube.com/thapatechnical  */

.todo-btn {
  width: 5rem;
  display: flex;
  justify-content: space-around;
}

.fa {
  margin-left: -2.5rem;
  cursor: pointer;
  pointer-events: auto;
  z-index: 10;
  background-color: #fff;
  background-image: none;
  color: #666;
  -webkit-transition: color 0.15s linear;
  transition: color 0.15s linear;
  font-size: 2rem;
}
.fa:hover {
  color: rgb(47, 214, 122);
}

.fa-plus:before {
  content: "\f067";
  font-size: 1.5rem;
}

.showItems {
  margin-top: 3rem;
  text-align: center;
}

.eachItem {
  background: #fff;
  padding: 1.2rem 1rem;
  border-radius: 0.5rem;
  margin-bottom: 0.7rem;
  margin-left: 1rem;
  min-width: 40rem;
  word-break: break-word;
  background: rgb(85, 41, 220);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.eachItem:hover {
  background: rgb(249, 249, 252);
  color: rgb(85, 41, 220);
}

.showItems .eachItem h3 {
  padding-left: 1rem;
  font-size: 1.6rem;
  color: #fff;
}

.fa-trash-alt,
.fa-edit {
  /* margin-left: -2.5rem; */
  cursor: pointer;
  pointer-events: auto;
  z-index: 10;
  color: rgb(251, 251, 251);
  -webkit-transition: color 0.15s linear;
  transition: color 0.15s linear;
  font-size: 2rem;
}

.addItems .fa-edit {
  color: rgb(47, 214, 122);
}

.fa-edit {
  margin-left: -3.5rem;
}

/*  Please Subscribe to ThapaTechnical Youtube Channel
/* Click Here: https://www.youtube.com/thapatechnical  */

.eachItem:hover .fa-trash-alt {
  color: rgb(214, 47, 61);
}

.eachItem:hover .fa-edit {
  color: rgb(100, 214, 47);
}

.eachItem:hover h3 {
  color: rgb(85, 41, 220);
}

.btn {
  letter-spacing: 0.1em;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 45px;
  max-width: 160px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;
}
.btn:hover {
  text-decoration: none;
}

.effect04 {
  --uismLinkDisplay: var(--smLinkDisplay, inline-flex);
  display: var(--uismLinkDisplay);
  color: #000;
  outline: solid 2px #000;
  position: relative;
  transition-duration: 0.4s;
  overflow: hidden;
}

.effect04::before,
.effect04 span {
  margin: 0 auto;
  transition-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  transition-duration: 0.4s;
}

.effect04:hover {
  background-color: rgb(85, 41, 220);
}

.effect04:hover span {
  -webkit-transform: translateY(-400%) scale(-0.1, 20);
  transform: translateY(-400%) scale(-0.1, 20);
}

.effect04::before {
  content: attr(data-sm-link-text);
  color: #fff;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  -webkit-transform: translateY(500%) scale(-0.1, 20);
  transform: translateY(500%) scale(-0.1, 20);
}

.effect04:hover::before {
  letter-spacing: 0.05em;
  -webkit-transform: translateY(0) scale(1, 1);
  transform: translateY(0) scale(1, 1);
}
