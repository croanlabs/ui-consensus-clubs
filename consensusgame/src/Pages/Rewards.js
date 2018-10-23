import React, { Component } from "react";
import TwitterUserInput from "../Components/TwitterUserInput/TwitterUserInput";
import Congratulations from "../Components/Congratulations/Congratulations";
import "./Rewards.scss";
import { throws } from "assert";

class Rewards extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      description: "",
      twitterUser: "",
      search: "",
      items: [],
      active: false,
      selected: false,
      added: false,
      retweet: true
    };
    this.handleDirectMessage = this.handleDirectMessage.bind(this);
  }

  changeRewardsDetail() {
    this.setState({ retweet: false });
  }

  updateSearch(e) {
    this.setState({ search: e.target.value });
  }

  handleChangeTwitterUser(e) {
    this.setState({ twitterUser: e.target.value });
  }

  chooseAnotherCandidate = () => {
    this.setState({ selected: false });
  };

  handleCandidateSelected(suggestion) {
    console.log(suggestion);
    this.setState({
      name: suggestion.name,
      twitterUser: suggestion.screen_name,
      profilePictureUrl: suggestion.profile_image_url_https,
      description: suggestion.description,
      twitterId: 15160966,
      selected: true
    });
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
    const colors = ["yellow", "teal", "purple", "red", "green", "blue"];

    const rewards = [
      {
        points: 100,
        title: "Retweet Bonus",
        description:
          "Download consensus games to solve problems and earn airdrop prizes!"
      },
      {
        points: 500,
        title: "Direct Message",
        description:
          "Download consensus games to solve problems and earn airdrop prizes!"
      }
    ];

    let rewardsDetails = this.state.retweet ? (
      <React.Fragment>
        <div className="reward-each-detail">
          <span>100 Merits</span>
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
          <span>500 Merits</span>
          <h1>DM Your Twitter Followers</h1>
          <p>
            Download consensus games to solve problems and earn airdrop prizes!
          </p>
        </div>
        <div className="rewards-button">
          <TwitterUserInput
            onSuggestionSelected={this.handleCandidateSelected.bind(this)}
            placeholder=" Add names here"
          />
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
                onClick={this.changeRewardsDetail.bind(this)}
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
