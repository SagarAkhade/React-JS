// Class Component ->>
//- Class components are used very less
// - For using class Component first import react 
// Syntax : import React,{Component} from 'react'
//- All other things are similar as function components
//- We can consume this class component in other file as HTML tag like <NameOfFile />
/*
Syntax :
import React,{Component} from "react";
class NameOfFile extends Component{
    render(){
        return (
            <HTML codes> 
        ) 
    } 
} 
*/

import React,{Component} from "react";
class User extends Component {
    render(){
        return (
            <h1> Hello from User </h1>
        )
    }
}

export default User;
