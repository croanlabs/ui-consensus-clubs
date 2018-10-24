import React, { Component } from "react";
import TwitterUserInput from "../Components/TwitterUserInput/TwitterUserInput";
import Congratulations from "../Components/Congratulations/Congratulations";
import cancelButton from "../assets/icons/rewards/cancel-button@2x.png";
import "./Rewards.scss";
import { throws } from "assert";

class Rewards extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      twitterUser: "",
      search: "",
      retweet: true,
      allSelectedUsers: []
    };
    this.handleDirectMessage = this.handleDirectMessage.bind(this);
  }

  onChange(event, { newValue }) {
    this.setState({
      value: newValue
    });
  }

  showRetweet() {
    this.setState({ retweet: true });
  }
  showDM() {
    this.setState({ retweet: false });
  }

  updateSearch(e) {
    this.setState({ search: e.target.value });
  }

  chooseAnotherCandidate = () => {
    this.setState({ selected: false });
  };

  handleCandidateSelected(suggestion) {
    let allSelectedUsers = this.state.allSelectedUsers;
    allSelectedUsers.push(suggestion.screen_name);

    this.setState({ allSelectedUsers });

    // clear the value
  }

  removeSelectedUser() {
    console.log("remove this user");
  }

  handleDirectMessage() {
    console.log("DM");
  }

  handleAddOk() {
    this.setState({
      active: false,
      selected: false,
      added: false
    });
  }

  render() {
    const { retweet, allSelectedUsers } = this.state;
    const colors = ["yellow", "teal", "purple", "red", "green", "blue"];

    const rewards = [
      {
        id: 1,
        points: 100,
        title: "Retweet Bonus",
        description:
          "Download consensus games to solve problems and earn airdrop prizes!"
      },
      {
        id: 2,
        points: 500,
        title: "Direct Message",
        description:
          "Download consensus games to solve problems and earn airdrop prizes!"
      }
    ];

    let selectedTwitterUsers = (
      <ul className="selected-users">
        {allSelectedUsers.map(selectedUser => (
          <li>
            <span>{selectedUser}</span>
            <img
              src={cancelButton}
              alt="cancel-buton"
              className="cancel-button"
              onClick={this.removeSelectedUser}
            />
          </li>
        ))}
      </ul>
    );

    let rewardsDetails = retweet ? (
      <React.Fragment>
        <div className="reward-each-detail">
          <span className="yellow">100 Merits</span>
          <h1>Tell Your Twitter Followers</h1>
          <p>
            Download consensus games to solve problems and earn airdrop prizes!
          </p>
        </div>
        <div className="rewards-button">
          <button>Retweet Now</button>
        </div>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <div className="reward-each-detail">
          <span className="teal">500 Merits</span>
          <h1>DM Your Twitter Followers</h1>
          <p>
            Download consensus games to solve problems and earn airdrop prizes!
          </p>
        </div>
        <div className="rewards-button">
          {selectedTwitterUsers}
          <TwitterUserInput
            onSuggestionSelected={this.handleCandidateSelected.bind(this)}
            placeholder=" Add names here"
            searchImg="white"
          />
          <button>Direct Message Now</button>
        </div>
      </React.Fragment>
    );

    return (
      <div className="rewards layout">
        <aside className="col">
          <h1 className="lg-vspace">Rewards</h1>
          <h6>Get merit points on completing the rewards</h6>
          <ul className="md-vspace">
            {rewards.map((reward, index) => (
              <li
                key={reward.points}
                className={`card ${colors[index % colors.length]}`}
                onClick={
                  reward.id == 1
                    ? this.showRetweet.bind(this)
                    : this.showDM.bind(this)
                }
              >
                <div className="card-container flex sb">
                  <div className={`circle ${colors[index % colors.length]}`}>
                    {reward.points}
                  </div>
                  <div className="msg">
                    <h2>{reward.title}</h2>
                    <p>{reward.description}</p>
                  </div>
                  <i className="triangle" />
                </div>
              </li>
            ))}
          </ul>
        </aside>

        <section className="col">
          <div className="rewards-details">{rewardsDetails}</div>
        </section>
      </div>
    );
  }
}

export default Rewards;
