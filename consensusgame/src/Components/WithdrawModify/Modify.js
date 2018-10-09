import React, { Component } from "react";
import Congratulations from "../Congratulations/Congratulations";
import "./WithdrawModify.scss";
import MeritsSlider from "../MeritsSlider/MeritsSlider";
import { runInThisContext } from "vm";

class Modify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountMerits: this.props.amountOfStakedMerits,
      increase: true,
      modified: false
    };
  }

  updateMeritsSlider = value => {
    this.setState({
      amountMerits: value
    });
    // const stakedMerits = this.props.amountMerits;
    // if (this.state.amountMerits > stakedMerits) {
    //   this.setState({ increase: true });
    // } else if (this.state.amountMerits < stakedMerits) {
    //   this.setState({ increase: false });
    // }
  };

  updateMeritsInput = e => {
    this.setState({ amountMerits: parseInt(e.target.value, 10) });
    // const stakedMerits = this.props.amountMerits;
    // if (this.state.amountMerits > stakedMerits) {
    //   this.setState({ increase: true });
    // } else if (this.state.amountMerits < stakedMerits) {
    //   this.setState({ increase: false });
    // }
  };

  handleIncrease = () => {
    console.log("increase");
    this.setState({ modified: true });
  };

  handleDecrease = () => {
    console.log("decrease");
    this.setState({ modified: true });
  };

  handleModifyOk = () => {
    this.props.handleAfterStaked();
    this.setState({
      // the candidate will be deleted?
      amountMerits: this.props.amountOfStakedMerits,
      incrase: null,
      modified: false
    });
  };

  render() {
    let increaseOrDecrease;
    // if (this.state.amountMerits > this.props.amountOfStakedMerits) {
    if (this.state.increase) {
      increaseOrDecrease = (
        <button onClick={this.handleIncrease.bind(this)}>Increase</button>
      );
    }
    // } else if ((this.state.amountMerits = this.props.amountOfStakedMerits)) {
    //   increaseOrDecrease = <p>Increase or decrease your opinion</p>;
    // } else {
    //   increaseOrDecrease = (
    //     <button onClick={this.handleDecrease.bind(this)}>Decrease</button>
    //   );
    // }

    let modifyShow;
    modifyShow = !this.state.modified ? (
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
    ) : (
      <Congratulations
        userTwitterName={this.props.candidate.twitter_user}
        handleOk={this.handleModifyOk.bind(this)}
        message={this.state.increase ? "increased" : "decreased"}
      />
    );

    return <div>{modifyShow}</div>;
  }
}

export default Modify;
