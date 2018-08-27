import React, { Component } from "react";
import { apiUsers } from "../config.json";

class Score extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  getUsers() {
    fetch(apiUsers)
      .then(res => res.json())
      .then(json => {
        this.setState({
          users: json
        });
      })
      .catch(error => console.log("fetching failed", error));
  }

  componentWillMount() {
    this.getUsers();
  }

  render() {
    const { users } = this.state;
    return (
      <div className="row margin-minus">
        <div className="col-6 polls-left" style={{ padding: "60px" }}>
          <h1>Score board</h1>
          <br />
          <p>Track the performance of other users</p>
          {/* Add polls link?? */}
        </div>

        <div className="col-6 polls-right">
          <ul className="list-unstyled">
            {users.map(user => (
              <li key={user.id}>
                <br />
                <h2>{user.twitter}</h2>
                <p className="float-right" style={{ color: "#FFA500" }}>
                  {user.merits} Merits
                </p>
                <br />
                <div className="row">
                  <div className="col-sm-4">3 month</div>
                  <div className="col-sm-4">6 month</div>
                  <div className="col-sm-4">1 year</div>
                </div>
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

export default Score;
