import React, {Component} from 'react';
import downArrow from '../../assets/icons/polls/down-arrow.png';
import upArrow from '../../assets/icons/polls/up-arrow.png';

class CandidateExpanded extends Component {
  render() {
    return (
      <div>
        <p className="info">{this.props.candidate.description}</p>
        <div className="candidate">
          <p className="arrow">
            <i>
              <img src={upArrow} alt="Rating Up" />
            </i>
          </p>
          <button>I support {this.props.candidate['twitter_user']}</button>
          <p className="oppose">
            <i>
              <img src={downArrow} alt="Rating Down" />
            </i>
            <span>Do you oppose {this.props.candidate['twitter_user']}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default CandidateExpanded;
