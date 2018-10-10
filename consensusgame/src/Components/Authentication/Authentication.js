import React, { Component } from "react";
import { Link } from "react-router-dom";
import TwitterLogin from "react-twitter-auth";
import Cookies from "universal-cookie";
import "../NavBar/NavBar.scss";
import "./Authentication.scss";

class Authentication extends Component {
  constructor() {
    super();
    let cookies = new Cookies();
    let user = cookies.get("user");
    if (user) {
      this.state = { user, profileMenuOpen: false, amountOfMerits: 1500 };
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
    userTotalMerits = parseInt(
      this.state.amountOfMerits ? this.state.amountOfMerits : 0,
      10
    ).toLocaleString();

    let content = this.state.user ? (
      <React.Fragment>
        <div class="profile-pic" onClick={this.handleProfileMenuOpen}>
          <img src={this.state.user.profileImageUrl} alt="Profile" />
        </div>
        <div className="user-total-merits">{userTotalMerits}</div>
        {ProfileMenu}
      </React.Fragment>
    ) : (
      <TwitterLogin
        loginUrl={
          process.env.REACT_APP_API_URL + process.env.REACT_APP_API_LOGIN_ROUTE
        }
        onFailure={this.onFailed}
        onSuccess={this.onSuccess}
        requestTokenUrl={
          process.env.REACT_APP_API_URL +
          process.env.REACT_APP_API_REQUEST_TOKEN_ROUTE
        }
        text="Sign in"
      />
    );
    return <div className="auth-container">{content}</div>;
  }
}

export default Authentication;
