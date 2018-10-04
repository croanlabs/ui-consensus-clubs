import React, { Component } from "react";
import Candidates from "./Candidates";
import CandidatesMyPosition from "./CandidatesMyPosition";
import PropTypes from "prop-types";
import AddPoll from "./AddPoll";
import Pagination from "../Components/Pagination";
import Tabs from "../Components/Tabs/Tabs";
import Congrats from "../Components/Congratulations/Congratulations";
import { Paginate } from "../utils/Paginate";
import { apiPolls } from "../config.json";
import axios from "axios";
import profilePic from "../assets/images/profile/Aripaul@2x.png";
import downArrow from "../assets/icons/polls/down-arrow.png";
import upArrow from "../assets/icons/polls/up-arrow.png";
import searchIcon from "../assets/icons/search-icon.png";
import downTriggerArrow from "../assets/icons/collapse-icon.png";
import "./Polls.scss";
// import { Link } from "react-router-dom";
import AddCandidate from "./AddCandidate";

class Polls extends Component {
  constructor() {
    super();
    this.state = {
      polls: [],
      poll: null,
      currentPage: 1
    };
  }

  async componentDidMount() {
    const { data: polls } = await axios.get(
      `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_POLLS}`
    );
    this.setState({ polls, totalPolls: polls.length, poll: polls[0] });
  }

  handleNextPage = page => {
    let currentPage = (page + 1) % (this.state.totalPolls + 1);
    if (currentPage == 0) {
      currentPage = 1;
    }
    this.setState({ currentPage, poll: this.state.polls[currentPage - 1] });
  };

  handlePreviousPage = page => {
    let currentPage = (page - 1) % (this.state.totalPolls + 1);
    if (currentPage == 0) {
      currentPage = 1;
    }
    this.setState({ currentPage, poll: this.state.polls[currentPage - 1] });
  };

  render() {
    const { polls: allPolls, currentPage } = this.state;
    const { length: count } = this.state.polls;

    const polls = Paginate(allPolls, currentPage);
    return (
      <div className="layout polls">
        <aside className="col">
          <h2>
            {currentPage}
            /3
          </h2>

          {/* List each poll */}
          <ul className="poll-questions">
            {polls.map(poll => (
              <li key={poll.id}>
                <h1>{poll.question}</h1>
              </li>
            ))}
          </ul>

          <p>
            {/* Arrows for changing displayed polls */}
            <Pagination
              itemCount={count}
              onNextPage={this.handleNextPage}
              onPreviousPage={this.handlePreviousPage}
              currentPage={currentPage}
            />
          </p>
        </aside>

        <section className="col">
          <AddCandidate poll={this.state.poll} />
          <div className="container">
            <Tabs>
              <div label="All Candidates">
                <Candidates
                  poll={this.state.poll}
                  candidates={this.state.poll ? this.state.poll.candidates : []}
                />
              </div>
              <div label="My Positions">
                <CandidatesMyPosition
                  pollId={ this.state.poll ? this.state.poll.id : -1 }
                />
              </div>
            </Tabs>
          </div>
        </section>
      </div>
    );
  }
}

Polls.propTypes = {
  polls: PropTypes.array
};

export default Polls;
