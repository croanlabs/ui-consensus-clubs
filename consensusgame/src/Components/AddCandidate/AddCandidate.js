import React, { Component } from "react";
import axios from "axios";
import plusIcon from "../../assets/icons/polls/plus.png";
import cancelButton from "../../assets/icons/remove-icon.png";
import Congratulations from "../Congratulations/Congratulations";
import TwitterUserInput from "../TwitterUserInput/TwitterUserInput";
import MeritsSlider from "../MeritsSlider/MeritsSlider";
import "react-rangeslider/lib/index.css";
import "./AddCandidate.scss";

class AddCandidate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      twitterUser: "",
      amountMerits: 50,
      search: "",
      items: [],
      active: false,
      selected: false,
      added: false
    };
    this.handleAddCandidate = this.handleAddCandidate.bind(this);
  }

  updateMeritsSlider = value => {
    this.setState({ amountMerits: value });
  };

  updateMeritsInput = e => {
    this.setState({ amountMerits: parseInt(e.target.value) });
  };

  handleShowForm = () => {
    this.setState({ active: true });
  };

  handleHideForm = () => {
    this.setState({ active: false, selected: false });
  };

  updateSearch(e) {
    this.setState({ search: e.target.value });
  }

  handleChangeTwitterUser(e) {
    this.setState({ twitterUser: e.target.value });
  }

  handleChangeAmountMerits(e) {
    this.setState({ amountMerits: e.target.value });
  }

  handleAddCandidate = async e => {
    const url =
      process.env.REACT_APP_API_POLLS +
      "/" +
      this.props.poll.id +
      "/user-add-candidate";
    const conf = {
      method: "post",
      baseURL: process.env.REACT_APP_API_URL,
      url,
      withCredentials: true,
      data: {
        name: this.state.name,
        description: this.state.description,
        twitterUser: this.state.twitterUser,
        twitterId: this.state.twitterId,
        profilePictureUrl: this.state.profilePictureUrl,
        confidence: true,
        amountMerits: this.state.amountMerits
      }
    };
    e.preventDefault();
    await axios(conf);
    this.setState({ active: true, added: true });
  };

  handleCandidateSelected(suggestion) {
    console.log(suggestion);
    this.setState({
      name: suggestion.name,
      twitterUser: suggestion.screen_name,
      profilePictureUrl: suggestion.profile_image_url_https,
      description: suggestion.description,
      twitterId: 15160966,
      selected: true
    });
  }

  handleAddOk() {
    this.setState({
      active: false,
      selected: false,
      added: false,
      amountMerits: 50
    });
  }

  chooseAnotherCandidate = () => {
    this.setState({ selected: false });
  };

  render() {
    let addCandidateButton;
    !this.state.active
      ? (addCandidateButton = (
          <p
            className="add-new-candidate-button flex"
            onClick={this.handleShowForm}
          >
            <i className="icon">
              <img src={plusIcon} alt="Add New Candidate" />
            </i>
            <span>Add a new candidate</span>
          </p>
        ))
      : null;
    const suggestTitle = <p>Add a new candidate</p>;
    let showForm;
    this.state.active
      ? this.state.selected
        ? !this.state.added
          ? (showForm = (
              <div className="add-new-candidate-form card">
                <form onSubmit={this.handleAddCandidate}>
                  <img
                    className="cancel-button"
                    src={cancelButton}
                    alt="Cancel"
                    onClick={this.handleHideForm}
                  />
                  {suggestTitle}
                  <div className="selectedTwitterUser">
                    <div className="image-cropper">
                      <img
                        src={this.state.profilePictureUrl}
                        alt="Metem"
                        className="profile-pic"
                      />
                    </div>
                    <div className="name">
                      <h2>{this.state.name}</h2>
                      <h3>@{this.state.twitterUser}</h3>
                    </div>
                  </div>
                  <div className="info">
                    <span>Adjust the slider to set the merit points</span>
                  </div>
                  <div className="slider">
                    <MeritsSlider
                      amountMerits={this.state.amountMerits}
                      passMeritsFromSlider={this.updateMeritsSlider}
                      passMeritsFromInput={this.updateMeritsInput}
                    />
                  </div>
                  <div
                    className="add-candidate-submit"
                    onClick={this.handleAddCandidate}
                  >
                    <span>Add @{this.state.twitterUser}</span>
                  </div>
                  <div
                    className="anotherCandidate"
                    onClick={this.chooseAnotherCandidate}
                  >
                    Choose another candidate
                  </div>
                </form>
              </div>
            ))
          : (showForm = (
              <div className="card">
                <Congratulations
                  userTwitterName={this.state.twitterUser}
                  handleOk={this.handleAddOk.bind(this)}
                  message="added to the
                  list"
                />
              </div>
            ))
        : (showForm = (
            <div className="add-new-candidate-form card">
              <form onSubmit={this.handleAddCandidate}>
                <img
                  className="cancel-button"
                  src={cancelButton}
                  alt="Cancel"
                  onClick={this.handleHideForm}
                />
                {suggestTitle}
                <TwitterUserInput
                  onSuggestionSelected={this.handleCandidateSelected.bind(this)}
                />
              </form>
            </div>
          ))
      : null;

    return (
      <div className="add-candidate">
        {addCandidateButton}
        {showForm}
      </div>
    );
  }
}

export default AddCandidate;
