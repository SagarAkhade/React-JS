// Q. Add product into cart 

/* This is App.js component */

import logo from './logo.svg';
import React from 'react';
import './App.css';
import Parent from './Practice/Hard/AddToCart/Parent';

function App() {
  return (
    <div className='App'>
      <Parent />
    </div>
  );
}

export default App;

/*------------------------------*/
/* This is parent Component */

import Home from './Home';
import Cart from './Cart'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import { useState } from 'react';

function Parent() {
    const products = [
        { id: 1, productName: "Moblie", productPrice: 15000 },
        { id: 2, productName: "TV", productPrice: 35000 },
        { id: 3, productName: "Laptop", productPrice: 75000 },
        { id: 4, productName: "Washin Machine", productPrice: 30000 },
        { id: 5, productName: "Table", productPrice: 10000 },
        { id: 6, productName: "Tab", productPrice: 25000 },
        { id: 7, productName: "AC", productPrice: 30000 },
    ];

    const cartItems = [];

    function addProductsToCart(cartData) {
        cartItems.push(cartData);
    }

    return (
        <>
            <Router>
                <Link to='/home'>  Home</Link> &nbsp;
                <Link to='/cart1'> Cart</Link>  &nbsp;

                <Routes>
                    <Route path='/home' element={<Home products={products} addProductsToCart={addProductsToCart} />} />
                    <Route path='/cart1' element={<Cart cartItems={cartItems} />} />
                </Routes>
            </Router>
        </>
    )
}
export default Parent;

/*----------------------------*/
/* This is Home component */

import { useState } from "react";
import { Table } from "react-bootstrap";

function Home(props) {
    const [products, setProducts] = useState(props.products);
    const [totalAmount, setTotalAmount] = useState();

    function MaxToMin() {
        const maxToMin = products.slice(0).sort((a, b) => b.productPrice - a.productPrice);
        setProducts(maxToMin);
    }

    function MinToMax() {
        const maxToMin = products.slice(0).sort((a, b) => a.productPrice - b.productPrice);
        setProducts(maxToMin);
    }

    function getTotal() {
        const totalPrice = products.reduce((totalPrice, currentProduct) => {
            return (totalPrice + currentProduct.productPrice);
        }, 0)
        setTotalAmount(totalPrice);
    }

    const cartItems = [];

    function addToCart(id) {
        const newCartItems = products.find((element) => {
            return (id === element.id);
        })
        props.addProductsToCart(newCartItems);
    }

    return (
        <>
            <h1>This is Home Page</h1>
            <h5>Sort</h5>
            <button onClick={MaxToMin}>MaxToMin</button>
            <button onClick={MinToMax}>MinToMax</button>
            <Table hover striped responsive bordered size="sm" variant="dark">
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Add To Cart</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((element, i) => {
                            return (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{element.productName}</td>
                                    <td>{element.productPrice}</td>
                                    <td><button onClick={(e) => addToCart(element.id)}>Add To Cart</button></td>
                                </tr>
                            )
                        })
                    }
                    <tr>
                        <td></td>
                        <td><button onClick={getTotal}>Get Total</button></td>
                        <td>{totalAmount}</td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default Home;

/*--------------------*/
/* This is Cart Component */

import { useState } from "react";
import { Table } from "react-bootstrap";

function Cart(props) {
    console.log(props.cartItems);
    const [cartItems, setCartItems] = useState(props.cartItems);

    function MaxToMin() {
        const maxToMin = cartItems.slice(0).sort((a, b) => b.productPrice - a.productPrice);
        setCartItems(maxToMin);
    }

    function MinToMax() {
        const maxToMin = cartItems.slice(0).sort((a, b) => a.productPrice - b.productPrice);
        setCartItems(maxToMin);
    }

    const [totalAmount, setTotalAmount] = useState();
    function getTotal() {
        const totalPrice = cartItems.reduce((totalPrice, currentProduct) => {
            return (totalPrice + currentProduct.productPrice);
        }, 0)
        setTotalAmount(totalPrice);
    }

    function deleteFromCart(i) {
        const updatedList = cartItems.filter((element, index) => {
            return (i !== index)
        })
        setCartItems(updatedList);
        getTotal();
    }

    return (
        <>
            <h1>This is Cart Page</h1>
            <h5>Sort</h5>
            <button onClick={MaxToMin}>MaxToMin</button>
            <button onClick={MinToMax}>MinToMax</button>
            <Table hover striped responsive bordered size="sm" variant="dark">
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Add To Cart</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartItems.map((element, i) => {
                            return (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{element.productName}</td>
                                    <td>{element.productPrice}</td>
                                    <td><button onClick={(e) => deleteFromCart(i)}>Delete from Cart</button></td>
                                </tr>
                            )
                        })
                    }
                    <tr>
                        <td></td>
                        <td><button onClick={getTotal}>Get Total</button></td>
                        <td>{totalAmount}</td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default Cart;
