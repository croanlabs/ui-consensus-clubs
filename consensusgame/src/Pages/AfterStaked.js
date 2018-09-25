import React, { Component } from "react";

class AfterStaked extends Component {
  render() {
    const { isSupported } = this.props;
    return (
      <h1>
        Thank you for{" "}
        {isSupported ? <span>Supported</span> : <span>Unsupported</span>}
        !!!!!
      </h1>
    );
  }
}

export default AfterStaked;
