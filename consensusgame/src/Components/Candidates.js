import React, { Component } from "react";
import AddCandidate from "./AddCandidate";
// import PropTypes from "prop-types";

class Candidates extends Component {
  // confCandidate(id) {
  //   this.props.onConf(id);
  // }

  // noConfCandidate(id) {
  //   this.props.onNoConf(id);
  // }

  handleAddCandidate(candidate) {
    let candidates = this.props.poll.candidates;
    candidates.push(candidate);
    this.setState({ candidates: candidates });
  }

  render() {
    return (
      <div>
        <AddCandidate addCandidate={this.handleAddCandidate.bind(this)} />
        <br />
        <br />
        {this.props.poll.candidates.map(candidate => (
          <div>
            {candidate.id} - {candidate.name}
            <br />
            {candidate.twitter}
            <br />
            <br />↑ {candidate.confidence} ↓{candidate.noconfidence}
            <br />
            <button>More info</button>
            <br />
            <br />
          </div>
        ))}
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
