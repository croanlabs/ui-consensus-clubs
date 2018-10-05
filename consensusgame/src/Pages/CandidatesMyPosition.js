import React, { Component } from "react";
import axios from "axios";
import CandidateMyPosition from "../Components/Candidate/CandidateMyPosition";
import searchIcon from "../assets/icons/coloursearch-icon.png";
import "./Candidates.scss";

class CandidatesMyPosition extends Component {
  constructor() {
    super();
    this.state = { searchValue: "", opinions: [] };
  }

  async componentDidMount() {
    // TODO move this query to other place, it's being called all the time.
    const { data: resp } = await axios({
      method: "get",
      baseURL: process.env.REACT_APP_API_URL,
      url: process.env.REACT_APP_API_OPINIONS,
      withCredentials: true
    });
    await this.setState({ opinions: resp.rows });
  }

  search(ev) {
    this.setState({ searchValue: ev.target.value });
  }

  render() {
    const { length: count } = this.state.opinions;
    const { colors } = this.props;

    const opinionsSelectedPoll = this.state.opinions.filter(
      opinion => opinion.candidate.poll_id == this.props.pollId
    );

    if (opinionsSelectedPoll.length === 0)
      return <p>You have not voiced any opinion on this poll yet.</p>;

    const resultOpinions = opinionsSelectedPoll.filter(opinion => {
      let candidate = opinion.candidate;
      let search = this.state.searchValue || "";
      const searchLower = search.toLowerCase();
      return (
        candidate.poll_id == this.props.pollId &&
        (candidate.name.toLowerCase().indexOf(searchLower) >= 0 ||
          candidate.twitter_user.toLowerCase().indexOf(searchLower) >= 0)
      );
    });

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
          {/* FIXME count should be changed to candidates of my position */}
          <span>Total Candidates - {count}</span>
        </div>
        <ul className="list-unstyled">
          {resultOpinions.map((opinion, index) => {
            return (
              <CandidateMyPosition
                key={opinion.id}
                corr={index}
                color={colors[index % colors.length]}
                opinion={opinion}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CandidatesMyPosition;
