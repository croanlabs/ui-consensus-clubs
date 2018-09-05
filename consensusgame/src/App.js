import React, { Component } from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Polls from "./Pages/Polls";
import NavBar from "./Components/NavBar/NavBar";
import Notifications from "./Pages/Notifications";
import Rewards from "./Pages/Rewards";
import Score from "./Pages/Score";
import Profile from "./Pages/Profile";
import Trends from "./Pages/Trends";
import Home from "./Pages/Home";

class App extends Component {
  render() {
    return (
      <div>
        
        <div className="left-half"></div>
        <div className="right-half"></div>
        <div className="wrapper">
          <nav>
            <NavBar />
          </nav>
          <main>
            <Switch>
              <Route path="/polls/:id" render={props => <Polls {...props} />} />
              <Route path="/polls" render={props => <Polls {...props} />} />
              <Route path="/notifications" component={Notifications} />
              <Route path="/rewards" component={Rewards} />
              <Route path="/score" component={Score} />
              <Route path="/profile" component={Profile} />
              <Route path="/trends" component={Trends} />
              <Route path="/" component={Home} />
              <Route component={() => <p>This page does not exist!</p>} />
            </Switch>
          </main>
        </div>

      </div>
    );
  }
}
// }

export default App;

{
  /* <Polls key={polls.id} polls={polls} /> */
}
