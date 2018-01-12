import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from "react-router-dom";
import RegistrationForm from "./RegForm";
import LinkPage from "./linkPage";
import HomePage from "./Home";

class MainPage extends Component{
    render(){
        return(
            
                <Switch>
                    <Route exact path='/home' component = {HomePage} />
                    <Route path='/registration' component = {RegistrationForm}/>
                    <Route path='/details'  component = {LinkPage} />  
                </Switch>
            
        );

    }
}
export default MainPage;

