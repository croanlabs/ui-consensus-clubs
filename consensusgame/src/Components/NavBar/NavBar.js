import React, { Component } from "react";
import { twitterLogInUrl } from "../../config.json";
import "./NavBar.scss";
import { NavLink } from "react-router-dom";
import BurgerButton from "./BurgerButton";

class NavBar extends Component {
  constructor() {
    super();
  }

  render() {
    const { isLoggedIn, loginClick, logoutClick } = this.props;
    let afterLoggedIn;
    let beforeLogIn;

    if (isLoggedIn) {
      afterLoggedIn = (
        <div className="navbar responsive">
          <ul className="left">
            <li className="first">
              <span className="navbar-brand">Consensus Clubs</span>
            </li>
            <li className="icon">
              <BurgerButton click={this.props.mobileNavClickHandler} />
            </li>
            <li key="Polls">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/polls"
              >
                Polls
              </NavLink>
            </li>
            <li key="Rewards">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/rewards"
              >
                Rewards
              </NavLink>
            </li>
            <li key="Score">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/score"
              >
                Score
              </NavLink>
            </li>
            {/* About link goes to Consensus Clubs website */}
            <li>
              <a
                className="nav-link"
                href="https://www.consensusclubs.network/"
              >
                About
              </a>
            </li>
          </ul>
          <ul className="right">
            <li key="Notifications">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/notifications"
              >
                Notifications
              </NavLink>
            </li>
            <li key="Profile">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/profile"
              >
                Profile
              </NavLink>
            </li>
            <li className="last">
              <a
                // href={twitterLogInUrl}
                className="nav-link"
                onClick={logoutClick}
              >
                <span className="white">Log out</span>
              </a>
            </li>
          </ul>
        </div>
      );
    } else {
      beforeLogIn = (
        <div className="navbar responsive">
          <ul className="left">
            <li className="first">
              <span className="navbar-brand">Consensus Clubs</span>
            </li>
            <li className="icon">
              <BurgerButton click={this.props.mobileNavClickHandler} />
            </li>
            <li key="Polls">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/polls"
              >
                Polls
              </NavLink>
            </li>
            {/* About link goes to Consensus Clubs website */}
            <li>
              <a
                className="nav-link"
                href="https://www.consensusclubs.network/"
              >
                About
              </a>
            </li>
          </ul>
          <ul className="right">
            <li>
              <a href={twitterLogInUrl} className="nav-link">
                <span className="white">Sign up</span>
              </a>
            </li>
            <li className="last">
              <a
                // href={twitterLogInUrl}
                className="nav-link"
                onClick={loginClick}
              >
                <span className="white">Log in</span>
              </a>
            </li>
          </ul>
        </div>
      );
    }

    return (
      <div>
        {afterLoggedIn}
        {beforeLogIn}
      </div>
    );
  }
}

export default NavBar;

// How many notifications a user has
// totalNotificationCounters={
//     this.state.counters.filter(c => c.value > 0).length
//   }
// <span className="badge badge-pill badge-secondary">
//   {totalNotificationCounters}
// </span>
