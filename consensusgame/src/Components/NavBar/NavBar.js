import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {twitterLogInUrl} from '../../config.json';
import menuLogo from '../../assets/images/logo.svg';
import homeIcon from '../../assets/icons/svg/home-active.svg';
import notificationsIcon from '../../assets/icons/svg/notifications-inactive.svg';
import rewardIcon from '../../assets/icons/svg/rewards-inactive.svg';
import profilePic from '../../assets/images/profile-pic.jpg';
import Authentication from '../Authentication/Authentication.js';
import './NavBar.scss';

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <Link className="navbar-brand" to="/">
          <span>
            <img src={menuLogo} alt="Consensus Clubs" />
          </span>
          <span className="logo-text">Consensus Clubs</span>
        </Link>
        <ul>
          <li>
            <Link className="nav-link" to="/polls">
              <div class="icon">
                <img src={homeIcon} alt="Home" />
              </div>
              <div className="name">Home</div>
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/notifications">
              <div class="icon">
                <img src={notificationsIcon} alt="Home" />
              </div>
              <div className="name">Notifications</div>
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/rewards">
              <div class="icon">
                <img src={rewardIcon} alt="Home" />
              </div>
              <div className="name">Reward</div>
            </Link>
          </li>
          <li>
            <Authentication/>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
