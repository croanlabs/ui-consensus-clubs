import React, { Component } from "react";
import infoIcon from "../../assets/icons/info-icon.png";
import "./WithdrawModify.scss";

class Withdraw extends Component {
  onClickModify() {
    this.props.showFormModify();
  }
  render() {
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
              onClick={this.onClickModify.bind(this)}
            />
            <label for="switch_right">Modify</label>
          </div>
        </form>
        <div className="container">
          <p className="current-value">Current Value</p>
          <p className="merits-count">1,231 Merits</p>
          <p className="withdraw-support">
            Withdraw my support for an <span>18.3%</span> gain
          </p>
        </div>
      </div>
    );
  }
}

export default Withdraw;
