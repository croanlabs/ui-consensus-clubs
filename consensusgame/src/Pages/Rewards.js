import React, { Component } from "react";
import "./Rewards.scss";

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
          <h1 className="lg-vspace">Rewards</h1>
          <h6>Get merit points on completing the rewards</h6>
          {/* Add polls link?? */}
        </aside>

        <section className="col">
          <ul className="md-vspace">
            {rewards.map(reward => (
              <li key={reward.points} className="card teal">
                <div className="card-container flex sb">
                  <div className="circle teal">
                    {reward.points}
                  </div>
                  <div className="msg">
                    <h3>{reward.title}</h3>
                    <p>{reward.description}</p>
                  </div>
                  <i className="triangle"></i>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}

export default Rewards;
