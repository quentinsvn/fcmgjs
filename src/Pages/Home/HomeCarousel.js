import React, { Component } from 'react';
import { Carousel } from 'antd';

export default class HomeCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 11000,
    };
    return (
      <div>  
        <Carousel ref={slider => (this.slider = slider)} {...settings}>
            <div><h3>Image 1</h3></div>
            <div><h3>Image 2</h3></div>
            <div><h3>Image 3</h3></div>
            <div><h3>Image 4</h3></div>
        </Carousel>
      </div>
    )
  }
}
