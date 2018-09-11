import React, { Component } from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Polls from "./Pages/Polls";
import NavBar from "./Components/NavBar/NavBar";
import MobileNavbar from "./Components/NavBar/MobileNavbar";
import Notifications from "./Pages/Notifications";
import Rewards from "./Pages/Rewards";
import Score from "./Pages/Score";
import Profile from "./Pages/Profile";
import About from "./Pages/About";

class App extends Component {
  constructor() {
    super();
    this.state = {
      mobileNavbarShow: false
    };
  }

  mobileNavbarClickHandler = () => {
    this.setState(prevState => {
      return { mobileNavbarShow: !prevState.mobileNavbarShow };
    });
  };

  navbarLinkClickHandler = () => {
    this.setState({ mobileNavbarShow: false });
  };

  render() {
    let mobileNavbar;
    if (this.state.mobileNavbarShow) {
      mobileNavbar = <MobileNavbar linkClick={this.navbarLinkClickHandler} />;
    }
    return (
      <div>
        <div className="left-half" />
        <div className="right-half" />
        <div className="wrapper">
          <nav>
            <NavBar mobileNavClickHandler={this.mobileNavbarClickHandler} />
            {mobileNavbar}
          </nav>
          <main>
            <Switch>
              <Route path="/polls/:id" render={props => <Polls {...props} />} />
              <Route path="/polls" render={props => <Polls {...props} />} />
              <Route path="/notifications" component={Notifications} />
              <Route path="/rewards" component={Rewards} />
              <Route path="/score" component={Score} />
              <Route path="/profile" component={Profile} />
              <Route path="/about" component={About} />
              <Route component={() => <p>This page does not exist!</p>} />
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
