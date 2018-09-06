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
          <h1 className="lg-vspace">Profile</h1>
          <h6>Track your performance here</h6>
          {/* Add polls link?? */}
        </aside>

        <section className="col">
          <h1>{user.name}</h1>

          <div className="card yellow">
            <div className="card-container">
              <h3 className="float-right" style={{ color: "#FFA500" }}>
                {user.merits} Merits
              </h3>
              <p>{user.twitter}</p>

              <div className="flex sb">
                <div>{user.three_month}%</div>
                <div>{user.six_month}%</div>
                <div>{user.one_year}%</div>
              </div>

              <div className="flex sb">
                <div>3 month</div>
                <div>6 month</div>
                <div>1 year</div>
              </div>

              {/* Bottom part */}
              <div className="flex sb">
                <div>Current Opinion</div>
                <div>Closed Votes</div>
                <div>Ongoing Votes</div>
              </div>

            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Profile;
