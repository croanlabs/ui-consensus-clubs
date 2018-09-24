import React, { Component } from "react";
import { Link } from "react-router-dom";
import { twitterLogInUrl } from "../../config.json";
import homeIcon from "../../assets/icons/mobile/home-inactive-icon.png";
import notificationsIcon from "../../assets/icons/mobile/notifications-inactive-icon.png";
import rewardIcon from "../../assets/icons/mobile/rewards-inactive-icon.png";
import profilePic from "../../assets/images/profile-pic.jpg";
import "./NavBar.scss";

// Stateless functional component
const NavBar = () => {
  return (
    <div className="navbar">
      <Link className="navbar-brand" to="/">
        Consensus Clubs
      </Link>
      <ul>
        <li>
          <Link className="nav-link" to="/polls">
            <div class="icon"><img src={homeIcon} alt="Home" /></div>
            <div className="name">Home</div>
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/notifications">
            <div class="icon"><img src={notificationsIcon} alt="Home" /></div>
            <div className="name">Notifications</div>
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/rewards">
            <div class="icon"><img src={rewardIcon} alt="Home" /></div>
            <div className="name">Reward</div>
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/profile">
            <div class="profile-pic"><img src={profilePic} alt="Profile" /></div>
          </Link>
        </li>
      </ul>
      
    </div>
  );
};

export default NavBar;
