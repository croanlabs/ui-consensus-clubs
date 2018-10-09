import React, { Component } from "react";
import downArrow from "../../assets/icons/polls/down-arrow.png";
import upArrow from "../../assets/icons/polls/up-arrow.png";
import profilePic from "../../assets/images/profile/Aripaul@2x.png";
import downTriggerArrow from "../../assets/icons/collapse-icon.png";
import Withdraw from "../WithdrawModify/Withdraw";
import Modify from "../WithdrawModify/Modify";
import appToken from "../../utils/AppToken";
import "./CandidateMyPosition.scss";

class CandidateMyPosition extends Component {
  constructor() {
    super();
    this.state = { showExpand: false, content: "withdraw" };
  }

  componentDidMount() {
    let op = this.props.opinion;
    let supply = op.confidence
      ? op.candidate.total_tokens_confidence
      : op.candidate.total_tokens_no_confidence;
    let merits = appToken.tokenToMeritsRedeem(op.token_amount, supply);

    this.setState({
      merits,
      candidate: this.props.opinion.candidate,
      opinion: this.props.opinion,
      arrowConfidence: this.props.opinion.confidence ? "up" : "down"
    });
  }
  expandOrContract() {
    if (!this.props.expanded) {
      this.props.handleOnExpanded(this.props.opinion.candidate.id);
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

  showFormModify() {
    this.setState({ content: "modify" });
  }

  showFormWithdraw() {
    this.setState({ content: "withdraw" });
  }

  render() {
    const { arrowConfidence } = this.state;
    if (!this.state.candidate) {
      return null;
    }
    let extraComponent;
    if (this.props.expanded && this.state.content == "withdraw") {
      extraComponent = (
        <Withdraw
          showFormModify={this.showFormModify.bind(this)}
          candidate={this.props.opinion.candidate}
          amountOfStakedMerits={this.state.merits}
          arrowConfidence={this.state.arrowConfidence}
          handleAfterStaked={this.expandOrContract.bind(this)}
        />
      );
    }
    if (this.props.expanded && this.state.content == "modify") {
      extraComponent = (
        <Modify
          showFormWithdraw={this.showFormWithdraw.bind(this)}
          candidate={this.props.opinion.candidate}
          amountOfStakedMerits={this.state.merits}
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
              className={`${this.props.expanded ? "up" : "down"}-arrow`}
            />
          </i>
        </div>
      );
    }

    let meritsAmount;
    meritsAmount = parseInt(
      this.state.merits ? this.state.merits : 0,
      10
    ).toLocaleString();
    return (
      <div className="candidate-myposition">
        <li
          className={`card ${this.props.color} candidate-my-position`}
          onMouseEnter={this.onMouseEnter.bind(this)}
          onMouseLeave={this.onMouseLeave.bind(this)}
        >
          <div className="card-container">
            {expand}
            <div className="flex-sb" onClick={this.expandOrContract.bind(this)}>
              <div className="profile flex">
                <div className="number">{this.props.corr + 1}</div>
                <div className="image-cropper">
                  <img
                    src={this.state.candidate.profile_picture_url || profilePic}
                    alt="img"
                    className="profile-pic"
                  />
                </div>
                <div className="name">
                  <h2>{this.state.candidate.name}</h2>
                  <h3>{this.state.candidate.twitter_user}</h3>
                </div>
              </div>

              <div className="rating rating-opinion flex">
                <div className="merits-box-opinions flex">
                  <i>
                    <img
                      src={this.state.opinion.confidence ? upArrow : downArrow}
                      alt={`Rating ${arrowConfidence}`}
                    />
                  </i>
                  <span className={`merit-num ${arrowConfidence}`}>
                    {meritsAmount} Merits
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

export default CandidateMyPosition;
