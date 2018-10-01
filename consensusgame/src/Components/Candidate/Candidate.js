import React, { Component } from "react";
import downArrow from "../../assets/icons/polls/down-arrow.png";
import upArrow from "../../assets/icons/polls/up-arrow.png";
import profilePic from "../../assets/images/profile/Aripaul@2x.png";
import downTriggerArrow from "../../assets/icons/collapse-icon.png";
import OpinionSupport from "../OpinionSupport/OpinionSupport.js";
import OpinionOpposition from "../OpinionOpposition/OpinionOpposition.js";
import { numberToString } from "../../utils/Numbers";
import "./Candidate.scss";

class Candidate extends Component {
  constructor() {
    super();
    this.state = { active: false, confidence: true };
  }

  onClick() {
    if (!this.state.active) {
      this.setState({ active: true, confidence: true });
    }
  }

  onMouseEnter() {
    this.setState({ showExpand: true });
  }

  onMouseLeave() {
    this.setState({ showExpand: false });
  }

  showFormOpposition() {
    this.setState({ confidence: false });
  }

  showFormSupport() {
    this.setState({ confidence: true });
  }

  expandOrContract() {
    this.setState({ active: !this.state.active });
  }

  render() {
    let extraComponent;
    if (this.state.active && this.state.confidence == true) {
      extraComponent = (
        <OpinionSupport
          showFormOpposition={this.showFormOpposition.bind(this)}
          confidence={this.state.confidence}
          poll={this.props.poll}
          candidate={this.props.candidate}
        />
      );
    }
    if (this.state.active && this.state.confidence == false) {
      extraComponent = (
        <OpinionOpposition
          showFormSupport={this.showFormSupport.bind(this)}
          confidence={this.state.confidence}
          poll={this.props.poll}
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
      <div className="candidate">
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
                  <img
                    src={this.props.candidate.profile_picture_url || profilePic}
                    alt="img"
                    className="profile-pic"
                  />
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
                  <span className="merits-total">
                    {numberToString(
                      this.props.candidate.total_merits_confidence
                    )}
                  </span>
                </div>
                <div className="down flex">
                  <i>
                    <img src={downArrow} alt="Rating Down" />
                  </i>
                  <span className="merits-total">
                    {numberToString(
                      this.props.candidate.total_merits_no_confidence
                    )}
                  </span>
                </div>
              </div>
            </div>
            {extraComponent}
          </div>
        </li>
      </div>
    );
  }
}

export default Candidate;
