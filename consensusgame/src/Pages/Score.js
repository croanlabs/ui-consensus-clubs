import React, { Component } from "react";
import { apiUsers } from "../config.json";
import "./Score.scss";

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
      <div className="layout score">
        <aside className="col">
          <h1 className="lg-vspace">Score board</h1>
          <h6>Track the performance of other users</h6>
          {/* Add polls link?? */}
        </aside>

        {/* <section className="col">
          <ul className="list-unstyled">
            {users.map(user => (
              <li key={user.id}>
                <h2>{user.twitter}</h2>
                <p style={{ color: "#FFA500" }}>
                  {user.merits} Merits
                </p>
                <div className="card flex sb">
                  <div>3 month</div>
                  <div>6 month</div>
                  <div>1 year</div>
                </div>
                <br />
              </li>
            ))}
          </ul>
        </section> */}
        <section className="col">
          <ul className="md-vspace">
            {/* <li className="card purple"> */}
            <div className="card-container">
              <h2 className="coming-soon">Coming Soon</h2>
            </div>
            {/* </li> */}
            {/* <li className="card teal">
              <div className="card-container">
                <h2 className="coming-soon">Coming Soon</h2>
              </div>
            </li>
            <li className="card green">
              <div className="card-container">
                <h2 className="coming-soon">Coming Soon</h2>
              </div>
            </li> */}
          </ul>
        </section>
      </div>
    );
  }
}

export default Score;
