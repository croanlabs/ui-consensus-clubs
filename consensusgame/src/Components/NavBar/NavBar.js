import React, { Component } from "react";
import { Link } from "react-router-dom";
import menuLogo from "../../assets/images/logo.svg";
import Authentication from "../Authentication/Authentication.js";
import "./NavBar.scss";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <Link className="navbar-brand" to="/">
          <span>
            <img src={menuLogo} alt="Consensus Clubs" />
          </span>
        </Link>
        <Authentication />
      </div>
    );
  }
}

export default NavBar;
