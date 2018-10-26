import React, { Component } from "react";
import { Link } from "react-router-dom";
import TwitterLogin from "react-twitter-auth";
import Cookies from "universal-cookie";
import homeIcon from "../../assets/icons/svg/home-active.svg";
import notificationsIcon from "../../assets/icons/svg/notifications-inactive.svg";
import rewardIcon from "../../assets/icons/svg/rewards-inactive.svg";
import removeIcon from "../../assets/icons/mobile/remove-icon.png";
import SignupPopup from "../SignupPopup/SignupPopup";
import "../NavBar/NavBar.scss";
import "./Authentication.scss";

class Authentication extends Component {
  constructor() {
    super();
    this.handleSignupClick = this.handleSignupClick.bind(this);
    this.handleOutsideCloseSignup = this.handleOutsideCloseSignup.bind(this);
    this.handleProfileClick = this.handleProfileClick.bind(this);
    this.handleProfileOutsideClick = this.handleProfileOutsideClick.bind(this);

    let cookies = new Cookies();
    let user = {
      username: 'RMS',
      name: 'Richard Stallman',
      profileImageUrl: 'http://documentally.com/wp-content/uploads/2011/12/6466311231_985f4e2e3a_o.jpg',
    };
    cookies.set('user', user);
    if (user) {
      this.state = {
        user, profileMenuOpen: false, getStartedMenuOpen: false };
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
    alert(error);
  };

  signout = () => {
    let cookies = new Cookies();
    cookies.remove("token");
    cookies.remove("user");
    window.location = "/";
  };

  handleSignupClick() {
    this.setState(prevState => ({
      getStartedMenuOpen: !prevState.getStartedMenuOpen
    }));
  }

  handleOutsideCloseSignup(e) {
    // ignore clicks on the component itself
    if (!this.signup.contains(e.target)) {
      return;
    }
    this.handleSignupClick();
  }

  handleProfileClick() {
    if (!this.state.profileMenuOpen) {
      // attach/remove event handler
      document.addEventListener("click", this.handleProfileOutsideClick, false);
    } else {
      document.removeEventListener(
        "click",
        this.handleProfileOutsideClick,
        false
      );
    }

    this.setState(prevState => ({
      profileMenuOpen: !prevState.profileMenuOpen
    }));
  }

  handleProfileOutsideClick(e) {
    if (this.node.contains(e.target)) {
      return;
    }
    this.handleProfileClick();
  }

  render() {
    let getStartedMenu;
    this.state.getStartedMenuOpen
      ? (getStartedMenu = (
          <SignupPopup
            setRef={signup => {
              this.signup = signup;
            }}
            onFailed={this.onFailed}
            onSuccess={this.onSuccess}
            handleOutsideCloseSignup={this.handleOutsideCloseSignup}
            handleSignupClick={this.handleSignupClick}
          />
        ))
      : null;

    let ProfileMenu;
    this.state.profileMenuOpen
      ? (ProfileMenu = (
          <ul
            className="profile-menu"
            ref={node => {
              this.node = node;
            }}
          >
            <img
              src={removeIcon}
              className="cancel-button"
              alt="remove-icon"
              onClick={this.handleProfileClick}
            />
            <li>
              <Link
                className="nav-link"
                to="/profile"
                onClick={this.handleProfileClick}
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to="/"
                onClick={this.handleProfileClick}
              >
                Settings
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to="/"
                onClick={this.handleProfileClick}
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to="/"
                onClick={this.handleProfileClick}
              >
                Policy
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to="/"
                onClick={this.handleProfileClick}
              >
                Terms {"&"} Conditions
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to="/"
                onClick={this.signout.bind(this)}
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
            <div class="get-started" onClick={this.handleSignupClick}>
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
            <div class="profile-pic">
              <img
                onClick={this.handleProfileClick}
                src={this.state.user.profileImageUrl}
                alt="Profile"
              />
              {ProfileMenu}
            </div>
            <div className="user-total-merits">{userTotalMerits}</div>
          </div>
        </li>
      </React.Fragment>
    );
    return <ul className="navbar-right">{content}</ul>;
  }
}

export default Authentication;
