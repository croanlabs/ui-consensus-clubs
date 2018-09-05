import React, { Component } from "react";
import Card from "../Components/Card/Card";

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
      <div className="layout">
        <aside className="col">
          <h1>Rewards</h1>
          <br />
          <p>Get merit points on completing the rewards</p>
          {/* Add polls link?? */}
        </aside>

        <section className="col">
          <Card />
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
        </section>
      </div>
    );
  }
}

export default Rewards;
