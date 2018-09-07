import React, { Component } from "react";
import { Link } from "react-router-dom";
import { twitterLogInUrl } from "../../config.json";
import "./NavBar.css";

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
    <div className="navbar responsive">
      <ul className="left">
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
      <ul className="right">
        <li>
          <a href={twitterLogInUrl} className="nav-link">
            <span className="white">Sign up</span>
          </a>
        </li>
        <li className="last">
          <a href={twitterLogInUrl} className="nav-link">
            <span className="white">Log in</span>
          </a>
        </li>
        <li className="icon">
          <a href="#" className="burger">&#9776;</a>
        </li>
      </ul>
      
    </div>
  );
};

export default NavBar;
