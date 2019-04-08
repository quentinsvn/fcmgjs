import React, { Component } from 'react'
import { Card, Button } from 'antd';
import Slider from "react-slick";

export default class LastsEvents extends Component {
  render() {
      var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        centerMode: false
      }
    return (
      <div className="container events">
        <h1>Derniers événements</h1>
        <Slider {...settings}>
            <div>
                <Card title="Moving Zone" bordered={false}>
                    <ul className="events_infos">
                        <li><i class="far fa-calendar-alt"></i>8 Avril 2019</li>
                        <li><i class="far fa-clock"></i>19h</li>
                        <li><i class="fas fa-users"></i>16/16 Participants</li>
                    </ul>
                    <div className="button_join">
                        <Button type="primary">Participer</Button>
                    </div>
                </Card>
            </div>
            <div>
            <Card title="B Scrim" bordered={false}>
                    <ul className="events_infos">
                        <li><i class="far fa-calendar-alt"></i>10 Avril 2019</li>
                        <li><i class="far fa-clock"></i>17h</li>
                        <li><i class="fas fa-users"></i>0/16 Participants</li>
                    </ul>
                    <div className="button_join">
                        <Button type="primary">Participer</Button>
                    </div>
                </Card>
            </div>
            <div>
                <Card title="Moving Zone" bordered={false}>
                    <ul className="events_infos">
                        <li><i class="far fa-calendar-alt"></i>10 Avril 2019</li>
                        <li><i class="far fa-clock"></i>21h30</li>
                        <li><i class="fas fa-users"></i>0/16 Participants</li>
                    </ul>
                    <div className="button_join">
                        <Button type="primary">Participer</Button>
                    </div>
                </Card>
            </div>
            <div>
                <Card title="Moving Zone" bordered={false}>
                    <ul className="events_infos">
                        <li><i class="far fa-calendar-alt"></i>11 Avril 2019</li>
                        <li><i class="far fa-clock"></i>21h00</li>
                        <li><i class="fas fa-users"></i>0/16 Participants</li>
                    </ul>
                    <div className="button_join">
                        <Button type="primary">Participer</Button>
                    </div>
                </Card>
            </div>
            <div>
            <Card title="Build Fight" bordered={false}>
                    <ul className="events_infos">
                        <li><i class="far fa-calendar-alt"></i>12 Avril 2019</li>
                        <li><i class="far fa-clock"></i>17h00</li>
                        <li><i class="fas fa-users"></i>0/16 Participants</li>
                    </ul>
                    <div className="button_join">
                        <Button type="primary">Participer</Button>
                    </div>
                </Card>
            </div>
            <div>
            <Card title="B Scrim" bordered={false}>
                    <ul className="events_infos">
                        <li><i class="far fa-calendar-alt"></i>12 Avril 2019</li>
                        <li><i class="far fa-clock"></i>21h00</li>
                        <li><i class="fas fa-users"></i>0/16 Participants</li>
                    </ul>
                    <div className="button_join">
                        <Button type="primary">Participer</Button>
                    </div>
                </Card>
            </div>
        </Slider>
      </div>
    )
  }
}
