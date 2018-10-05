import React, { Component } from "react";
import "./WithdrawModify.scss";
import MeritsSlider from "../MeritsSlider/MeritsSlider";

class Modify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountMerits: 50,
      increase: true
    };
  }

  updateMeritsSlider = value => {
    this.setState({ amountMerits: value });
  };

  updateMeritsInput = e => {
    this.setState({ amountMerits: parseInt(e.target.value, 10) });
  };

  handleIncrease = () => {
    console.log("increase");
  };

  handleDecrease = () => {
    console.log("decrease");
  };

  render() {
    let increaseOrDecrease = <p>Increase or decrease your opinion</p>;
    this.state.increase
      ? (increaseOrDecrease = (
          <button onClick={this.handleIncrease.bind(this)}>Increase</button>
        ))
      : (increaseOrDecrease = (
          <button onClick={this.handleDecrease.bind(this)}>Decrease</button>
        ));

    return (
      <div className="withdraw-modify">
        <form class="form">
          <div class="switch-field">
            <input
              type="radio"
              id="switch_left"
              name="switch_2"
              value="Withdraw"
              onClick={this.props.showFormWithdraw.bind(this)}
            />
            <label for="switch_left">Withdraw</label>
            <input
              type="radio"
              id="switch_right"
              name="switch_2"
              value="modify"
              checked
            />
            <label for="switch_right">Modify</label>
          </div>
        </form>
        <div className="slider">
          <MeritsSlider
            amountMerits={this.state.amountMerits}
            passMeritsFromSlider={this.updateMeritsSlider}
            passMeritsFromInput={this.updateMeritsInput}
          />
          {increaseOrDecrease}
        </div>
      </div>
    );
  }
}

export default Modify;
