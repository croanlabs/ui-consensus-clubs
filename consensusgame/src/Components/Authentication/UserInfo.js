import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import removeIcon from '../../assets/icons/mobile/remove-icon.png';
import './UserInfo.scss';

class UserInfo extends Component {
  constructor() {
    super();
    this.state = {
      profileMenuOpen: false
    };
    this.handleProfileClick = this.handleProfileClick.bind(this);
    this.handleProfileOutsideClick = this.handleProfileOutsideClick.bind(this);
  }

  async componentDidMount() {
    const { data: user } = await axios({
      method: 'get',
      baseURL: process.env.REACT_APP_API_URL,
      url: process.env.REACT_APP_API_USER,
      withCredentials: true
    }).catch(err => {
      if (err.response && err.response.status == 401) {
        this.signout();
      }
    });
    this.props.onUnopinionatedMeritsUpdated(user.unopinionatedMerits);
    this.setState({ user });
  }

  handleProfileClick() {
    if (!this.state.profileMenuOpen) {
      // attach/remove event handler
      document.addEventListener('click', this.handleProfileOutsideClick, false);
    } else {
      document.removeEventListener(
        'click',
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
    const { profileMenuOpen } = this.state;
    const { user } = this.props;
    let ProfileMenu;
    profileMenuOpen
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
              <a
                href="https://www.consensusclubs.network/"
                className="nav-link"
                onClick={this.handleProfileClick}
              >
                About
              </a>
            </li>
            <li>
              <Link
                className="nav-link"
                to="/"
                onClick={this.props.signout.bind(this)}
              >
                Sign out
              </Link>
            </li>
          </ul>
        ))
      : null;

    let userTotalMerits = parseInt(
      this.props.unopinionatedMerits ? this.props.unopinionatedMerits : 0,
      10
    ).toLocaleString();

    return (
      <div className="auth-container">
        <div class="profile-pic">
          <img
            onClick={this.handleProfileClick}
            src={user.profileImageUrl}
            alt="Profile"
          />
          {ProfileMenu}
        </div>
        <div className="user-total-merits">{userTotalMerits}</div>
      </div>
    );
  }
}

export default UserInfo;
