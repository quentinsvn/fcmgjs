import React, { Component } from 'react';
import './leaderboard_style.css';
import { Input } from 'antd';
import TableScores from './TableScores';

export default class LeaderBoardPage extends Component {
  render() {
    const Search = Input.Search;
    return (
      <div>
        <section className="search_player">
            <div className="title">
                <h1>Tableau des scores</h1>
            </div>
            <div className="desc">
                <p>Rechercher et consulter votre score fait durant les sessions de mini-jeux du serveur</p>
            </div>
            <div className="searchbar_player">
            <Search
              placeholder="Rechercher un utilisateur..."
            />
            </div>
        </section>
        <TableScores/>
      </div>
    )
  }
}