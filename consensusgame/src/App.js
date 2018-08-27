import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Polls from "./Components/Polls";
import NavBar from "./Components/NavBar";
import Notifications from "./Components/Notifications";
import Rewards from "./Components/Rewards";
import Score from "./Components/Score";
import Profile from "./Components/Profile";
import Home from "./Components/Home";

class App extends Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <NavBar />
        </div>

        <main className=".mx-auto px-{2} ">
          <Switch>
            <Route path="/polls/:id" render={props => <Polls {...props} />} />
            <Route path="/polls" render={props => <Polls {...props} />} />
            <Route path="/notifications" component={Notifications} />
            <Route path="/rewards" component={Rewards} />
            <Route path="/score" component={Score} />
            <Route path="/profile" component={Profile} />
            <Route path="/" component={Home} />
            <Route component={() => <p>This page does not exist!</p>} />
          </Switch>
        </main>
      </div>
    );
  }
}
// }

export default App;

{
  /* <Polls key={polls.id} polls={polls} /> */
}
