/*
Q. Add products into the Cart
*/
/* This is parent Component */

import logo from './logo.svg';
import React from 'react';
import './App.css';
import AddToCard from './Components/AddToCart/AddToCart';

function App() {
  return (
    <div className='App'>
      <AddToCard />
    </div>
  );
}

export default App;

/*--------------------------*/
/* This is Child Component */

import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'

import React from 'react';
import { useState } from 'react';
import './cartStyle.css'

var cardItems = [
    { id: 1, name: "moblie" },
    { id: 2, name: "TV" },
    { id: 3, name: "Tab" },
    { id: 4, name: "Laptop" }
];

var cardList = [];

function AddToCard() {
    return (
        <div className='App'>
            <Router>
                <Link to="/" >Home</Link>
                <Link to="/cart"> Cart</Link>

                <Routes>
                    <Route path='/' exact={true} element={<Home />} />
                    <Route path='/cart' element={<Cart />} />
                </Routes>
            </Router>
        </div>
    );
}

// Home Component
function Home() {

    function addToCard(id) {

        const addItem = cardItems.find((element) => {
            return (id === element.id)
        })
        cardList.push(addItem)
        console.log(cardList);
    }
    return (
        <div>
            <h1>Home</h1>
            {
                cardItems.map((element) => {

                    return (
                        <div className='itemList' key={element.id}>
                            <h3>{element.name}</h3>
                            <button onClick={() => addToCard(element.id)}>Add to card</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

//Cart Component 
function Cart() {
    const [items, setItems] = useState(cardList)
    function deleteCart(id) {
        const updatedCard = items.filter((element) => {
            return (id !== element.id);
        })
        setItems(updatedCard);
    }
    return (
        <div>
            <h1>Cart Items</h1>

            {
                items.map((element) => {
                    return (
                        <div className='itemList' key={element.id}>
                            <h3>{element.name}</h3>
                            <button onClick={() => { deleteCart(element.id) }}>Delete from card</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AddToCard;
