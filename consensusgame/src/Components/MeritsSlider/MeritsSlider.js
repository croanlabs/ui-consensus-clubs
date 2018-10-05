import React, { Component } from "react";
import Slider from "react-rangeslider";
import "./MeritsSlider.scss";

class MeritsSlider extends Component {
  render() {
    let { amountMerits } = this.props;
    return (
      <div className="slider">
        <Slider
          value={amountMerits}
          min={0}
          max={1000}
          onChange={this.props.passMeritsFromSlider}
        />
        <div className="merits-box">
          <input
            type="number"
            className="large-text"
            value={amountMerits}
            step="10"
            onChange={this.props.passMeritsFromInput}
          />
          <span className="small-text">Merits</span>
        </div>
      </div>
    );
  }
}

export default MeritsSlider;
