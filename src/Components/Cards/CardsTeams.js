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
            <div class="background" style={{backgroundImage: `url(https://s3-us-west-2.amazonaws.com/www.guilded.gg/users/R40kK0YA/profileBannerImages/c106fd10-fd42-0b7a-6bca-9a3f0fc2c230-blur.jpg)`}}></div>
        </div>
        <div class="card_content">
            <div class="team_profile">
              <img src={logo} />
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
