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
    const { data: polls } = await axios.get(
      "http://www.mocky.io/v2/5b93b7fd32000061007a6617"
    );
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
  //   this.setState({ polls });
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
      <div className="layout polls">
        <aside className="col">
          <h2>
            {currentPage}
            /3
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
        </aside>

        <section className="col">
          <h1>Candidates</h1>

          <ul className="list-unstyled">
            {polls.map(poll => (
              <li key={poll.id}>
                <Candidates key={poll.id} id={poll.id} poll={poll} />
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
