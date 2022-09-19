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
// import Todo from './Components/Todo_v1.1/todo';
import Todo_Practice from './Components/Todo_Practice/Todo_Practice';

function App() {
  return (
    <div className='App'>
      <Todo_Practice />
    </div>
  );
}

export default App;

/*--------------------------*/
import './Todo_practice_style.css'

import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

function getData() {
    const lists = localStorage.getItem('lists')
    if (lists) {
        return JSON.parse(lists);
    }
    else {
        return [];
    }
}

const Todo_Practice = () => {
    const [inputData, setIntputData] = useState('');
    const [items, setItems] = useState(getData());
    const [toggle, setToggle] = useState(true);
    const [isEdited, setIsEdited] = useState(null);

    function submit(e) {
        e.preventDefault();
        if (!inputData) {
            alert("Please Enter the value");
        }
        else if (inputData && !toggle) {
            setItems(
                items.map((element) => {
                    if (element.id === isEdited) {
                        return { ...element, name: inputData }
                    }
                    return element;
                })
            )
            setIntputData('');
            setToggle(true);
            setIsEdited(null);
        }
        else {
            const allInputData = { id: new Date().getTime().toString(), name: inputData };
            setItems([...items, allInputData]);

            console.log(items);
            setIntputData('')
        }
    }

    function deleteItem(id) {
        const updatedItems = items.filter((element) => {
            return (id != element.id);
        })
        setItems(updatedItems);
    }

    function editItems(id) {
        const editedItem = items.find((element) => {
            return (id === element.id)
        })

        console.log(editedItem);

        setIntputData(editedItem.name);
        setIsEdited(id);
        setToggle(false);
    }

    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(items))
    }, [items])

    return (
        <div>
            <h1>Todo App</h1>
            <form onSubmit={submit}>
                <input type="text" value={inputData} onChange={(e) => setIntputData(e.target.value)} />
                <button>Submit</button>
            </form>

            <div className='list'>
                {
                    items.map((element) => {
                        return (
                            <div className='listItems' key={element.id}>
                                <h4>{element.name}</h4>

                                <div>
                                    <button onClick={() => editItems(element.id)}>Edit</button>
                                    <button onClick={() => deleteItem(element.id)}>Delete</button>
                                </div>
                            </div>
                        )

                    })
                }
            </div>

        </div>
    )
}

export default Todo_Practice;
