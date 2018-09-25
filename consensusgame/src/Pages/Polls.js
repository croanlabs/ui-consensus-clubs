import React, { Component } from "react";
import Candidates from "./Candidates";
import PropTypes from "prop-types";
import AddPoll from "./AddPoll";
import Pagination from "../Components/Pagination";
import { Paginate } from "../utils/Paginate";
import { apiPolls } from "../config.json";
import { mockyPolls } from "../config.json";
import axios from "axios";
import "./Polls.scss";

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
  handleAddPoll = async () => {
    const obj = {
      question: "What is the best crypto in Japan?",
      description: "Wowwwwwwwwwww"
    };
    const { data: poll } = await axios.post(
      "http://192.168.99.100:31000/polls/create",
      obj
    );
    const polls = [...this.state.polls, poll];
    this.setState({ polls });
    window.location.reload();
  };

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
      <div className="layout polls">
        <aside className="col">
          <h2>
            {currentPage}/{count}
          </h2>
          {/* List each poll */}
          <ul className="list-unstyled">
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
          <button className="btn btn-primary" onClick={this.handleAddPoll}>
            Add
          </button>
        </aside>

        <section className="col">
          <h1>Candidates</h1>
          <ul className="list-unstyled">
            {polls.map(poll => (
              <li key={poll.id}>
                <Candidates
                  key={poll.id}
                  id={poll.id}
                  poll={poll}
                  isLoggedInOrNot={this.props.isLoggedIn}
                />
              </li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}

Polls.propTypes = {
  polls: PropTypes.array
};

export default Polls;
