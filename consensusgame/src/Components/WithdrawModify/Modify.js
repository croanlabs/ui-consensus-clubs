import React, { Component } from "react";
import infoIcon from "../../assets/icons/info-icon.png";
import "./WithdrawModify.scss";
import Slider from "react-rangeslider";

class Modify extends Component {
  onClickWithdraw() {
    this.props.showFormWithdraw();
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
              onClick={this.onClickWithdraw.bind(this)}
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
          <Slider />
          <div className="merits-box">
            <span className="small-text">1231</span>{" "}
          </div>
          <button>Decrease</button>
        </div>
      </div>
    );
  }
}

export default Modify;
