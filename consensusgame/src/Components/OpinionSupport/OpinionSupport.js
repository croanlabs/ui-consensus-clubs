import React, { Component } from "react";
import "./OpinionSupport.scss";
import infoIcon from "../../assets/icons/info-icon.png";
import downArrow from "../../assets/icons/polls/down-arrow.png";
import upArrow from "../../assets/icons/polls/up-arrow.png";
import MeritsSlider from "../MeritsSlider/MeritsSlider";
import "react-rangeslider/lib/index.css";

import axios from "axios";

class OpinionSupport extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      amountMerits: 50
    };
  }

  updateMeritsSlider = value => {
    this.setState({ amountMerits: value });
  };
  updateMeritsInput = e => {
    this.setState({ amountMerits: parseInt(e.target.value) });
  };
  handleStakeCandidate = async e => {
    // console.log(typeof this.state.volume);
    const obj = {
      commitmentMerits: this.state.amountMerits,
      confidence: this.props.confidence
    };
    e.preventDefault();
    await axios.post(
      `${process.env.REACT_APP_API_URL +
        process.env.REACT_APP_API_POLLS +
        "/" +
        this.props.poll.id +
        "/candidates/" +
        this.props.candidate.id +
        "/express-opinion"}`,
      obj
    );
  };

  onClickOpposition() {
    this.props.showFormOpposition();
  }

  render() {
    return (
      <div className="opinion-support">
        <p className="info">{this.props.candidate.description}</p>
        <p className="info">
          <i>
            <img src={infoIcon} alt="Info" />
          </i>
          <span>
            The default merit points are set to 50, do you want to change below?
          </span>
        </p>
        <div className="candidate">
          <form onSubmit={this.handleStakeCandidate}>
            <div className="slider">
              <MeritsSlider
                amountMerits={this.state.amountMerits}
                passMeritsFromSlider={this.updateMeritsSlider}
                passMeritsFromInput={this.updateMeritsInput}
              />
            </div>
            <p className="arrow-opinion">
              <i>
                <img src={upArrow} alt="Rating Up" />
              </i>
            </p>
            <button onClick={this.handleStakeCandidate.bind(this)}>
              I support {this.props.candidate.twitter_user}
            </button>
          </form>

          <p className="oppose">
            <i>
              <img src={downArrow} alt="Rating Down" />
            </i>
            <span onClick={this.onClickOpposition.bind(this)}>
              Do you oppose {this.props.candidate.twitter_user}
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default OpinionSupport;
