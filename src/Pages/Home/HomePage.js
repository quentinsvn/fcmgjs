import React, { Component } from 'react';
import HomeCarousel from './HomeCarousel';
import FeaturesTeams from './FeaturesTeams';
import LastsEvents from './LastsEvents';
import './home_style.css';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <HomeCarousel/> 
        <FeaturesTeams/>
        <LastsEvents />
      </div>
    )
  }
}
