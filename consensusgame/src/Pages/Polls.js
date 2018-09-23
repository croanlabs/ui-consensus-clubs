import React, { Component } from "react";
import Candidates from "./Candidates";
import PropTypes from "prop-types";
import AddPoll from "./AddPoll";
import Pagination from "../Components/Pagination";
import Tabs from '../Components/Tabs/Tabs';
import { Paginate } from "../utils/Paginate";
import { apiPolls } from "../config.json";
import { mockyPolls } from "../config.json";
import axios from "axios";
import plusIcon from "../assets/icons/polls/plus.png";
import profilePic from "../assets/images/profile/Aripaul@2x.png";
import downArrow from "../assets/icons/polls/down-arrow.png";
import upArrow from "../assets/icons/polls/up-arrow.png";
import searchIcon from "../assets/icons/search-icon.png";
import "./Polls.scss";
// import { Link } from "react-router-dom";

class Polls extends Component {
  constructor() {
    super();
    this.state = {
      polls: [],
      currentPage: 1
    };
  }

  async componentDidMount() {
    const { data: polls } = await axios.get(mockyPolls);
    this.setState({ polls });
  }

  handleAddPoll(poll) {
    let polls = this.state.polls;
    polls.push(poll);
    this.setState({ polls: polls });
  }

  // handleAddPoll = async () => {
  //   const obj = { question: "a", description: "b" };
  //   const { data: poll } = await axios.post(apiPolls, obj);
  //   console.log(poll);
  //   // this.setState({ polls });
  // };

  handleNextPage = page => {
    this.setState({ currentPage: page + 1 });
  };

  handlePreviousPage = page => {
    this.setState({ currentPage: page - 1 });
  };

  render() {
    const { polls: allPolls, currentPage } = this.state;
    const { length: count } = this.state.polls;

    const polls = Paginate(allPolls, currentPage);
    return (
      <div className="layout polls">
        <aside className="col">
            <h2>{currentPage}/3</h2>

            {/* List each poll */}
            <ul className="poll-questions">
              {polls.map(poll => (
                <li key={poll.id}>
                  <h1>
                    {poll.question}
                  </h1>
                </li>
              ))}
            </ul>
            
            <p>
              {/* Arrows for changing displayed polls */}
              <Pagination
                itemCount={count}
                onNextPage={this.handleNextPage}
                onPreviousPage={this.handlePreviousPage}
                currentPage={currentPage}
              />
            </p>
        </aside>
        
        <section className="col">
          <h1>Candidates</h1>
          <p className="add-new-candidate flex">
            <i className="icon"><img src={plusIcon} alt="Add New Candidate" /></i>
            <span>Add New Candidate</span>
          </p>
          <div className="container">
          <Tabs>
            <div label="All Candidates">
            <div className="search-bar">
                <img src={searchIcon} alt="Find" />
                <input type="search" className="find" placeholder="Find Candidate..." />
              </div>
            <p className="total-candidates">Total Candidates - 6</p>
                <ul className="candidates">
              {/* todo: List each candidate */}
                <li className="card yellow">
                  <div className="card-container">
                  <div className="flex-sb">
                    <div className="profile flex">
                      <div className="number">1</div>
                      <div className="image-cropper"><img src={profilePic} alt="Metem" className="profile-pic" /></div>
                      <div className="name">
                        <h2>Meltem Demirors</h2>
                        <h3>@melt_Dem</h3>
                      </div>
                    </div>
                    
                    <div className="rating flex">
                      <div className="up flex"><i><img src={upArrow} alt="Rating Up" /></i><span>15.1k</span></div>
                      <div className="down flex"><i><img src={downArrow} alt="Rating Down" /></i><span>2.8k</span></div>
                    </div>
                    </div>
                    <div className="candidate">
                      <p className="info">
                        Cryptocurrency research. Tweets are our opinion only. 
                        Tweets are for informational purposes and do not represent financial advice.
                      </p>
                      <p>
                        <i><img src={upArrow} alt="Rating Up" /></i>
                      </p>
                      <button>I support @melt_Dem</button>
                      <p className="oppose">
                        <i><img src={downArrow} alt="Rating Down" /></i><span>Do you oppose @melt_Dem</span>
                      </p>
                    </div>
                  </div>
                </li>
                {/* todo: dynamically add color class for each candidate to pick up colors */}
                <li className="card red">
                  <div className="card-container flex-sb">
                    <div className="profile flex">
                      <div className="number">2</div>
                      <div className="image-cropper"><img src={profilePic} alt="Ari Paul" className="profile-pic" /></div>
                      <div className="name">
                        <h2>Ari Paul</h2>
                        <h3>@aridavidpaul</h3>
                      </div>
                    </div>
                    
                    <div className="rating flex">
                      <div className="up flex"><i><img src={upArrow} alt="Rating Up" /></i><span>15.1k</span></div>
                      <div className="down flex"><i><img src={downArrow} alt="Rating Down" /></i><span>2.8k</span></div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div label="My Positions">
              <div className="search-bar">
                <img src={searchIcon} alt="Find" />
                <input type="search" className="find" placeholder="Find Candidate..." />
              </div>
              
              <p className="total-candidates">Total Candidates - 6</p>
              <ul className="candidates">
              {/* todo: List each candidate */}
                <li className="card purple">
                  <div className="card-container flex-sb">
                    <div className="profile flex">
                      <div className="number">1</div>
                      <div className="image-cropper"><img src={profilePic} alt="Metem" className="profile-pic" /></div>
                      <div className="name">
                        <h2>Meltem Demirors</h2>
                        <h3>@melt_Dem</h3>
                      </div>
                    </div>
                    
                    <div className="rating flex">
                      <div className="up flex"><i><img src={upArrow} alt="Rating Up" /></i><span>15.1k</span></div>
                      <div className="down flex"><i><img src={downArrow} alt="Rating Down" /></i><span>2.8k</span></div>
                    </div>
                  </div>
                </li>
                {/* todo: dynamically add color class for each candidate to pick up colors */}
                <li className="card teal">
                  <div className="card-container flex-sb">
                    <div className="profile flex">
                      <div className="number">2</div>
                      <div className="image-cropper"><img src={profilePic} alt="Ari Paul" className="profile-pic" /></div>
                      <div className="name">
                        <h2>Ari Paul</h2>
                        <h3>@aridavidpaul</h3>
                      </div>
                    </div>
                    
                    <div className="rating flex">
                      <div className="up flex"><i><img src={upArrow} alt="Rating Up" /></i><span>15.1k</span></div>
                      <div className="down flex"><i><img src={downArrow} alt="Rating Down" /></i><span>2.8k</span></div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </Tabs>

          </div>
          
        </section>

      </div>
    );
  }
}

Polls.propTypes = {
  polls: PropTypes.array
};

export default Polls;
