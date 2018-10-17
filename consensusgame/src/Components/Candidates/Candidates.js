import React, { Component } from "react";
import Candidate from "../Candidate/Candidate";
import SearchResult from "../Candidate/SearchResult";
import searchIcon from "../../assets/icons/coloursearch-icon.png";
import "./Candidates.scss";

class Candidates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ""
    };
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

    const { colors, candidates } = this.props;

    let searchResults = (
      <ul className="search-results">
        {candidates.map((candidate, index) => {
          let search = this.state.searchValue || "";
          if (search === "") {
            return null;
          }
          const searchLower = search.toLowerCase();
          if (
            candidate.name.toLowerCase().indexOf(searchLower) >= 0 ||
            candidate.twitter_user.toLowerCase().indexOf(searchLower) >= 0
          ) {
            return (
              <SearchResult
                corr={index}
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
    );

    return (
      <div className="candidates">
        <div className="search-area">
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
          {searchResults}
        </div>
        <div className="total-candidates">
          <span>Total Candidates - {count}</span>
        </div>
        <ul className="list-unstyled">
          {/* <InfiniteScroll
            pageStart={0}
            hasMore={true || false}
            loader={
              <div className="loader" key={0}>
                Loading ...
              </div>
            }
            useWindow={false}
          > */}
          {candidates.map((candidate, index) => {
            return (
              <Candidate
                corr={index}
                color={colors[index % colors.length]}
                poll={this.props.poll}
                candidate={candidate}
                handleOnExpanded={this.onCandidateExpanded.bind(this)}
                expanded={candidate.id == this.state.idExpandedCandidate}
              />
            );
          })}
          {/* </InfiniteScroll> */}
        </ul>
      </div>
    );
  }
}

export default Candidates;
