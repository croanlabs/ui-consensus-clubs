import React, { Component } from "react";
import congratsIcon from "../../assets/icons/congrats-icon.png";
import "./Congratulations.scss";

class Congratulations extends Component {
  render() {
    return (
      <div className="congratulations">
        <div className="card-container congrats">
          <img src={congratsIcon} alt="Success" />
          <h2>Congratulations!</h2>
          <p>
            @{this.props.userTwitterName} has been successfully{" "}
            {this.props.message}
          </p>
        </div>
        <p onClick={this.props.handleOk}>
          <button>OK</button>
        </p>
      </div>
    );
  }
}

export default Congratulations;
