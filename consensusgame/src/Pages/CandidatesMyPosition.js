import React, { Component } from "react";
import CandidateMyPosition from "../Components/Candidate/CandidateMyPosition";
import searchIcon from "../assets/icons/search-icon.png";

class Candidates extends Component {
  constructor() {
    super();
    this.state = { searchValue: "" };
  }

  search(ev) {
    this.setState({ searchValue: ev.target.value });
  }

  render() {
    const count = this.props.candidates ? this.props.candidates.length : 0;

    if (count === 0) return <p>There are no candidates yet.</p>;

    // FIXME Move colors somewhere else
    const colors = ["yellow", "teal", "purple", "red", "green"];

    return (
      <div>
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
        <br />
        {/* If total candidates needed uncomment next line*/}
        <ul className="list-unstyled">
          {this.props.candidates.map((candidate, index) => {
            let search = this.state.searchValue || "";
            const searchLower = search.toLowerCase();
            if (
              candidate.name.toLowerCase().indexOf(searchLower) >= 0 ||
              candidate.twitter_user.toLowerCase().indexOf(searchLower) >= 0
            ) {
              return (
                <CandidateMyPosition
                  corr={index}
                  color={colors[index % colors.length]}
                  candidate={candidate}
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
