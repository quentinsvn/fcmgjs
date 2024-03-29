import React, { Component } from 'react';
import Slider from "react-slick";
import CardsTeam from '../../Components/Cards/CardsTeams';

export default class FeaturesTeams extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      centerMode: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="container teamsv">
        <h1>Teams populaires</h1>
        <Slider {...settings}>
        <div>
          <CardsTeam />
        </div>
        <div>
          <CardsTeam />
        </div>
        <div>
          <CardsTeam />
        </div>
        <div>
          <CardsTeam />
        </div>
        <div>
          <CardsTeam />
        </div>
        <div>
          <CardsTeam />
        </div>
      </Slider>
      </div>
    )
  }
}
