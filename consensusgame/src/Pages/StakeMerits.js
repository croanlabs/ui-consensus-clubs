import React, { Component } from "react";

class StakeMerits extends Component {
  constructor() {
    super();
    this.state = {
      shown: false,
      confidence: true
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
  support = () => console.log("Supported!!");
  unSupport = () => console.log("UNSupported!!");

  render() {
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
                <h1>Graph</h1>
                <button onClick={() => this.support()}>Support</button>
              </div>
            ) : (
              <div>
                <button onClick={() => this.confidence()}>Confidence</button>
                <button disabled onClick={() => this.confidence()}>
                  <strong>No confidence</strong>
                </button>
                <p>Adjust the slider to set the merit points</p>
                <h1>Graph</h1>
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
