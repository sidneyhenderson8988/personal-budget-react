import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Menu from './Menu/Menu'
import Header from './Header/Header'
import HomePage from './HomePage/HomePage'
import Footer from './Footer/Footer'
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';
import ChartData from './ChartData/ChartData';
import D3jsChart from './D3jsChart/D3jsChart';

function App() {
  return (
    <Router>
      <Menu/>
      <Header/>
      <div className="mainContainer">
        <Switch>
          <Route path="/about">
            <AboutPage></AboutPage>
          </Route>
          <Route path="/login">
            <LoginPage></LoginPage>
          </Route>
          <Route path="/">
            <HomePage></HomePage>
            <ChartData></ChartData>
            <D3jsChart></D3jsChart>
          </Route>
        </Switch>
      </div>
      
      <Footer></Footer>
    </Router>
  );
}

export default App;
