import React, { Component } from "react";
import { Link } from "react-router-dom";
import { twitterLogInUrl } from "../../config.json";
import "./NavBar.css";
import twitterLogIn from "../../assets/images/twitterLogIn.png";

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
      <div className="navbar-content">
        <div className="navbar-left">          
          <ul className="navbar-links">
            <li className="first">
              <Link className="navbar-brand" to="/">
                Consensus Clubs
              </Link>
            </li>
          {Pages.map(page => (
            <li key={page.pageName}>
              <Link className="nav-link" to={page.toLink}>
                {page.pageName}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <ul className="navbar-links">
        <li>
          <a href={twitterLogInUrl} className="nav-link">
            <span style={{ color: "white" }}>Sign up</span>
          </a>
        </li>
        <li className="last">
          <a href={twitterLogInUrl} className="nav-link">
            <span style={{ color: "white" }}>Log in</span>
          </a>
        </li>
      </ul>
      {/* <a href={twitterLogInUrl} className="navbar-form pull-right">
        <img src={twitterLogIn} alt="twitterLogIn" style={{ height: "30px" }} />
      </a> */}
    </div>
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
