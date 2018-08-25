import React, { Component } from "react";
import Candidates from "./Candidates";
import PropTypes from "prop-types";
import AddPoll from "./AddPoll";
import Pagination from "./Pagination";
import { Paginate } from "../utils/Paginate";
// import { Link } from "react-router-dom";

class Polls extends Component {
  constructor() {
    super();
    this.state = {
      polls: [],
      currentPage: 1
      // isLaded: false
    };
  }

  getPolls() {
    fetch("http://www.mocky.io/v2/5b7a961334000050008ed53e")
      .then(res => res.json())
      .then(json => {
        this.setState({
          // isLoaded: true,
          polls: json
        });
      })
      .catch(error => console.log("fetching failed", error));
  }

  // componentDidMount() {
  //   this.getPolls();
  // }

  componentWillMount() {
    this.getPolls();
  }

  handleAddPoll(poll) {
    let polls = this.state.polls;
    polls.push(poll);
    this.setState({ polls: polls });
  }

  // handleChangePage = page => {
  //   this.setState({ currentPage: page });
  // };

  handleNextPage = page => {
    this.setState({ currentPage: page + 1 });
  };

  handlePreviousPage = page => {
    this.setState({ currentPage: page - 1 });
  };

  // handleConfCandidate(id) {
  //   console.log("You have supported!");
  //   //let investors = this.state.investors
  //   //let index = investors.findIndex(x => x.id === id)
  //   // add uprate or downrate plus 1k
  //   //this.setState({investors.uprate: investors.uprate + 1})
  // }

  // handleNoConfCandidate(id) {
  //   console.log("You have UNsupported!");
  // }

  render() {
    const { isLoaded, polls: allPolls, currentPage } = this.state;
    const { length: count } = this.state.polls;

    // if (!isLoaded) {
    //   return <p>Loading...</p>;
    // } else {

    const polls = Paginate(allPolls, currentPage);
    return (
      <div className="row margin-minus">
        <div className="col polls-left" style={{ padding: "60px" }}>
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
                {/* category: {poll.category}
                <br />
                description: {poll.description} */}
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
            // onChangePage={this.handleChangePage}
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
