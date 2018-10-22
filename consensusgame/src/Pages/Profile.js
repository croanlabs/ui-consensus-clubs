import React, { Component } from "react";
import axios from "axios";

import Cookies from "universal-cookie";
import CandidateMyPosition from "../Components/Candidate/CandidateMyPosition";
import "./Profile.scss";

class Profile extends Component {
  constructor() {
    super();
    let cookies = new Cookies();
    let user = cookies.get("user");
    if (user) {
      this.state = { user, opinions: [] };
    } else {
      this.state = {};
    }
  }
  async componentDidMount() {
    // TODO move this query to other place, it's being called all the time.
    const { data: opinions } = await axios({
      method: "get",
      baseURL: process.env.REACT_APP_API_URL,
      url: process.env.REACT_APP_API_OPINIONS,
      withCredentials: true
    });
    this.setState({ opinions });
  }

  onCandidateExpanded(idExpandedCandidate) {
    this.setState({ idExpandedCandidate });
  }

  render() {
    const { user, opinions } = this.state;

    return (
      <div className="layout">
        <aside className="col">
          <h1 className="lg-vspace">Profile</h1>
          <h6>Track your performance here</h6>
        </aside>

        <section className="col">
          <div className="user flex">
            <div class="user-pic">
              <img src={user.profileImageUrl} alt="user" className="user-pic" />
            </div>
            <div className="name">
              <h2>{user.name}</h2>
              <h3>@{user.username}</h3>
            </div>
            <div className="user-total-merits">1500 Merits</div>
          </div>

          <div className="candidates">
            <ul className="list-unstyled">
              {opinions.map((opinion, index) => {
                return (
                  <CandidateMyPosition
                    key={opinion.id}
                    corr={index}
                    opinion={opinion}
                    handleOnExpanded={this.onCandidateExpanded.bind(this)}
                    expanded={
                      opinion.candidate.id == this.state.idExpandedCandidate
                    }
                  />
                );
              })}
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default Profile;
