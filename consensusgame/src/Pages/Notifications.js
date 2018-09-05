import React, { Component } from "react";

class Notifications extends Component {
  render() {
    const notifications = [
      {
        title: "Congrates! Successful Consensus!",
        description: "@cburniske is up 25.2%",
        time: "3 Aug"
      },
      {
        title: "New Poll",
        description: "It is a great time to make an impact",
        time: "10 Aug"
      },
      {
        title: "Time to vote",
        description: "Remove @scamcoin?",
        time: "12 Aug"
      },
      {
        title: "Congrates! Successful Consensus!",
        description: "@cburniske is up 25.2%",
        time: "14 Aug"
      },
      {
        title: "Oops! Weak Consensus",
        description: "@kalesamani is down 13.6%",
        time: "19 Aug"
      },
      {
        title: "Referral Success",
        description: "Seamus has joined - 500 merits earned",
        time: "26 Aug"
      }
    ];
    return (
      <div className="layout">
        <aside className="col">
          <h1>Notifications</h1>
          <br />
          <p>Stay updated about your recent activities</p>
          {/* Add polls link?? */}
        </aside>

        <section className="col">
          <ul className="list-unstyled">
            {notifications.map(notification => (
              <li key={notification.title}>
                <br />
                <h3>{notification.title}</h3>
                <p>{notification.description}</p>
                <p className="float-right" style={{ color: "#66CDAA" }}>
                  {notification.time}
                </p>
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

export default Notifications;
