import React, { Component } from 'react';
import logo from '../logo.svg';
import './css/App.css';
import './css/index.css'
import Inicio from '../app//App.js';
import Navigation from './components/Navigation';
import ProPlayers from './components/ProPlayers'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const headings = ['Nick ', 'accountID', 'steamid','avatar'];

const propsd = {
headings,
title: 'Proplayers'
};

class App extends Component {
  render() {
    return (
      <div key="main" className="App">
        <Navigation/>
        <Router basename="/">
          <Route path="/index" Component={Inicio}/>
          <Route path="/ProPlayers" render={(props) => <ProPlayers {...propsd} /> } />	
        </Router>
      </div>
    );
  }
}

export default App;
