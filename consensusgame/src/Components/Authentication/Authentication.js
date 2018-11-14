import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TwitterLogin from 'react-twitter-auth';
import Cookies from 'universal-cookie';
import homeIcon from '../../assets/icons/svg/home-active.svg';
import rewardIcon from '../../assets/icons/svg/rewards-inactive.svg';
import SignupPopup from '../SignupPopup/SignupPopup';
import NotificationsNavBar from '../../Containers/NotificationsNavBar';
import UserInfo from '../../Containers/UserInfo';
import '../NavBar/NavBar.scss';
import './Authentication.scss';

class Authentication extends Component {
  constructor() {
    super();
    this.handleSignupClick = this.handleSignupClick.bind(this);
    this.handleOutsideCloseSignup = this.handleOutsideCloseSignup.bind(this);

    let cookies = new Cookies();
    let user = cookies.get('user');
    if (user) {
      this.state = {
        user,
        profileMenuOpen: false,
        getStartedMenuOpen: false
      };
    } else {
      this.state = {};
    }
  }

  onSuccess = async response => {
    const token = response.headers.get('x-auth-token');
    if (token) {
      // Add cookies for token and user info
      let cookies = new Cookies();
      await cookies.set('token', token, {
        // FIXME Set httpOnly.
        //httpOnly: true,
        domain: process.env.REACT_APP_CONSENSUS_CLUBS_DOMAIN,
        path: '/'
      });

      const user = await response.json();
      cookies.set('user', JSON.stringify(user), { httpOnly: false, path: '/' });

      this.setState({ user });
    }
  };

  signout = () => {
    let cookies = new Cookies();
    cookies.remove('token');
    cookies.remove('user');
    window.location = '/';
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

  render() {
    const { user, getStartedMenuOpen } = this.state;

    let getStartedMenu;
    getStartedMenuOpen
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

    let unopinionatedMerits = this.state.unopinionatedMerits
      ? this.state.unopinionatedMerits
      : 0;

    let content = !user ? (
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
          <NotificationsNavBar signout={this.signout} />
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
          <UserInfo user={user} signout={this.signout} />
        </li>
      </React.Fragment>
    );
    return <ul className="navbar-right">{content}</ul>;
  }
}

export default Authentication;
