import React, { Component } from "react";
import downArrow from "../../assets/icons/polls/down-arrow.png";
import upArrow from "../../assets/icons/polls/up-arrow.png";
import profilePic from "../../assets/images/profile/Aripaul@2x.png";
import downTriggerArrow from "../../assets/icons/collapse-icon.png";
import NewOpinion from "../NewOpinion/NewOpinion";
import { numberToString } from "../../utils/Numbers";
import "./Candidate.scss";
import "../../assets/scss/_card.scss";

class Candidate extends Component {
  constructor() {
    super();
    this.state = { showExpand: false };
  }
  expandOrContract() {
    if (!this.props.expanded) {
      this.props.handleOnExpanded(this.props.candidate.id);
    } else {
      // -1 is fake candidate id which does not exist
      this.props.handleOnExpanded(-1);
    }
  }

  onMouseEnter() {
    this.setState({ showExpand: true });
  }

  onMouseLeave() {
    this.setState({ showExpand: false });
  }

  render() {
    const { corr, color, poll, candidate, expanded } = this.props;

    let extraComponent;
    if (expanded) {
      extraComponent = (
        <NewOpinion
          poll={poll}
          candidate={candidate}
          handleAfterStaked={this.expandOrContract.bind(this)}
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
              className={`${expanded ? "up" : "down"}-arrow`}
            />
          </i>
        </div>
      );
    }
    return (
      <div className="candidate">
        <li
          className={`card ${color}`}
          onMouseEnter={this.onMouseEnter.bind(this)}
          onMouseLeave={this.onMouseLeave.bind(this)}
        >
          <div className="card-container">
            {expand}
            <div className="flex-sb" onClick={this.expandOrContract.bind(this)}>
              <div className="profile flex">
                <div className="number">{corr + 1}</div>
                <div className="image-cropper">
                  <img
                    src={candidate.profile_picture_url || profilePic}
                    alt="img"
                    className="profile-pic"
                  />
                </div>
                <div className="name">
                  <h2>{candidate.name}</h2>
                  <h3>@{candidate.twitter_user}</h3>
                </div>
              </div>

              <div className="rating flex">
                <div className="up flex">
                  <i>
                    <img src={upArrow} alt="Rating Up" />
                  </i>
                  <span className="merits-total">
                    {numberToString(candidate.total_merits_confidence)}
                  </span>
                </div>
                <div className="down flex">
                  <i>
                    <img src={downArrow} alt="Rating Down" />
                  </i>
                  <span className="merits-total">
                    {numberToString(candidate.total_merits_no_confidence)}
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
