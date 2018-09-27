import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import TwitterLogin from 'react-twitter-auth';
import '../NavBar/NavBar.scss';
import './Authentication.scss';

class Authentication extends Component {
  constructor() {
    super();
  }

  onSuccess = response => {
    const token = response.headers.get('x-auth-token');
    response.json().then(user => {
      if (token) {
        this.props.updateAuthInfo(true, user, token);
      }
    });
  };

  onFailed = error => {
    // TODO
  };

  logout = () => {
    this.props.updateUserInfo(false, null, '');
  };

  render() {
    let content = this.props.authInfo.isAuthenticated ? (
      <div>
        <Link className="nav-link" to="/profile">
          <div class="profile-pic">
            <img
              src={
                this.props.authInfo.user.externalInfo._json
                  .profile_image_url_https
              }
              alt="Profile"
            />
          </div>
        </Link>
      </div>
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
      />
    );
    return <div class="auth-container">{content}</div>;
  }
}

export default Authentication;
