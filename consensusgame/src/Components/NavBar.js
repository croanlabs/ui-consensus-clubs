import React, { Component } from "react";
import logo from "./images/logo.JPG";
import { Link } from "react-router-dom";

// Stateless functional component
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="consensus" style={{ height: "40px" }} />
      </Link>
      Consensus Clubs
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
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
          </li>
        </ul>
      </div>
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
