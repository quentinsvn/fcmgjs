import React, { Component } from 'react';
import { Carousel } from 'antd';

export default class HomeCarousel extends Component {
  render() {
    return (
      <div>  
        <Carousel autoplay>
            <div><h3>Image 1</h3></div>
            <div><h3>Image 2</h3></div>
            <div><h3>Image 3</h3></div>
            <div><h3>Image 4</h3></div>
        </Carousel>
      </div>
    )
  }
}
