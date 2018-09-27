import React, {Component} from 'react';
import downArrow from '../../assets/icons/polls/down-arrow.png';
import upArrow from '../../assets/icons/polls/up-arrow.png';
import profilePic from '../../assets/images/profile/Aripaul@2x.png';
import downTriggerArrow from '../../assets/icons/collapse-icon.png';
import CandidateExpanded from '../CandidateExpanded/CandidateExpanded.js';

class Candidate extends Component {
  constructor() {
    super();
    this.state = {active: false};
  }

  onClick() {
    this.setState({active: true});
  }

  render() {
    let extraComponent;
    if (this.state.active) {
      extraComponent = <CandidateExpanded candidate={this.props.candidate} />;
    }

    return (
      <li className="card yellow" onClick={this.onClick.bind(this)}>
        <div className="card-container">
          <div className="arrow-trigger">
            <i>
              <img
                src={downTriggerArrow}
                alt="Expanded"
                className="down-arrow"
              />
            </i>
          </div>
          <div className="flex-sb">
            <div className="profile flex">
              <div className="number">{this.props.corr + 1}</div>
              <div className="image-cropper">
                <img src={profilePic} alt="Metem" className="profile-pic" />
              </div>
              <div className="name">
                <h2>{this.props.candidate.name}</h2>
                <h3>{this.props.candidate['twitter_user']}</h3>
              </div>
            </div>

            <div className="rating flex">
              <div className="up flex">
                <i>
                  <img src={upArrow} alt="Rating Up" />
                </i>
                <span>{this.props.candidate['total_tokens_confidence']}</span>
              </div>
              <div className="down flex">
                <i>
                  <img src={downArrow} alt="Rating Down" />
                </i>
                <span>
                  {this.props.candidate['total_tokens_no_confidence']}
                </span>
              </div>
            </div>
          </div>
          {extraComponent}
        </div>
      </li>
    );
  }
}

export default Candidate;
