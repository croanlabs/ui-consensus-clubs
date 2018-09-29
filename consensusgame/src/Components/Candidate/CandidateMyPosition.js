import React, { Component } from "react";
import downArrow from "../../assets/icons/polls/down-arrow.png";
import upArrow from "../../assets/icons/polls/up-arrow.png";
import profilePic from "../../assets/images/profile/Aripaul@2x.png";
import downTriggerArrow from "../../assets/icons/collapse-icon.png";
import Withdraw from "../WithdrawModify/Withdraw";
import Modify from "../WithdrawModify/Modify";

class Candidate extends Component {
  constructor() {
    super();
    this.state = { active: false };
  }

  onClick() {
    if (!this.state.active) {
      this.setState({ active: true, content: "withdraw" });
    }
  }

  onMouseEnter() {
    this.setState({ showExpand: true });
  }

  onMouseLeave() {
    this.setState({ showExpand: false });
  }

  showFormModify() {
    this.setState({ content: "modify" });
  }

  showFormWithdraw() {
    this.setState({ content: "withdraw" });
  }

  expandOrContract() {
    this.setState({ active: !this.state.active });
  }

  render() {
    let extraComponent;
    if (this.state.active && this.state.content == "withdraw") {
      extraComponent = (
        <Withdraw
          showFormModify={this.showFormModify.bind(this)}
          candidate={this.props.candidate}
        />
      );
    }
    if (this.state.active && this.state.content == "modify") {
      extraComponent = (
        <Modify
          showFormWithdraw={this.showFormWithdraw.bind(this)}
          candidate={this.props.candidate}
        />
      );
    }

    let expand;
    if (this.state.showExpand) {
      expand = (
        <div
          className="arrow-trigger"
          onClick={this.expandOrContract.bind(this)}
        >
          <i>
            <img
              src={downTriggerArrow}
              alt="Expanded"
              className={`${this.state.active ? "up" : "down"}-arrow`}
            />
          </i>
        </div>
      );
    }
    return (
      <li
        className={`card ${this.props.color}`}
        onClick={this.onClick.bind(this)}
        onMouseEnter={this.onMouseEnter.bind(this)}
        onMouseLeave={this.onMouseLeave.bind(this)}
      >
        <div className="card-container">
          {expand}
          <div className="flex-sb">
            <div className="profile flex">
              <div className="number">{this.props.corr + 1}</div>
              <div className="image-cropper">
                <img src={this.props.candidate.profile_picture_url || profilePic} alt="Metem" className="profile-pic" />
              </div>
              <div className="name">
                <h2>{this.props.candidate.name}</h2>
                <h3>{this.props.candidate["twitter_user"]}</h3>
              </div>
            </div>

            <div className="rating flex">
              <div className="up flex">
                <i>
                  <img src={upArrow} alt="Rating Up" />
                </i>
                <span className="merit-num">837 Merits</span>
              </div>
              {/* <div className="down flex">
                <i>
                  <img src={downArrow} alt="Rating Down" />
                </i>
                <span>214 Merits</span>
              </div> */}
            </div>
          </div>
          {extraComponent}
        </div>
      </li>
    );
  }
}

export default Candidate;
