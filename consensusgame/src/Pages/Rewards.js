import React, { Component } from "react";
import Card from "../Components/Card/Card";
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
    const colors = ["yellow", "teal", "purple", "red", "green"];
    return (
      <div className="layout rewards">
        <aside className="col">
          <h1 className="lg-vspace">Rewards</h1>
          <h6>Get merit points on completing the rewards</h6>
          {/* Add polls link?? */}
        </aside>

        <section className="col">
          <ul className="md-vspace">
            {rewards.map((reward, index) => (
              <li
                key={reward.points}
                className={`card ${colors[index % colors.length]}`}
              >
                <div className="card-container flex sb">
                  <div className={`circle ${colors[index % colors.length]}`}>
                    {reward.points}
                  </div>
                  <div className="msg">
                    <h3>{reward.title}</h3>
                    <p>{reward.description}</p>
                  </div>
                  <i className="triangle" />
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
