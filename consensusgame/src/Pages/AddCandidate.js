import React, { Component } from "react";
// import Twit from "twit";
// import { twitter } from "../config.json";
import axios from "axios";
import { apiAddCandidate } from "../config.json";
import plusIcon from "../assets/icons/polls/plus.png";
import { apiPolls } from "../config.json";
import Congratulations from "../Components/Congratulations/Congratulations";

class AddCandidate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      twitterUser: "",
      amountMerits: 0,
      search: "",
      items: [],
      active: false,
      added: false
    };
    this.handleAddCandidate = this.handleAddCandidate.bind(this);
  }

  handleShowForm = () =>
    this.setState(prevState => {
      return { active: !prevState.active };
    });

  updateSearch(e) {
    this.setState({ search: e.target.value });
  }
  handleChangeName(e) {
    this.setState({ name: e.target.value });
  }
  handleChangeDescription(e) {
    this.setState({ description: e.target.value });
  }
  handleChangeTwitterUser(e) {
    this.setState({ twitterUser: e.target.value });
  }
  handleChangeAmountMerits(e) {
    this.setState({ amountMerits: e.target.value });
  }
  handleAddCandidate = async e => {
    const obj = {
      name: this.state.name,
      description: this.state.description,
      twitterUser: this.state.twitterUser,
      confidence: true,
      amountMerits: this.state.amountMerits
    };
    e.preventDefault();
    await axios.post(
      `${apiPolls + "/" + this.props.poll.id + "/user-add-candidate"}`,
      obj
    );
    this.setState({ active: true, added: true });
  };

  handleOk() {
    this.setState({ active: false, added: false });
  }

  render() {
    let filteredTwitterUsers = this.state.items.filter(item => {
      return (
        item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      );
    });

    // const T = new Twit(twitter);
    // const params = {
    //   q: this.state.search,
    //   count: 10
    // };

    // T.get("users/search", params, getData);
    // function getData(err, data, response) {
    //   console.log(data);
    // }
    let showForm;
    this.state.active
      ? !this.state.added
        ? (showForm = (
            <form onSubmit={this.handleAddCandidate}>
              <label>
                Name:
                <input
                  type="text"
                  name={this.state.name}
                  onChange={this.handleChangeName.bind(this)}
                />
              </label>
              <br />
              <label>
                Description:
                <input
                  type="text"
                  description={this.state.description}
                  onChange={this.handleChangeDescription.bind(this)}
                />
              </label>
              <br />
              <label>
                Twitter:
                <input
                  type="text"
                  twitterUser={this.state.twitterUser}
                  onChange={this.handleChangeTwitterUser.bind(this)}
                />
              </label>
              <br />
              <label>
                Merits:
                <input
                  type="number"
                  amountMerits={this.state.amountMerits}
                  onChange={this.handleChangeAmountMerits.bind(this)}
                />
              </label>
              <br />
              <input type="submit" value="Submit" />
            </form>
          ))
        : (showForm = (
            <div>
              <Congratulations handleAddOk={this.handleOk.bind(this)} />
            </div>
          ))
      : null;

    return (
      <React.Fragment>
        <p className="add-new-candidate flex" onClick={this.handleShowForm}>
          <i className="icon">
            <img src={plusIcon} alt="Add New Candidate" />
          </i>
          <span>Add New Candidate</span>
        </p>
        {showForm}

        {/* <ul className="list-unstyled">
          {filteredTwitterUsers.map(item => (
            <li key={item.id} style={{ color: "black" }}>
              <p>{item.name}</p>
            </li>
          ))}
        </ul> */}
      </React.Fragment>
    );
  }
}

export default AddCandidate;
