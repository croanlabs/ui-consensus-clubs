import React, { Component } from "react";
import infoIcon from "../../assets/icons/info-icon.png";
import "./WithdrawModify.scss";
import MeritsSlider from "../../Components/MeritsSlider/MeritsSlider";

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
          <MeritsSlider />
          <button>Decrease</button>
        </div>
      </div>
    );
  }
}

export default Modify;
