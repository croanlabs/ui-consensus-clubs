import React, { Component } from "react";

class Profile extends Component {
  render() {
    const user = {
      id: "1",
      name: "Yoshie",
      twitter: "@vegangirl",
      merits: "300",
      three_month: "-9.3",
      six_month: "+12.6",
      one_year: "+25.1"
    };

    const ongoingVotes = [
      {
        id: 1,
        candidateName: "@fredwilson",
        voted: true,
        removeYes: true
      },
      {
        id: 2,
        candidateName: "@aridavidpaul",
        voted: true,
        removeYes: false
      },
      {
        id: 3,
        candidateName: "@scamcoin",
        voted: false,
        removeYes: null
      }
    ];

    return (
      <div className="layout">
        <aside className="col">
          <h1>Profile</h1>
          <br />
          <p>Track your performance here</p>
          {/* Add polls link?? */}
        </aside>

        <section className="col">
          <br />
          <h1>{user.name}</h1>
          <h3 className="float-right" style={{ color: "#FFA500" }}>
            {user.merits} Merits
          </h3>
          <p>{user.twitter}</p>

          <br />
          <div className="row">
            <div className="col-sm-4">{user.three_month}%</div>
            <div className="col-sm-4">{user.six_month}%</div>
            <div className="col-sm-4">{user.one_year}%</div>
          </div>
          <div className="row">
            <div className="col-sm-4">3 month</div>
            <div className="col-sm-4">6 month</div>
            <div className="col-sm-4">1 year</div>
          </div>
          <br />
          <br />
          {/* Bottom part */}
          <div className="row">
            <div className="col-sm-4">Current Opinion</div>
            <div className="col-sm-4">Closed Votes</div>
            <div className="col-sm-4">Ongoing Votes</div>
          </div>
        </section>
      </div>
    );
  }
}

export default Profile;
