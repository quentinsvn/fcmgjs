import React, { Component } from 'react'
import { Input, Popover } from 'antd';
import './topnav.css';

export default class TopNav extends Component {
  render() {
    const Search = Input.Search;
    var content = new Object();
    content.home = "Accueil";
    content.scores = "Tableau des scores";
    content.teams = "Teams"
    content.events = "Evenements";
    content.news = "Articles";
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
                     <li>
                        <Popover placement="bottom" content={content.home}>
                          <span><i class="icon fas fa-home"></i></span>
                        </Popover> 
                    </li>
                      <li>
                        <Popover placement="bottom" content={content.scores}>
                          <span><i class="icon fas fa-table"></i></span>
                        </Popover>     
                      </li>
                      <li>
                        <Popover placement="bottom" content={content.events}> 
                          <span><i class="icon fas fa-users"></i></span>
                        </Popover>      
                      </li>
                      <li>
                        <Popover placement="bottom" content={content.teams}>   
                          <span><i class="icon fas fa-exclamation-triangle"></i></span>
                          </Popover>       
                      </li>
                      <li>
                       <Popover placement="bottom" content={content.news}>     
                          <span><i class="icon fas fa-newspaper"></i></span>
                       </Popover>      
                     </li>
                  </ul>
              </div>
          </header>
      </div>
    )
  }
}
