/*
Q. Add Products in Cart on click of button
*/
import logo from './logo.svg';
import React from 'react';
import './App.css';
import AddToCartSimple from './Components/AddToCartSimple/AddToCartSimple';

function App() {

  return (
    <div>
      <AddToCartSimple />
    </div>
  );
}

export default App;

/*-------------------------*/
// This is Child Component

import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import Cart from './Cart';
import HomePage from './HomePage';

function AddToCartSimple() {
    const [list, setList] = useState([]);

    /* Adding Items to Cart */
    const [cart, setCart] = useState([]);
    function addToCart(item) {
        if (cart.indexOf(item) !== -1) {
            alert("Item is Already in Cart")
            return;
        }
        setCart([...cart, item]);
        totalAmount();
    }

    /* Get the Total amount of cart items */
    const [total, setTotal] = useState(0);
    function totalAmount() {
        var total = cart.reduce((totalPrice, currentPrice) => {
            return (totalPrice + currentPrice.price);
        }, 0)
        setTotal(total);
    }
    useEffect(() => {
        totalAmount();
    });

    /* Delete Items from the cart */
    function deleteFromCart(id) {
        const updateCartItems = cart.filter((element, index) => {
            return (id !== index)
        })
        setCart(updateCartItems);
    }
    console.log("THis is cart: ", cart);

    const url = 'https://dummyjson.com/products';

    useEffect(() => {
        async function getData() {
            const responce = await fetch(url);
            if (!responce.ok) {
                throw new Error("Something went wrong");
            }
            const data = await responce.json();
            return data;
        }

        getData().then((data) => setList(data.products)).catch((error) => error);
    }, [])

    return (
        <div>
            <Router>
                {
                    list.length > 0 ? <>
                        <div style={{ display: "flex", justifyContent: "space-around", backgroundColor: '#e8e6e6' }}>

                            <Link to='/' exact={true}><h3 className='title'>Home</h3></Link>
                            <div style={{ display: "flex" }}>

                                <Link to='/cart'><h3 className='title'><i className="fas fa-cart-plus"></i></h3></Link>
                                <span style={{ backgroundColor: "yellow", color: "red", height: "25px", width: "25px", zIndex: "5", borderRadius: "50%", paddingLeft:'8px' }}>{cart.length}</span>
                            </div>


                        </div>

                        <Routes>
                            <Route path='/' element={<HomePage list={list} addToCart={addToCart} />} />
                            <Route path='/cart' element={<Cart cart={cart} deleteFromCart={deleteFromCart} total={total} />} />
                        </Routes>
                    </> : null
                }
            </Router>
        </div>
    )
}

export default AddToCartSimple;

/*-------------------------*/
// This is Child Component

import { useState } from 'react'
import './style.css'

function HomePage({ list, addToCart }) {

    return (
        <>
            <div className='main-card'>
                {
                    list.map((element, i) => {
                        return (
                            <div key={element.id} >
                                <div className='sub-card-each'>
                                    <img className='images' src={element.images[0]} />
                                    <h5>{element.title}</h5>
                                    <h3>Price: {element.price}</h3>
                                    <button onClick={() => addToCart(element)}>Add To Card</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default HomePage;

/*-------------------------*/
// This is Child Component

import React from 'react'
import './style.css';

function Cart({ cart, deleteFromCart, total }) {
    return (
        <>
            <h1>Total: {total}</h1>
            {
                cart.length > 0 ?
                    <div className='main-card'>
                        {
                            cart.map((element, i) => {
                                return (
                                    <div key={element.id} >
                                        <div className='sub-card-each'>
                                            <img className='images' src={element.images[0]} />
                                            <h5>{element.title}</h5>
                                            <h3>Price: {element.price}</h3>
                                            <button onClick={(e) => deleteFromCart(i)}>Delete from Cart</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div> :
                    <img src="https://www.vinsolutions.com/wp-content/uploads/sites/2/vinsolutions/media/Vin-Images/news-blog/Empty_Shopping_Cart_blog.jpg" alt="Avatar" className="image" />
            }
        </>
    )
}

export default Cart;

/*-------------------------*/
/* This is CSS file */

@import url('https://fonts.googleapis.com/css2?family=Baloo+Bhai+2&family=Bree+Serif&family=Bungee+Spice&family=Ubuntu:wght@300;400;500&display=swap');

h1, .title{
    font-family: 'Bungee Spice', cursive;
}
.main-card {
    margin-top: 1rem !important;
    display: flex;
    /* width: 99%; */
    flex-wrap: wrap;
    align-items: stretch;
    margin: auto;
    justify-content: space-around;
}

.sub-card-each {
    width: 300px;
    background-color: rgb(193, 183, 183);
    height: 475px;
    margin: auto;
    margin-bottom: 0.7rem;
    padding: 0.5rem;
    border-radius: 1rem;
}

.sub-card-each:hover {
    box-shadow: 1px 1px 2px 2px black;
}

.images {
    width: 99%;
    height: 70%;
    border-radius: 1rem;
    opacity: 0.9;
}
.images:hover{
    opacity: 1;
}

.emptyCart {
    background-size: cover;
}

.image{
    width: 100%;
    background-position: center;
    background-size: cover;
    height:33rem;
}
