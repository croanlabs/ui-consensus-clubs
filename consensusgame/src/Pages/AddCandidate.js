import React, {Component} from 'react';
import axios from 'axios';
import {apiAddCandidate} from '../config.json';
import plusIcon from '../assets/icons/polls/plus.png';
import {apiPolls} from '../config.json';
import Congratulations from '../Components/Congratulations/Congratulations';
import TwitterUserInput from '../Components/TwitterUserInput/TwitterUserInput';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

class AddCandidate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      twitterUser: '',
      amountMerits: 0,
      search: '',
      items: [],
      active: false,
      added: false,
    };
    this.handleAddCandidate = this.handleAddCandidate.bind(this);
  }

  handleShowForm = () =>
    this.setState(prevState => {
      return {active: !prevState.active};
    });

  updateSearch(e) {
    this.setState({search: e.target.value});
  }

  handleChangeTwitterUser(e) {
    this.setState({twitterUser: e.target.value});
  }

  handleChangeAmountMerits(e) {
    this.setState({amountMerits: e.target.value});
  }

  handleAddCandidate = async e => {
    const obj = {
      name: this.state.name,
      description: this.state.description,
      twitterUser: this.state.twitterUser,
      twitterId: this.state.twitterId,
      profilePictureUrl: this.state.profilePictureUrl,
      confidence: true,
      amountMerits: this.state.amountMerits,
    };
    e.preventDefault();
    await axios.post(
      `${process.env.REACT_APP_API_URL +
        process.env.REACT_APP_API_POLLS +
        '/' +
        this.props.poll.id +
        '/user-add-candidate'}`,
      obj,
    );
    this.setState({active: true, added: true});
  };

  handleCandidateSelected(suggestion) {
    console.log(suggestion);
    this.setState({
      name: suggestion.name,
      twitterUser: suggestion.screen_name,
      profilePictureUrl: suggestion.profile_image_url_https,
      description: suggestion.description,
      twitterId: 15160966,
    });
  }

  handleOk() {
    this.setState({active: false, added: false});
  }

  render() {
    let filteredTwitterUsers = this.state.items.filter(item => {
      return (
        item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      );
    });

    let showForm;
    this.state.active
      ? !this.state.added
        ? (showForm = (
            <form onSubmit={this.handleAddCandidate}>
              <TwitterUserInput
                onSuggestionSelected={this.handleCandidateSelected.bind(this)}
              />
              <div className="slider">
                <Slider />
                <div className="merits-box">
                  <span className="large-text">50</span>{' '}
                  <span className="small-text">Merits</span>
                </div>
              </div>
              <input type="submit" value="Submit" />
            </form>
          ))
        : (showForm = (
            <div>
              <Congratulations handleAddOk={this.handleOk.bind(this)} />
            </div>
          ))
      : null;

    return (
      <React.Fragment>
        <p className="add-new-candidate flex" onClick={this.handleShowForm}>
          <i className="icon">
            <img src={plusIcon} alt="Add New Candidate" />
          </i>
          <span>Add New Candidate</span>
        </p>
        {showForm}

        {/* <ul className="list-unstyled">
          {filteredTwitterUsers.map(item => (
            <li key={item.id} style={{ color: "black" }}>
              <p>{item.name}</p>
            </li>
          ))}
        </ul> */}
      </React.Fragment>
    );
  }
}

export default AddCandidate;
