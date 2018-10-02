import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import TwitterLogin from 'react-twitter-auth';
import Cookies from 'universal-cookie';
import '../NavBar/NavBar.scss';
import './Authentication.scss';

class Authentication extends Component {
  constructor() {
    super();

    let cookies = new Cookies();
    let user = cookies.get('user');
    if (user) {
      this.state = {user};
    } else {
      this.state = {};
    }
  }

  onSuccess = async response => {
    const token = response.headers.get('x-auth-token');
    if (token) {
      // Add cookies for token and user info
      let cookies = new Cookies();
      cookies.set('token', token, {
        // FIXME Set httpOnly.
        //httpOnly: true,
        path: '/',
      });

      const user = await response.json();
      cookies.set('user', JSON.stringify(user), {httpOnly: false, path: '/'});

      this.setState({user});
    }
  };

  onFailed = error => {
    // TODO
  };

  logout = () => {
    let cookies = new Cookies();
    cookies;
  };

  render() {
    let content = this.state.user ? (
      <div>
        <Link className="nav-link" to="/profile">
          <div class="profile-pic">
            <img src={this.state.user.profileImageUrl} alt="Profile" />
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
    return <div className="auth-container">{content}</div>;
  }
}

export default Authentication;
