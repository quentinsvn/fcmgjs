import React, { Component } from 'react';
import HomeCarousel from './HomeCarousel';
import FeaturesTeams from './FeaturesTeams';
import './home_style.css';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <HomeCarousel/> 
        <FeaturesTeams/>
      </div>
    )
  }
}
