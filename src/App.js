import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import Introduction from './components/introduction'
import Cloud from './components/cloud'
import About from './components/about'
import Portfolio from './components/portfolio'
import Contact from './components/contact'
import Top from './components/top'

class App extends Component{
    render(){
        return(
            <div id ="colorlib-page">
                <div id="container-wrap">
                <Navbar></Navbar>
                    <div id="colorlib-main">
            		      <Introduction></Introduction>
                  		  <Cloud></Cloud>
              		      <About></About>
              		      <Portfolio></Portfolio>
              		      <Contact></Contact>
              		      <Top></Top>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
