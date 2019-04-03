import React, { Component } from 'react';
import logo from './logo.svg';
import { DatePicker, message } from "antd";
import "antd/dist/antd.css";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <header className="topnav">
              <div className="menu">
                  <ul>
                      <li>Accueil</li>
                      <li>Tableau des scores</li>
                      <li>Teams</li>
                      <li>Evenements</li>
                      <li>Articles</li>
                  </ul>
              </div>
          </header>
      </div>
    );
  }
} 

export default App;
