import React, { Component } from 'react'
import { Input, Popover } from 'antd';
import { NavLink } from "react-router-dom";
import './topnav.css';

export default class TopNav extends Component {
  render() {
    const Search = Input.Search;
    const content = new Object({
      home: "Accueil",
      scores: "Tableau des scores",
      teams: "Teams",
      events: "Événements",
      news: "Articles"
    });
     
    return (
      <div className="TopNav">
         <header className="topnav_content">
              <div className="menu">
                  <ul className="icons_menu">  
                      <li><Search
                             className="searchbar"
                             placeholder="Rechercher un utilisateur, team..."
                             onSearch={value => console.log(value)}
                        /></li>   
                     <li>
                        <Popover placement="bottom" content={content.home}>
                          <NavLink to="/"><span><i class="icon fas fa-home"></i></span></NavLink>
                        </Popover> 
                    </li>
                      <li>
                        <Popover placement="bottom" content={content.scores}>
                          <NavLink to="/leaderboard"><span><i class="icon fas fa-table"></i></span></NavLink>
                        </Popover>     
                      </li>
                      <li>
                        <Popover placement="bottom" content={content.teams}> 
                          <NavLink to="/teams"><span><i class="icon fas fa-users"></i></span></NavLink>
                        </Popover>      
                      </li>
                      <li>
                        <Popover placement="bottom" content={content.events}>   
                          <NavLink to="/events"><span><i class="icon fas fa-exclamation-triangle"></i></span></NavLink>
                          </Popover>       
                      </li>
                      <li>
                       <Popover placement="bottom" content={content.news}>     
                          <NavLink to="/news"><span><i class="icon fas fa-newspaper"></i></span></NavLink>
                       </Popover>      
                     </li>
                  </ul>
              </div>
          </header>
      </div>
    )
  }
}
