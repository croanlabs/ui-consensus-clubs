import React, { Component } from "react";
import Congratulations from "../Congratulations/Congratulations";
import "./WithdrawModify.scss";
import MeritsSlider from "../MeritsSlider/MeritsSlider";
import { runInThisContext } from "vm";
import axios from "axios";

class Modify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountMerits: this.props.currentValueMerits,
      increase: true,
      modified: false
    };
  }

  updateMeritsSlider = value => {
    this.setState({
      amountMerits: value
    });
  };

  updateMeritsInput = e => {
    this.setState({ amountMerits: parseInt(e.target.value, 10) });
  };

  handleModify = async e => {
    const url =
      process.env.REACT_APP_API_POLLS +
      "/" +
      this.props.opinion.candidate.pollId +
      "/candidates/" +
      this.props.opinion.candidate.id +
      "/modify";
    const conf = {
      method: "post",
      baseURL: process.env.REACT_APP_API_URL,
      url,
      withCredentials: true,
      data: {
        confidence: this.props.opinion.confidence,
        commitmentMerits: this.state.amountMerits,
      },
    }
    e.preventDefault();
    await axios(conf);
    this.setState({ modified: true });
  };

  handleModifyOk = () => {
    this.props.handleAfterStaked();
    this.setState({
      // the candidate will be deleted?
      amountMerits: this.props.currentValueMerits,
      incrase: null,
      modified: false
    });
  };

  render() {
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
          <button onClick={this.handleModify.bind(this)}>Confirm</button>
        </div>
      </div>
    ) : (
      <Congratulations
        userTwitterName={this.props.opinion.candidate.twitterUser}
        handleOk={this.handleModifyOk.bind(this)}
        message={this.state.increase ? "increased" : "decreased"}
      />
    );

    return <div>{modifyShow}</div>;
  }
}

export default Modify;
