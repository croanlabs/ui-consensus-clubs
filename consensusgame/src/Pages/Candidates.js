import React, {Component} from 'react';
import AddCandidate from './AddCandidate';
import Candidate from '../Components/Candidate/Candidate';

class Candidates extends Component {
  handleAddCandidate(candidate) {
    let candidates = this.props.poll.candidates;
    candidates.push(candidate);
    this.setState({candidates: candidates});
  }

  render() {
    const count = this.props.poll ? this.props.poll.candidates.length : 0;

    if (count === 0) return <p>There are no candidates yet.</p>;

    return (
      <div>
        <br />
        {/*<p className="total-candidates">Total Candidates - {count}</p> */}
        <ul className="list-unstyled">
          {this.props.poll.candidates.map((candidate, index) => (
            <Candidate corr={index} candidate={candidate} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Candidates;
