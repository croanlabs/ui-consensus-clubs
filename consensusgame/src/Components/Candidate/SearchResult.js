import React, { Component } from "react";
import downArrow from "../../assets/icons/polls/down-arrow.png";
import upArrow from "../../assets/icons/polls/up-arrow.png";
import profilePic from "../../assets/images/profile/Aripaul@2x.png";
import { numberToString } from "../../utils/Numbers";
import "./SearchResult.scss";

class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  expandOrContract() {
    if (!this.props.expanded) {
      this.props.handleOnExpanded(this.props.candidate.id);
    } else {
      // -1 is fake candidate id which does not exist
      this.props.handleOnExpanded(-1);
    }
  }

  // TODO: jump to the candidate (expanded) by clicking
  render() {
    const { corr, candidate, searchValue } = this.props;

    return (
      <div className="result-candidate">
        <li className="result-item">
          <div className="card-container">
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
          </div>
        </li>
      </div>
    );
  }
}
export default SearchResult;
