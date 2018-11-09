import React, { Component } from 'react';
import axios from 'axios';

import Cookies from 'universal-cookie';
import CandidateMyPosition from '../Components/Candidate/CandidateMyPosition';
import './Profile.scss';

class Profile extends Component {
  constructor() {
    super();
    let cookies = new Cookies();
    let user = cookies.get('user');
    if (user) {
      this.state = { user, opinions: [] };
    } else {
      this.state = {};
    }
  }
  async componentDidMount() {
    // TODO move this query to other place, it's being called all the time.
    const { data: opinions } = await axios({
      method: 'get',
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
    const colors = ['yellow', 'teal', 'purple', 'red', 'green', 'blue'];

    return (
      <div className="layout">
        <aside className="col">
          <h1 className="lg-vspace">Profile</h1>
          <h6>Track your performance here</h6>
        </aside>

        <section className="profile col">
          <div className="background-white">
            <div className="user flex">
              <div class="user-info flex">
                <div class="user-pic">
                  <img
                    src={user.profileImageUrl}
                    alt="user"
                    className="user-picture"
                  />
                </div>
                <div className="name">
                  <h2>{user.name}</h2>
                  <h3>@{user.username}</h3>
                  <div className="user-total-merits">1500 Merits</div>
                </div>
              </div>
              <div className="merits-rate">
                <span>Last 24 Hrs</span>
                <p>+0.18%</p>
              </div>
            </div>
          </div>

          <div className="staked-candidates">
            {opinions.length > 0 ? (
              <ul className="list-unstyled">
                {opinions.map((opinion, index) => {
                  <div>
                    <span>aaa</span>
                    <CandidateMyPosition
                      key={opinion.id}
                      color={colors[index % colors.length]}
                      corr={index}
                      opinion={opinion}
                      handleOnExpanded={this.onCandidateExpanded.bind(this)}
                      expanded={
                        opinion.candidate.id == this.state.idExpandedCandidate
                      }
                    />
                  </div>;
                })}
              </ul>
            ) : (
              <p>No opinion yet</p>
            )}
          </div>
        </section>
      </div>
    );
  }
}

export default Profile;
