import React, { Component } from "react";
import Slider from "react-rangeslider";

class MeritsSlider extends Component {
  render() {
    let { amountMerits } = this.props;
    return (
      <React.Fragment>
        <Slider
          value={amountMerits}
          // orientation="vertical"
          min={0}
          max={1000}
          // onChange={this.handleOnChangeSlider}
          onChange={this.props.passMeritsFromSlider}
        />
        <div className="merits-box">
          <span className="large-text">
            <input
              type="number"
              value={amountMerits}
              onChange={this.handleOnChangeNumber}
              step="10"
              onChange={this.props.passMeritsFromInput}
            />
          </span>{" "}
          <span className="small-text">Merits</span>
        </div>
      </React.Fragment>
    );
  }
}

export default MeritsSlider;
