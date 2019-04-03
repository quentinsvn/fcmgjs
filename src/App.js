import React, { Component } from 'react';
import logo from './logo.svg';
import { DatePicker, message } from "antd";
import TopNav from './Components/TopNav/TopNav';
import "antd/dist/antd.css";
import './App.css';

class App extends Component {
  render() {
    return (
      <div> 
        <TopNav/>
      </div>
    );
  }
} 

export default App;
