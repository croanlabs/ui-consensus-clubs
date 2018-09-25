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
import AfterStaked from "./Pages/AfterStaked";
import AddCandidate from "./Pages/AddCandidate";
import AddCandidateForm from "./Pages/AddCandidateForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      mobileNavbarShow: false,
      isLoggedInOr: true
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

  handleLoginClick = () => {
    this.setState({ isLoggedInOr: true });
    console.log(this.state.isLoggedInOr);
  };

  handleLogoutClick = () => {
    this.setState({ isLoggedInOr: false });
    console.log(this.state.isLoggedInOr);
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
            <NavBar
              mobileNavClickHandler={this.mobileNavbarClickHandler}
              isLoggedIn={this.state.isLoggedInOr}
              loginClick={this.handleLoginClick}
              logoutClick={this.handleLogoutClick}
            />
            {mobileNavbar}
          </nav>
          <main>
            <Switch>
              {/* <Route
                path="/polls/:id"
                render={props => (
                  <Polls {...props} isLoggedIn={this.state.isLoggedInOr} />
                )}
              /> */}
              <Route
                path="/polls"
                render={() => (
                  <Polls {...this.props} isLoggedIn={this.isLoggedInOr} />
                )}
              />
              <Route path="/notifications" component={Notifications} />
              <Route path="/rewards" component={Rewards} />
              <Route path="/score" component={Score} />
              <Route path="/profile" component={Profile} />
              <Route path="/addcandidateform" component={AddCandidateForm} />
              <Route path="/afterstaked" component={AfterStaked} />
              <Route path="/" component={Polls} />
              <Route component={() => <p>This page does not exist!</p>} />
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
