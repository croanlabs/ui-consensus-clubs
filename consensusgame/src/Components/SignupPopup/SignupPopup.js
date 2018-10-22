import React, { Component } from "react";
import TwitterLogin from "react-twitter-auth";
import removeIcon from "../../assets/icons/mobile/remove-icon.png";
import "./SignupPopup.scss";

class SignupPopup extends Component {
  render() {
    const {
      onFailed,
      onSuccess,
      handleSignupClick,
      handleOutsideCloseSignup
    } = this.props;
    return (
      <div className="overlay" onClick={handleOutsideCloseSignup}>
        <ul className="get-started-menu" ref={this.props.setRef}>
          <img
            className="cancel-button"
            onClick={handleSignupClick}
            src={removeIcon}
            alt="remove-icon"
          />
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
              onFailure={onFailed}
              onSuccess={onSuccess}
              requestTokenUrl={
                process.env.REACT_APP_API_URL +
                process.env.REACT_APP_API_REQUEST_TOKEN_ROUTE
              }
              text="Sign up with Twitter"
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default SignupPopup;
