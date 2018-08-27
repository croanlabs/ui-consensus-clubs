import React, { Component } from "react";

class Rewards extends Component {
  render() {
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
      },
      {
        points: 250,
        title: "Retweet Bonus",
        description:
          "Download consensus games to solve problems and earn airdrop prizes!"
      },
      {
        points: 250,
        title: "Retweet Bonus",
        description:
          "Download consensus games to solve problems and earn airdrop prizes!"
      },
      {
        points: 250,
        title: "Retweet Bonus",
        description:
          "Download consensus games to solve problems and earn airdrop prizes!"
      }
    ];
    return (
      <div className="row margin-minus">
        <div className="col-6 polls-left" style={{ padding: "60px" }}>
          <h1>Rewards</h1>
          <br />
          <p>Get merit points on completing the rewards</p>
          {/* Add polls link?? */}
        </div>

        <div className="col-6 polls-right">
          <ul className="list-unstyled">
            {rewards.map(reward => (
              <li key={reward.points}>
                <br />
                <h1
                  className="float-left"
                  style={{ color: "#66CDAA", margin: "0 20px 0 0" }}
                >
                  {reward.points}
                </h1>
                <h3>{reward.title}</h3>
                <p>{reward.description}</p>

                <br />
                <br />
                <br />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Rewards;
