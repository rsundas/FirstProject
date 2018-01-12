import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from "react-router-dom";

class Header extends Component{
    render(){
        return(
            <div>
            
        <div>
        <header className="App-header App">
            <img src={logo} className="App-logo" alt="logo" />
          <div className = "LinkName">
          <ul> 
            <li><Link to = '/Home'> Home </Link></li>
            
            <li><Link to ='/Registration'>Registration Form </Link></li>
            
            <li><Link to ='/Details'> Details Form </Link></li>
            </ul>
            </div>
            </header>
          
            
        </div>
        </div>);
    }
}
export default Header;