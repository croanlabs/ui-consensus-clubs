import React, {Component} from 'react';
import AddCandidate from './AddCandidate';
import Candidate from '../Components/Candidate/Candidate';

class Candidates extends Component {
  handleAddCandidate(candidate) {
    let candidates = this.props.candidates;
    candidates.push(candidate);
    this.setState({candidates: candidates});
  }

  render() {
    const count = this.props.candidates ? this.props.candidates.length : 0;

    if (count === 0) return <p>There are no candidates yet.</p>;
    const colors = ['yellow', 'teal', 'purple', 'red', 'green'];

    return (
      <div>
        <br />
        {/* If total candidates needed uncomment next line*/}
        {/*<p className="total-candidates">Total Candidates - {count}</p> */}
        <ul className="list-unstyled">
          {this.props.candidates.map((candidate, index) => (
            <Candidate
              corr={index}
              color={colors[index % colors.length]}
              candidate={candidate}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Candidates;
