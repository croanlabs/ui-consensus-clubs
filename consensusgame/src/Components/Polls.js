import React, { Component } from "react";
import Candidates from "./Candidates";
import PropTypes from "prop-types";

class Polls extends Component {
  render() {
    return (
      <div className="row margin-minus">
        <div className="col polls-left">
          {this.props.polls.map(poll => (
            <div>
              <p>id: {poll.id}</p>
              <strong>{poll.question}</strong>
              <br />
              category: {poll.category}
              <br />
              description: {poll.description}
              <br />
              <br />
            </div>
          ))}
        </div>
        <div className="col polls-right">
          {this.props.polls.map(poll => (
            <div>
              <h5>
                <a href="#">Trend</a>
              </h5>
              <h1>Candidates</h1>
              <br />
              <Candidates key={poll.id} id={poll.id} poll={poll} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Polls.propTypes = {
  polls: PropTypes.array
};

export default Polls;
