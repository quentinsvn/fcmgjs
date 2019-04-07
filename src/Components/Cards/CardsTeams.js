import React, { Component } from 'react'
import {Button} from 'antd';
import './assets/css/style.css'; 
import logo from './assets/img/profil.jpg';

export default class CardsTeams extends Component {
  render() {
    return (
      <div>
        <div class="card_team">
        <div class="card_back">
            <div class="background" style={{backgroundImage: `url(https://cdn2.unrealengine.com/Fortnite%2FBattle-pass%2Fseason-8%2FBR08_Web_BPLanding_Hero-3840x2160-654d400e12d58c3a97d6e75dc560df6ac46d3ea3.jpg)`}}></div>
        </div>
        <div class="card_content">
            <div class="team_profile">
              <img src={logo} alt=""/>
            </div>
            <div class="team_title">
              <h5>Nom de la team</h5>
            </div>
            <div class="team_rank">
                <div class="name_rank">
                   <span>Rare</span>
                </div>
            </div>
            <div class="date_create">
              <span>23 membres</span>
            </div>
            <div class="teamdesc">
                <p>Description brève de la team...</p>
            </div>
            <div class="teamstats">
              <i class="fas fa-trophy"></i> 1200 points
            </div>
            <div class="teamjoin">
                <Button style={{backgroundColor: '#f1c40f', border: "none"}} type="primary">Rejoindre</Button>
            </div>
        </div>
    </div>
      </div>
    )
  }
}
