import React, { Component } from "react";
import congratsIcon from "../../assets/icons/congrats-icon.png";
import "./Congratulations.scss";

class Congratulations extends Component {
  render() {
    const { userTwitterName, message, handleOk } = this.props;
    return (
      <div className="congratulations">
        <div className="card-container congrats">
          <img src={congratsIcon} alt="Success" />
          <h2>Congratulations!</h2>
          <p>
            @{userTwitterName} has been successfully {message}
          </p>
        </div>
        <p onClick={handleOk}>
          <button>OK</button>
        </p>
      </div>
    );
  }
}

export default Congratulations;
