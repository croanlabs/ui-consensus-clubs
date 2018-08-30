import React, { Component } from "react";
import Candidates from "./Candidates";
import PropTypes from "prop-types";
import AddPoll from "./AddPoll";
import Pagination from "./Pagination";
import { Paginate } from "../utils/Paginate";
import { apiPolls } from "../config.json";
import axios from "axios";
// import { Link } from "react-router-dom";

class Polls extends Component {
  constructor() {
    super();
    this.state = {
      polls: [],
      currentPage: 1
    };
  }

  async componentDidMount() {
    const { data: polls } = await axios.get(apiPolls);
    this.setState({ polls });
  }

  handleAddPoll(poll) {
    let polls = this.state.polls;
    polls.push(poll);
    this.setState({ polls: polls });
  }

  // handleAddPoll = async () => {
  //   const obj = { question: "a", description: "b" };
  //   const { data: poll } = await axios.post(apiPolls, obj);
  //   console.log(poll);
  //   // this.setState({ polls });
  // };

  handleNextPage = page => {
    this.setState({ currentPage: page + 1 });
  };

  handlePreviousPage = page => {
    this.setState({ currentPage: page - 1 });
  };

  render() {
    const { polls: allPolls, currentPage } = this.state;
    const { length: count } = this.state.polls;

    const polls = Paginate(allPolls, currentPage);
    return (
      <div className="row margin-minus">
        <div className="col polls-left">
          <h4>{currentPage} / 3</h4>
          <br />

          {/* List each poll */}
          <ul className="list-unstyled">
            {polls.map(poll => (
              <li key={poll.id}>
                <h1>
                  <strong>{poll.question}</strong>
                </h1>
                <br />
                <br />
              </li>
            ))}
          </ul>
          <br />
          <br />

          {/* Arrows for changing displayed polls */}
          <Pagination
            itemCount={count}
            onNextPage={this.handleNextPage}
            onPreviousPage={this.handlePreviousPage}
            currentPage={currentPage}
          />
          <br />
          <br />

          {/* Add Poll button */}
          <AddPoll addPoll={this.handleAddPoll.bind(this)} />
        </div>

        <div className="col polls-right">
          <ul className="list-unstyled">
            {polls.map(poll => (
              <li key={poll.id}>
                <h5>
                  <a href="#">Trend</a>
                </h5>
                <h1>Candidates</h1>
                <br />
                <Candidates key={poll.id} id={poll.id} poll={poll} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

Polls.propTypes = {
  polls: PropTypes.array
};

export default Polls;
