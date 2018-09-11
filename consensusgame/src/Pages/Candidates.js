import React, { Component } from "react";
import AddCandidate from "./AddCandidate";
// import PropTypes from "prop-types";
import axios from "axios";
import { apiAddCandidate } from "../config.json";
import StakeMerits from "./StakeMerits";
import profilePic from "../assets/images/profile/Aripaul@2x.png";
import downArrow from "../assets/icons/polls/down-arrow.png";
import upArrow from "../assets/icons/polls/up-arrow.png";
import { Link } from "react-router-dom";
import plusIcon from "../assets/icons/polls/plus.png";
import "./Candidate.scss";

class Candidates extends Component {
  // For voting!!!
  // confCandidate(id) {
  //   this.props.onConf(id);
  // }

  // noConfCandidate(id) {
  //   this.props.onNoConf(id);
  // }

  // handleConfCandidate(id) {
  //   console.log("You have supported!");
  //   //let investors = this.state.investors
  //   //let index = investors.findIndex(x => x.id === id)
  //   // add uprate or downrate plus 1k
  //   //this.setState({investors.uprate: investors.uprate + 1})
  // }

  // handleNoConfCandidate(id) {
  //   console.log("You have UNsupported!");
  // }

  // handleAddCandidate(candidate) {
  //   let candidates = this.props.poll.candidates;
  //   candidates.push(candidate);
  //   this.setState({ candidates: candidates });
  // }

  handleAddCandidate = async () => {
    const obj = {
      name: "adfasdfasdf",
      description: "Cryptobobby needs a description bhabhabha",
      twitterUser: "@klsjdfl,sdf",
      confidence: "true",
      amountMerits: 100
    };
    const { data: candidate } = await axios.post(apiAddCandidate, obj);
    console.log(candidate);
  };

  render() {
    const { length: count } = this.props.poll.candidates;
    const colors = ["yellow", "teal", "purple", "red", "green"];

    if (count === 0) return <p>There are no candidates yet.</p>;

    return (
      <div className="candidates">
        <AddCandidate onClick={this.handleAddCandidate} />
        <Link to="/candidates/new">
          <p className="add-new-candidate flex">
            <i className="icon">
              <img src={plusIcon} alt="Add New Candidate" />
            </i>
            <span>Add New Candidate</span>
          </p>
        </Link>

        <h3 style={{ color: "black" }}>
          <strong>{count}</strong> candidates
        </h3>
        <br />
        <ul className="candidates">
          {/* todo: List each candidate */}
          {this.props.poll.candidates.map((candidate, index) => (
            <li
              key={candidate.id}
              className={`card ${colors[index % colors.length]}`}
            >
              <div className="layout card-container">
                <div className="profile flex">
                  <div className="image-cropper">
                    <img src={profilePic} alt="Metem" className="profile-pic" />
                  </div>
                  <div className="name">
                    <h2>{candidate.name}</h2>
                    <h3>{candidate.twitter_user}</h3>
                  </div>
                </div>

                <div className="rating flex">
                  <div className="up flex">
                    <i>
                      <img src={upArrow} alt="Rating Up" />
                    </i>
                    <span>
                      {candidate.total_tokens_confidence > 500000
                        ? (candidate.total_tokens_confidence / 1000000).toFixed(
                            1
                          ) + "M"
                        : candidate.total_tokens_confidence > 500
                          ? (candidate.total_tokens_confidence / 1000).toFixed(
                              1
                            ) + "K"
                          : candidate.total_tokens_confidence}
                    </span>
                  </div>
                  <div className="down flex">
                    <i>
                      <img src={downArrow} alt="Rating Down" />
                    </i>
                    <span>
                      {candidate.total_tokens_no_confidence > 500000
                        ? (
                            candidate.total_tokens_no_confidence / 1000000
                          ).toFixed(1) + "M"
                        : candidate.total_tokens_no_confidence > 500
                          ? (
                              candidate.total_tokens_no_confidence / 1000
                            ).toFixed(1) + "K"
                          : candidate.total_tokens_no_confidence}
                    </span>
                  </div>
                  <StakeMerits shown={true} />
                </div>
              </div>
            </li>
          ))}
        </ul>
        <br />
        <br />
        <br />
      </div>
    );
  }

  // return (
  //   <li className="candidates">
  //     {candidate}
  //     <strong>{this.props}</strong>
  //     <br />
  //     {this.props.candidate.twitter}
  //     <br />
  //     {this.props.candidate.conf}{" "}
  //     <a
  //       href="#"
  //       onClick={this.confCandidate.bind(this, this.props.candidate.id)}
  //     >
  //       ↑
  //     </a>{" "}
  //     {this.props.candidate.noconf}{" "}
  //     <a
  //       href="#"
  //       onClick={this.noConfCandidate.bind(this, this.props.candidate.id)}
  //     >
  //       ↓
  //     </a>{" "}
  //     <br />
  //     <br />
  //     {this.props.candidate.description}
  //     <br />
  //     <br />
  //     <br />
  //   </li>
  // );
}

// Candidates.propTypes = {
//   candidate: PropTypes.object,
//   confCandidate: PropTypes.func,
//   noConfCandidate: PropTypes.func
// };

export default Candidates;
