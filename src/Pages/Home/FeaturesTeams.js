import React, { Component } from 'react';
import Slider from "react-slick";
import { Card, Carousel } from 'antd';

export default class FeaturesTeams extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <div className="container">
        <h1>Teams populaires</h1>
        <Slider {...settings}>
        <div>
          <Card style={{marginRight: "50px", marginLeft:"50px"}}>
            <div>Team 1</div>
          </Card>
        </div>
        <div>
        <Card style={{marginRight: "50px", marginLeft:"50px"}}>
            <div>Team 2</div>
          </Card>
        </div>
        <div>
        <Card style={{marginRight: "50px", marginLeft:"50px"}}>
            <div>Team 3</div>
          </Card>
        </div>
        <div>
        <Card style={{marginRight: "50px", marginLeft:"50px"}}>
            <div>Team 4</div>
          </Card>
        </div>
        <div>
        <Card style={{marginRight: "50px", marginLeft:"50px"}}>
            <div>Team 5</div>
          </Card>
        </div>
        <div>
        <Card style={{marginRight: "50px", marginLeft:"50px"}}>
            <div>Team 6</div>
          </Card>
        </div>
      </Slider>
        
      </div>
    )
  }
}
