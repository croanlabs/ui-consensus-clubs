import React, { Component } from "react";
import AddCandidate from "./AddCandidate";
// import PropTypes from "prop-types";
import axios from "axios";
import { apiAddCandidate } from "../config.json";
import StakeMerits from "./StakeMerits";

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

    if (count === 0) return <p>There are no candidates yet.</p>;

    return (
      <div>
        <AddCandidate onClick={this.handleAddCandidate} />

        <br />
        <h3 style={{ color: "black" }}>
          <strong>{count}</strong> candidates
        </h3>
        <br />
        <ul className="list-unstyled">
          {this.props.poll.candidates.map(candidate => (
            <li key={candidate.id}>
              {candidate.id + 1} - {candidate.name}
              <br />
              {candidate.twitter_user}
              <br />
              <br />↑ {candidate.total_tokens_confidence} ↓
              {candidate.total_tokens_no_confidence}
              <br />
              <br />
              <StakeMerits shown={true} />
              <br />
              <br />
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
