import React, { Component } from "react";
import logo from "./images/logo.JPG";
import trends from "./Icons/Profile/Trends.png";
import { Link } from "react-router-dom";
import { twitterLogInUrl } from "../config.json";
import twitterLogIn from "./images/twitterLogIn.png";

// Stateless functional component
const NavBar = () => {
  const Pages = [
    {
      pageName: "Polls",
      toLink: "/polls"
    },
    {
      pageName: "Notifications",
      toLink: "/notifications"
    },
    {
      pageName: "Rewards",
      toLink: "/rewards"
    },
    {
      pageName: "Score",
      toLink: "/score"
    },
    {
      pageName: "Profile",
      toLink: "/profile"
    }
  ];

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ width: "100%" }}
    >
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="consensus" style={{ height: "40px" }} />
      </Link>
      <p style={{ margin: "0 20px 0 0" }}>Consensus Clubs</p>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {Pages.map(page => (
            <li key={page.pageName} className="nav-bar">
              <Link className="nav-link" to={page.toLink}>
                {page.pageName}
              </Link>
            </li>
          ))}
          {/* <li className="nav-item active">
            <Link className="nav-link" to="/polls" style={{ color: "blue" }}>
              Polls <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/notifications">
              Notifications
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/rewards">
              Rewards
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/score">
              Score
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">
              Profile
            </Link>
          </li> */}
        </ul>
        <ul className="nav navbar-nav navbar-right float-right">
          <li className="nav-item">
            <a href={twitterLogInUrl} className="nav-link">
              <span style={{ color: "white" }}>Sign up</span>
            </a>
          </li>
          <li className="nav-item">
            <a href={twitterLogInUrl} className="nav-link">
              <span style={{ color: "white" }}>Log in</span>
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/trends">
              <img
                src={trends}
                alt="consensus"
                style={{ height: "20px", margin: "0  5px 0 10px" }}
              />
              <span style={{ color: "white" }}>Trends</span>
            </Link>
          </li>
        </ul>
      </div>
      {/* <a href={twitterLogInUrl} className="navbar-form pull-right">
        <img src={twitterLogIn} alt="twitterLogIn" style={{ height: "30px" }} />
      </a> */}
    </nav>
  );
};

export default NavBar;

// How many notifications a user has
// totalNotificationCounters={
//     this.state.counters.filter(c => c.value > 0).length
//   }

// <span className="badge badge-pill badge-secondary">
//   {totalNotificationCounters}
// </span>
// style={{ margin: "0 10px 0 0 " }}
