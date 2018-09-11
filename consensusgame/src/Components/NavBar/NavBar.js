import React, { Component } from "react";
import { Link } from "react-router-dom";
import { twitterLogInUrl } from "../../config.json";
import "./NavBar.scss";
import twitterLogIn from "../../assets/images/twitterLogIn.png";
import { NavLink } from "react-router-dom";
import BurgerButton from "./BurgerButton";

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      Pages: [
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
    const { Pages } = this.state;

    return (
      <div className="navbar responsive">
        <ul className="left">
          <li className="first">
            <span className="navbar-brand">Consensus Clubs</span>
          </li>
          <li className="icon">
            <BurgerButton click={this.props.mobileNavClickHandler} />
          </li>
          {Pages.map(page => (
            <li key={page.pageName}>
              <NavLink
                className="nav-link"
                activeClassName="active"
                to={page.toLink}
              >
                {page.pageName}
              </NavLink>
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
        </ul>
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
