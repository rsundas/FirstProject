import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from "react-router-dom";
import MainPage from "./main";
import Header from "./HeaderPage";
import HomePage from "./Home";

class App extends Component {
  
  render() {
    return(<div>
      <Header />
      <MainPage /> 
    </div>);
  }
}
export default App;
