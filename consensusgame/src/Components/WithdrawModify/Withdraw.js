import React, { Component } from "react";
import Congratulations from "../Congratulations/Congratulations";
import "./WithdrawModify.scss";
import axios from "axios";

class Withdraw extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountOfMeritsGet: 1231,
      withdrawed: false
    };
  }
  onClickModify() {
    this.props.showFormModify();
  }

  handleWithdrawMerits = async e => {
    const url =
      process.env.REACT_APP_API_POLLS +
      "/" +
      this.props.candidate.pollId +
      "/candidates/" +
      this.props.candidate.id +
      "/redeem";
    const conf = {
      method: "post",
      baseURL: process.env.REACT_APP_API_URL,
      url,
      withCredentials: true,
      data: {
        confidence: this.props.confidence,
        percentage: 100
      },
    }
    e.preventDefault();
    await axios(conf);
    this.setState({ withdrawed: true });
  };

  handleWithdrawOk = () => {
    this.props.handleAfterStaked();
    this.setState({ withdrawed: false });
  };

  render() {
    const { amountOfMeritsGet } = this.state;
    const { amountOfStakedMerits, arrowConfidence, confidence } = this.props;

    // calculate the percentage of gain / loss
    let amountOfGain = amountOfMeritsGet - amountOfStakedMerits;
    let amountOfLoss = amountOfStakedMerits - amountOfMeritsGet;
    let showPercentageOfGainLoss;

    showPercentageOfGainLoss =
      amountOfMeritsGet >= amountOfStakedMerits ? (
        <span className="gain">
          {((amountOfGain / amountOfStakedMerits) * 100).toFixed(1) + "% gain"}
        </span>
      ) : (
        <span className="loss">
          {((amountOfLoss / amountOfStakedMerits) * 100).toFixed(1) + "% loss"}
        </span>
      );

    let currentValue;
    currentValue = parseInt(
      this.state.amountOfMeritsGet ? this.state.amountOfMeritsGet : 0,
      10
    ).toLocaleString();

    let withdrawShow;
    withdrawShow = !this.state.withdrawed ? (
      <div className="withdraw-modify">
        <form class="form">
          <div class="switch-field">
            <input
              type="radio"
              id="switch_left"
              name="switch_2"
              value="Withdraw"
              checked
            />
            <label for="switch_left">Withdraw</label>
            <input
              type="radio"
              id="switch_right"
              name="switch_2"
              value="modify"
              onClick={this.props.showFormModify.bind(this)}
            />
            <label for="switch_right">Modify</label>
          </div>
        </form>
        <div className="container">
          <p className="current-value">Current Value</p>
          <p className={`merits-count ${arrowConfidence}`}>
            {currentValue} Merits
          </p>
          <p
            className="withdraw-support"
            onClick={this.handleWithdrawMerits.bind(this)}
          >
            Withdraw my {arrowConfidence === "up" ? "support" : "oppose"} for an{" "}
            {showPercentageOfGainLoss}
          </p>
        </div>
      </div>
    ) : (
      <Congratulations
        userTwitterName={this.props.candidate.twitterUser}
        handleOk={this.handleWithdrawOk.bind(this)}
        message="withdrawed"
      />
    );

    return <div>{withdrawShow}</div>;
  }
}

export default Withdraw;
