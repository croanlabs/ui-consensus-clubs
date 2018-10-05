import React, { Component } from "react";
import "./WithdrawModify.scss";
import axios from "axios";

class Withdraw extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountOfMeritsGet: 231
    };
  }
  onClickModify() {
    this.props.showFormModify();
  }

  handleWithdrawMerits = async e => {
    const obj = {
      confidence: true,
      percentage: 100
    };
    e.preventDefault();
    await axios.post(
      `${process.env.REACT_APP_API_URL +
        process.env.REACT_APP_API_POLLS +
        "/" +
        "2/candidates/3/redeem"}`,
      obj
    );
  };
  render() {
    const { amountOfMeritsGet } = this.state;
    const { amountOfStakedMerits } = this.props;
    let percentageOfGainLoss = amountOfMeritsGet / amountOfStakedMerits;
    let showPercentageOfGainLoss;

    showPercentageOfGainLoss =
      percentageOfGainLoss > 1 ? (
        <span className="gain">
          {((percentageOfGainLoss - 1) * 100).toFixed(1) + "% gain"}
        </span>
      ) : (
        <span className="loss">
          {(percentageOfGainLoss * 100).toFixed(1) + "% loss"}
        </span>
      );

    return (
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
          <p className="merits-count">{amountOfMeritsGet} Merits</p>
          <p
            className="withdraw-support"
            onClick={this.handleWithdrawMerits.bind(this)}
          >
            Withdraw my support for an {showPercentageOfGainLoss}
          </p>
        </div>
      </div>
    );
  }
}

export default Withdraw;
