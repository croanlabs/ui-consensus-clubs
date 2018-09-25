import React, { Component } from "react";
import { twitterLogInUrl } from "../../src/config.json";
import AfterStaked from "./AfterStaked";
import { Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";

class StakeMerits extends Component {
  constructor() {
    super();
    this.state = {
      shown: false,
      confidence: true,
      isSupported: true
    };
  }
  showMoreInfo = () => {
    this.setState(prevState => {
      return { shown: !prevState.shown };
    });
  };

  confidence = () =>
    this.setState(prevState => {
      return { confidence: !prevState.confidence };
    });

  support = () => {
    this.props.isLoggedIn
      ? console.log("supported")
      : console.log("Please log in");
    // {
    //   this.props.isLoggedIn ? (
    //     <AfterStaked isSupported={this.state.isSupported} />
    //   ) : (
    //     <Redirect push to={twitterLogInUrl} />
    //   );
    // }
  };

  render() {
    let support;
    if (this.props.isLoggedInOrOut) {
      support = (
        <li key="AfterStaked">
          <NavLink
            className=""
            activeClassName="active"
            to="/afterstaked"
            isSupported={this.state.isSupported}
          >
            Support
          </NavLink>
        </li>
      );
    } else {
      support = (
        <a href={twitterLogInUrl} className="">
          <span className="">Support</span>
        </a>
      );
    }

    return (
      <div>
        {/* Show and Hide button */}
        <button onClick={() => this.showMoreInfo()}>
          {this.state.shown ? <div>hide</div> : <div>show</div>}
        </button>
        <br />
        <br />

        {/* More Information when Show is chosen */}
        {this.state.shown ? (
          <div>
            {this.state.confidence ? (
              <div>
                <button disabled onClick={() => this.confidence()}>
                  <strong>Confidence</strong>
                </button>
                <button onClick={() => this.confidence()}>No confidence</button>
                <p>Adjust the slider to set the merit points</p>
                <h1 style={{ color: "black" }}>Graph</h1>
                {support}
              </div>
            ) : (
              <div>
                <button onClick={() => this.confidence()}>Confidence</button>
                <button disabled onClick={() => this.confidence()}>
                  <strong>No confidence</strong>
                </button>
                <p>Adjust the slider to set the merit points</p>
                <h1 style={{ color: "black" }}>Graph</h1>
                <button onClick={() => this.unSupport()}>Unsupport</button>
              </div>
            )}
          </div>
        ) : null}
      </div>
    );
  }
}

export default StakeMerits;
