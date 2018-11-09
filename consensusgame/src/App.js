import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Polls from "./Pages/Polls";
import NavBar from "./Components/NavBar/NavBar";
import Notifications from "./Pages/Notifications";
import NotificationList from "./Containers/Notifications";
import Rewards from "./Pages/Rewards";
import Score from "./Pages/Score";
import Profile from "./Pages/Profile";
import Dotenv from "dotenv";

Dotenv.config();

const App = () => {
  return (
    <div>
      <div className="right-half" />
      <header>
        <nav className="wrapper">
          <NavBar />
        </nav>
      </header>
      <main className="wrapper">
        <Switch>
          <Route path="/polls/:id" render={props => <Polls {...props} />} />
          <Route path="/polls" render={props => <Polls {...props} />} />
          <Route path="/notifications" component={NotificationList} />
          <Route path="/rewards" component={Rewards} />
          <Route path="/score" component={Score} />
          <Route path="/profile" component={Profile} />
          <Route path="/" component={Polls} />
          <Route component={() => <p>This page does not exist!</p>} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
