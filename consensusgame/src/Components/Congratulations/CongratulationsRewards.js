import React, { Component } from "react";
import yellowMeritsAmountIcon from "../../assets/icons/rewards/Oval3@2x.png";
import tealMeritsAmountIcon from "../../assets/icons/rewards/tealoval-icon.png";

import "./CongratulationsRewards.scss";

class CongratulationsRewards extends Component {
  render() {
    const { retweet, count, handleOk } = this.props;

    let numberOfMerits = retweet ? (
      <span>100</span>
    ) : (
      <span>{count * 500}</span>
    );
    let peopleOrPerson = count > 1 ? "people" : "person";
    let message = retweet
      ? "The message has been successfully retweeted!"
      : "DM sent to " +
        count +
        " " +
        peopleOrPerson +
        ", you will receive " +
        count * 500 +
        " merits if they join the app";

    return (
      <div className="congratulations-rewards">
        <div className="card-container congrats">
          <div className="merits-amount-logo">
            <img
              src={retweet ? yellowMeritsAmountIcon : tealMeritsAmountIcon}
              alt="Success"
            />
            {numberOfMerits}
          </div>
          <h2>Congratulations!</h2>
          <p>{message}</p>
        </div>
        <p onClick={handleOk}>
          <button>OK</button>
        </p>
      </div>
    );
  }
}

export default CongratulationsRewards;
