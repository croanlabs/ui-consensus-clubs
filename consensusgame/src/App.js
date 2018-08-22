import React, { Component } from "react";
import "./App.css";
import Polls from "./Components/Polls";
import AddPoll from "./Components/AddPoll";
import NavBar from "./Components/NavBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      polls: []
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

  // handleAddCandidate(candidate) {
  //   let candidates = this.state.candidates;
  //   candidates.push(candidate);
  //   this.setState({ candidates: candidates });
  //   //console.log(investor)
  // }

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
    const { isLoaded, polls } = this.state;

    // if (!isLoaded) {
    //   return <p>Loading...</p>;
    // } else {
    return (
      <React.Fragment>
        <div className="navbar">
          <NavBar />
        </div>

        <main className="container polls">
          <Polls key={polls.id} polls={polls} />
          <AddPoll addPoll={this.handleAddPoll.bind(this)} />
        </main>
      </React.Fragment>
    );
  }
}
// }

export default App;
