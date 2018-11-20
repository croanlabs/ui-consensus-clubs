import React, { Component } from 'react';
import Candidate from '../Candidate/Candidate';
import SearchResult from '../Candidate/SearchResult';
import searchIcon from '../../assets/icons/coloursearch-icon.png';
import './Candidates.scss';

class Candidates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      items: 10,
      loadingState: false
    };
  }

  search(ev) {
    this.setState({ searchValue: ev.target.value });
  }

  onCandidateExpanded(idExpandedCandidate) {
    this.setState({ idExpandedCandidate });
  }

  handleScroll = e => {
    const node = e.target;
    const bottom = node.scrollHeight - node.scrollTop <= node.clientHeight;
    if (bottom) {
      const count = this.props.candidates ? this.props.candidates.length : 0;
      if (this.state.items < count) {
        this.loadMoreItems();
      }
    }
  };

  loadMoreItems() {
    this.setState({ loadingState: true });
    // you may call ajax instead of setTimeout
    setTimeout(() => {
      this.setState({ items: this.state.items + 5, loadingState: false });
    }, 3000);
  }

  render() {
    const { colors, candidates, loadingState } = this.props;

    const count = this.props.candidates ? this.props.candidates.length : 0;

    if (count === 0) return <p>There are no candidates yet.</p>;

    let searchResults = (
      <ul className="search-results">
        {candidates.map((candidate, index) => {
          let search = this.state.searchValue || '';
          if (search === '') {
            return null;
          }
          const searchLower = search.toLowerCase();
          if (
            candidate.name.toLowerCase().indexOf(searchLower) >= 0 ||
            candidate.twitterUser.toLowerCase().indexOf(searchLower) >= 0
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
        <div className="white-box">
          <div className="total-candidates">
            <span>Total Candidates - {count}</span>
          </div>
          <div class="scroll" onScroll={this.handleScroll}>
            <ul className="list-unstyled">
              {candidates.slice(0, this.state.items).map((candidate, index) => {
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
              {loadingState ? (
                <p className="loading">loading More Items..</p>
              ) : (
                ''
              )}
              {/* <button onClick={this.showMore}>show more</button> */}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Candidates;
