import React, { Component } from "react";
import Congratulations from "../Congratulations/Congratulations";
import "./WithdrawModify.scss";
import axios from "axios";

class Withdraw extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      "/withdraw";
    const conf = {
      method: "post",
      baseURL: process.env.REACT_APP_API_URL,
      url,
      withCredentials: true,
      data: {
        confidence: this.props.confidence,
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
    const { currentValueMerits, originalAmountMerits, arrowConfidence, confidence } = this.props;

    // calculate the percentage of gain / loss
    let amountOfGain = currentValueMerits - originalAmountMerits;
    let amountOfLoss = originalAmountMerits - currentValueMerits;
    let showPercentageOfGainLoss =
      currentValueMerits >= originalAmountMerits ? (
        <span className="gain">
          {((amountOfGain / originalAmountMerits) * 100).toFixed(1) + "% gain"}
        </span>
      ) : (
        <span className="loss">
          {((amountOfLoss / originalAmountMerits) * 100).toFixed(1) + "% loss"}
        </span>
      );

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
            {currentValueMerits} Merits
          </p>
          <p
            className="withdraw-support"
            onClick={this.handleWithdrawMerits.bind(this)}
          >
            Withdraw my {arrowConfidence === "up" ? "support" : "oppose"} for a{" "}
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
