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
    const { length: count } = this.props.poll.candidates;

    if (count === 0) return <p>There are no candidates yet.</p>;

    return (
      <div>
        <AddCandidate addCandidate={this.handleAddCandidate.bind(this)} />
        <br />
        <h3 style={{ color: "black" }}>
          <strong>{count}</strong> candidates
        </h3>
        <ul className="list-unstyled">
          {this.props.poll.candidates.map(candidate => (
            <li key={candidate.id}>
              <p>{candidate.id} - {candidate.name}</p>
              <p>{candidate.twitter}</p>
              <p>↑ {candidate.confidence} ↓{candidate.noconfidence}</p>
              <button>More info</button>
            </li>
          ))}
        </ul>
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
