import React, { Component } from "react";
import congratsIcon from "../../assets/icons/congrats-icon.png";
import "./Congratulations.scss";

class Congratulations extends Component {
  render() {
    return (
      <div className="congratulations card yellow">
        <div className="card-container">
          <img src={congratsIcon} alt="Success" />
          <h2>Congratulations!</h2>
          <p>@kylesamani has been successfully added to the list</p>
        </div>
        <p onClick={this.props.handleAddOk}>
          <button>OK</button>
        </p>
      </div>
    );
  }
}

export default Congratulations;
