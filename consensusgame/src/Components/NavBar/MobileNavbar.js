import React, { Component } from "react";
import { Link } from "react-router-dom";
import { twitterLogInUrl } from "../../config.json";
import "./MobileNavbar.scss";
import twitterLogIn from "../../assets/images/twitterLogIn.png";
import { NavLink } from "react-router-dom";

class MobileNavbar extends Component {
  constructor() {
    super();
    this.state = {
      MobilePages: [
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
        },
        {
          pageName: "About",
          toLink: "/about"
        }
      ]
    };
  }
  render() {
    const { MobilePages } = this.state;

    return (
      <div className="mobileNavbar">
        <ul>
          {MobilePages.map(mobilePage => (
            <li key={mobilePage.pageName} onClick={this.props.linkClick}>
              <NavLink
                className="nav-link"
                activeClassName="active"
                to={mobilePage.toLink}
              >
                {mobilePage.pageName}
              </NavLink>
            </li>
          ))}
          <li>
            <a href={twitterLogInUrl} className="nav-link">
              <span className="black">Sign up</span>
            </a>
          </li>
          <li className="last">
            <a href={twitterLogInUrl} className="nav-link">
              <span className="black">Log in</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default MobileNavbar;
