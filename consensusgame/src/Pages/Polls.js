import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Candidates from "../Components/Candidates/Candidates";
import CandidatesMyPosition from "../Components/Candidates/CandidatesMyPosition";
import AddPoll from "../Components/AddPoll/AddPoll";
import AddCandidate from "../Components/AddCandidate/AddCandidate";
import Pagination from "../Components/Pagination/Pagination";
import Tabs from "../Components/Tabs/Tabs";
import { Paginate } from "../utils/Paginate";
import { apiPolls } from "../config.json";
import "./Polls.scss";

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
    const colors = ["yellow", "teal", "purple", "red", "green", "blue"];

    return (
      <div className="layout polls">
        <aside className="col">
          <h2>
            {currentPage}/{count}
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
                  colors={colors}
                />
              </div>
              <div label="My Positions">
                <CandidatesMyPosition
                  pollId={this.state.poll ? this.state.poll.id : -1}
                  colors={colors}
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
