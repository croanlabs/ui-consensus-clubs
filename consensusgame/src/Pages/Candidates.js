import React, { Component } from "react";
import Candidate from "../Components/Candidate/Candidate";
import searchIcon from "../assets/icons/coloursearch-icon.png";
import "./Candidates.scss";

class Candidates extends Component {
  constructor() {
    super();
    this.state = { searchValue: "" };
  }

  search(ev) {
    this.setState({ searchValue: ev.target.value });
  }

  onCandidateExpanded(idExpandedCandidate) {
    this.setState({ idExpandedCandidate });
  }

  render() {
    const count = this.props.candidates ? this.props.candidates.length : 0;

    if (count === 0) return <p>There are no candidates yet.</p>;

    const { colors } = this.props;

    return (
      <div className="candidates">
        <div className="search-bar">
          <img src={searchIcon} alt="Find" />
          <input
            value={this.state.searchValue}
            type="search"
            className="find"
            placeholder="Find Candidate..."
            onChange={this.search.bind(this)}
          />
        </div>
        <div className="total-candidates">
          <span>Total Candidates - {count}</span>
        </div>
        <ul className="list-unstyled">
          {this.props.candidates.map((candidate, index) => {
            let search = this.state.searchValue || "";
            const searchLower = search.toLowerCase();
            if (
              candidate.name.toLowerCase().indexOf(searchLower) >= 0 ||
              candidate.twitter_user.toLowerCase().indexOf(searchLower) >= 0
            ) {
              return (
                <Candidate
                  key={candidate.id}
                  corr={index}
                  color={colors[index % colors.length]}
                  poll={this.props.poll}
                  candidate={candidate}
                  handleOnExpanded={this.onCandidateExpanded.bind(this)}
                  expanded={candidate.id == this.state.idExpandedCandidate}
                />
              );
            } else {
              return null;
            }
          })}
        </ul>
      </div>
    );
  }
}

export default Candidates;
