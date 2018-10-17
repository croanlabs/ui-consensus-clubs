import React, { Component } from "react";
import { Link } from "react-router-dom";
import TwitterLogin from "react-twitter-auth";
import Cookies from "universal-cookie";
import homeIcon from "../../assets/icons/svg/home-active.svg";
import notificationsIcon from "../../assets/icons/svg/notifications-inactive.svg";
import rewardIcon from "../../assets/icons/svg/rewards-inactive.svg";
import "../NavBar/NavBar.scss";
import "./Authentication.scss";

class Authentication extends Component {
  constructor() {
    super();
    let cookies = new Cookies();
    let user = cookies.get("user");
    if (user) {
      this.state = { user, profileMenuOpen: false };
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
    cookies;
  };

  handleProfileMenuOpen = () => {
    this.setState(prevState => {
      return { profileMenuOpen: !prevState.profileMenuOpen };
    });
  };

  render() {
    let ProfileMenu;
    this.state.profileMenuOpen
      ? (ProfileMenu = (
          <ul className="profile-menu">
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
              <Link className="nav-link" to="/">
                Sign out
              </Link>
            </li>
          </ul>
        ))
      : null;

    let userTotalMerits;
    userTotalMerits = parseInt(1500, 10).toLocaleString();

    let content = this.state.user ? (
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
            <div class="profile-pic" onClick={this.handleProfileMenuOpen}>
              <img src={this.state.user.profileImageUrl} alt="Profile" />
              {ProfileMenu}
            </div>
            <div className="user-total-merits">{userTotalMerits}</div>
          </div>
        </li>
      </React.Fragment>
    ) : (
      <li>
        <TwitterLogin
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
    );
    return <ul>{content}</ul>;
  }
}

export default Authentication;
