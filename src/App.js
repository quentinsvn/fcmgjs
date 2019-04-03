import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TopNav from './Components/TopNav/TopNav';
import HomePage from './Pages/Home/HomePage'; 
import LeaderBoardPage from './Pages/LeaderBoard/LeaderBoardPage';
import TeamsPage from './Pages/Teams/TeamsPage';
import NewsPage from './Pages/News/NewsPage';
import EventsPage from './Pages/Events/EventsPage';
import Error from './Pages/Errors/ErrorPage';
import "antd/dist/antd.css";
import './App.css';



class App extends Component {
  render() {
    return (
          <BrowserRouter>
            <TopNav/>
            <div className="center">
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/leaderboard" component={LeaderBoardPage} />
              <Route path="/teams" component={TeamsPage} />
              <Route path="/events" component={EventsPage} />
              <Route path="/news" component={NewsPage} />
              <Route component={Error} />
            </Switch>
            </div>
          </BrowserRouter>  
    );
  }
} 

export default App;
