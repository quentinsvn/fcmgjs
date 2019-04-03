import React, { Component } from 'react'
import { Input } from 'antd';
import './topnav.css';

export default class TopNav extends Component {
  render() {
    const Search = Input.Search;
    return (
      <div className="TopNav">
         <header className="topnav_content">
              <div className="menu">
                  <ul className="icons_menu"> 
                      <li><Search 
                             placeholder="Rechercher..."
                             onSearch={value => console.log(value)}
                             style={{ width: 300, }}
                        /></li>
                      <li><i class="fas fa-home"></i></li>
                      <li><i class="fas fa-table"></i></li>
                      <li><i class="fas fa-users"></i></li>
                      <li><i class="fas fa-exclamation-triangle"></i></li>
                      <li><i class="fas fa-newspaper"></i></li>
                  </ul>
              </div>
          </header>
      </div>
    )
  }
}
