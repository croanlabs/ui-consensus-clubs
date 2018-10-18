import React, { Component } from "react";
import { Link } from "react-router-dom";
import TwitterLogin from "react-twitter-auth";
import Cookies from "universal-cookie";
import homeIcon from "../../assets/icons/svg/home-active.svg";
import notificationsIcon from "../../assets/icons/svg/notifications-inactive.svg";
import rewardIcon from "../../assets/icons/svg/rewards-inactive.svg";
import removeIcon from "../../assets/icons/mobile/remove-icon.png";
import "../NavBar/NavBar.scss";
import "./Authentication.scss";

class Authentication extends Component {
  constructor() {
    super();
    this.handleGetStartedClick = this.handleGetStartedClick.bind(this);
    this.handleProfileClick = this.handleProfileClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    let cookies = new Cookies();
    let user = cookies.get("user");
    if (user) {
      this.state = { user, profileMenuOpen: false, getStartedMenuOpen: false };
    } else {
      this.state = {};
    }
  }

  onSuccess = async response => {
    const token = response.headers.get("x-auth-token");
    if (token) {
      // Add cookies for token and user info
      let cookies = new Cookies();
      cookies.set("token", token, {
        // FIXME Set httpOnly.
        //httpOnly: true,
        domain: process.env.REACT_APP_CONSENSUS_CLUBS_DOMAIN,
        path: "/"
      });

      const user = await response.json();
      cookies.set("user", JSON.stringify(user), { httpOnly: false, path: "/" });

      this.setState({ user });
    }
  };

  onFailed = error => {
    // TODO
  };

  logout = () => {
    let cookies = new Cookies();
    cookies.remove("token");
    cookies.remove("user");
    window.location = "/";
  };

  handleGetStartedClick() {
    if (!this.state.getStartedMenuOpen) {
      // attach/remove event handler
      document.addEventListener("click", this.handleOutsideClick, false);
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false);
    }

    this.setState(prevState => ({
      getStartedMenuOpen: !prevState.getStartedMenuOpen
    }));
  }

  handleProfileClick() {
    if (!this.state.profileMenuOpen) {
      // attach/remove event handler
      document.addEventListener("click", this.handleOutsideClick, false);
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false);
    }

    this.setState(prevState => ({
      profileMenuOpen: !prevState.profileMenuOpen
    }));
  }

  handleOutsideClick(e) {
    // ignore clicks on the component itself
    if (this.node.contains(e.target)) {
      return;
    }

    this.handleGetStartedClick();
    this.handleProfileClick();
  }

  render() {
    let getStartedMenu;
    this.state.getStartedMenuOpen
      ? (getStartedMenu = (
          <ul className="get-started-menu">
            <img className="cancel-button" src={removeIcon} alt="remove-icon" />
            <li>
              <h2>Join Consensus Clubs!</h2>
              <p>
                Create an account to deliver deep community engagement using
                crypto incentives. Scaling community governance using market
                mechanisms.
              </p>
            </li>
            <li>
              <TwitterLogin
                className="twitter-signup"
                loginUrl={
                  process.env.REACT_APP_API_URL +
                  process.env.REACT_APP_API_LOGIN_ROUTE
                }
                onFailure={this.onFailed}
                onSuccess={this.onSuccess}
                requestTokenUrl={
                  process.env.REACT_APP_API_URL +
                  process.env.REACT_APP_API_REQUEST_TOKEN_ROUTE
                }
                text="Sign up with Twitter"
              />
            </li>
          </ul>
        ))
      : null;

    let ProfileMenu;
    this.state.profileMenuOpen
      ? (ProfileMenu = (
          <ul className="profile-menu">
            <img src={removeIcon} className="cancel-button" alt="remove-icon" />
            <li>
              <Link className="nav-link" to="/profile">
                Leader board
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/">
                Settings
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/">
                FAQ
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/">
                Policy
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/">
                Terms {"&"} Conditions
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to="/"
                onClick={this.logout.bind(this)}
              >
                Sign out
              </Link>
            </li>
          </ul>
        ))
      : null;

    let userTotalMerits;
    userTotalMerits = parseInt(1500, 10).toLocaleString();

    let content = !this.state.user ? (
      <React.Fragment>
        <li>
          <TwitterLogin
            className="twitter-signin"
            loginUrl={
              process.env.REACT_APP_API_URL +
              process.env.REACT_APP_API_LOGIN_ROUTE
            }
            onFailure={this.onFailed}
            onSuccess={this.onSuccess}
            requestTokenUrl={
              process.env.REACT_APP_API_URL +
              process.env.REACT_APP_API_REQUEST_TOKEN_ROUTE
            }
          />
        </li>
        <li>
          <div className="unauth-container">
            <div class="get-started" onClick={this.handleGetStartedClick}>
              <span>Get started</span>
              {getStartedMenu}
            </div>
          </div>
        </li>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <li>
          <Link className="nav-link" to="/polls">
            <div className="icon">
              <img src={homeIcon} alt="Home" />
            </div>
            <div className="name">Home</div>
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/notifications">
            <div className="icon">
              <img src={notificationsIcon} alt="Home" />
            </div>
            <div className="name">Notifications</div>
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/rewards">
            <div className="icon">
              <img src={rewardIcon} alt="Home" />
            </div>
            <div className="name">Reward</div>
          </Link>
        </li>
        <li>
          <div className="auth-container">
            <div class="profile-pic" onClick={this.handleProfileClick}>
              <img src={this.state.user.profileImageUrl} alt="Profile" />
              {ProfileMenu}
            </div>
            <div className="user-total-merits">{userTotalMerits}</div>
          </div>
        </li>
      </React.Fragment>
    );
    return (
      <ul
        className="navbar-right"
        ref={node => {
          this.node = node;
        }}
      >
        {content}
      </ul>
    );
  }
}

export default Authentication;
