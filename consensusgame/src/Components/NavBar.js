import React, { Component } from "react";
import logo from "./images/logo.JPG";

// Stateless functional component
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="#">
        <img src={logo} alt="consensus" style={{ height: "40px" }} />
      </a>
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
            <a className="nav-link" href="#" style={{ color: "blue" }}>
              Polls <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Notifications
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Rewards
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Profile
            </a>
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
