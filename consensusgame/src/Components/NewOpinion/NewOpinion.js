import React, { Component } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import infoIcon from "../../assets/icons/info-icon.png";
import downArrow from "../../assets/icons/polls/down-arrow.png";
import upArrow from "../../assets/icons/polls/up-arrow.png";
import MeritsSlider from "../MeritsSlider/MeritsSlider";
import Congratulations from "../Congratulations/Congratulations";
import SignupPopup from "../SignupPopup/SignupPopup";
import "react-rangeslider/lib/index.css";
import "./NewOpinion.scss";

class NewOpinion extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleSignupClick = this.handleSignupClick.bind(this);
    this.handleOutsideCloseSignup = this.handleOutsideCloseSignup.bind(this);
    this.handleStakeCandidate = this.handleStakeCandidate.bind(this);

    let cookies = new Cookies();
    // let user = cookies.get("user");
    this.state = {
      amountMerits: 50,
      confidence: true,
      staked: false,
      user: cookies.get("user"),
      getStartedMenuOpen: false
    };
  }

  updateMeritsSlider = value => {
    this.setState({ amountMerits: value });
  };

  updateMeritsInput = e => {
    this.setState({ amountMerits: parseInt(e.target.value, 10) });
  };

  handleStakeCandidate = async e => {
    const conf = {
      method: "post",
      baseURL: process.env.REACT_APP_API_URL,
      url:
        process.env.REACT_APP_API_POLLS +
        "/" +
        this.props.poll.id +
        "/candidates/" +
        this.props.candidate.id +
        "/express-opinion",
      withCredentials: true,
      data: {
        commitmentMerits: this.state.amountMerits,
        confidence: this.state.confidence
      }
    };
    e.preventDefault();
    await axios(conf);
    this.setState({ staked: true });
  };

  onClickChangeConfidence() {
    this.setState({ confidence: !this.state.confidence });
  }

  handleStakeOk = () => {
    this.props.expandOrContract();
    this.setState({
      amountMerits: 50,
      confidence: true,
      staked: false
    });
  };

  handleSignupClick() {
    this.setState(prevState => ({
      getStartedMenuOpen: !prevState.getStartedMenuOpen
    }));
  }

  handleOutsideCloseSignup(e) {
    // ignore clicks on the component itself
    if (this.signup.contains(e.target)) {
      return;
    }
    this.handleSignupClick();
  }

  onSuccess = async response => {
    const token = response.headers.get("x-auth-token");
    if (token) {
      // Add cookies for token and user info
      let cookies = new Cookies();
      cookies.set("token", token, {
        // FIXME Set httpOnly.
        //httpOnly: true,
        domain: process.env.REACT_APP_CONSENSUS_CLUBS_DOMAIN,
        path: "/"
      });

      const user = await response.json();
      cookies.set("user", JSON.stringify(user), { httpOnly: false, path: "/" });

      this.setState({ user });
      window.location = "/";
    }
  };

  onFailed = error => {
    // TODO
    alert(error);
  };

  render() {
    const { candidate } = this.props;

    let getStartedMenu;
    this.state.getStartedMenuOpen
      ? (getStartedMenu = (
          <SignupPopup
            setRef={signup => {
              this.signup = signup;
            }}
            onFailed={this.onFailed}
            onSuccess={this.onSuccess}
            handleOutsideCloseSignup={this.handleOutsideCloseSignup}
            handleSignupClick={this.handleSignupClick}
          />
        ))
      : null;

    let newOpinionShow;
    newOpinionShow = !this.state.staked ? (
      <div
        className={`opinion-expression ${
          this.state.confidence ? "opinion-support" : "opinion-opposition"
        }`}
      >
        <p className="candidate-info">
          <h2>{candidate.name}</h2>
          <h3>@{candidate.twitterUser}</h3>
          <p>{candidate.description}</p>
        </p>
        <p className="info">
          <i>
            <img src={infoIcon} alt="Info" />
          </i>
          <span>
            The default merit points are set to 50, do you want to change below?
          </span>
        </p>
        <div className="candidate">
          <form>
            <div className="slider">
              <MeritsSlider
                amountMerits={this.state.amountMerits}
                passMeritsFromSlider={this.updateMeritsSlider}
                passMeritsFromInput={this.updateMeritsInput}
              />
            </div>
            <p className="arrow-opinion">
              <i>
                <img
                  src={this.state.confidence ? upArrow : downArrow}
                  alt={this.state.confidence ? "Rating up" : "Rating down"}
                />
              </i>
            </p>
            <button
              onClick={
                this.state.user
                  ? this.handleStakeCandidate
                  : this.handleSignupClick
              }
              type="button"
            >
              I {this.state.confidence ? "support" : "oppose"} @
              {candidate.twitterUser}
            </button>
          </form>

          <p className={this.state.confidence ? "oppose" : "support"}>
            <i>
              <img
                src={this.state.confidence ? downArrow : upArrow}
                alt={this.state.confidence ? "Rating down" : "Rating up"}
              />
            </i>
            <span onClick={this.onClickChangeConfidence.bind(this)}>
              Do you {this.state.confidence ? "oppose" : "support"} @
              {this.props.candidate.twitterUser}
            </span>
          </p>
        </div>
      </div>
    ) : (
      <Congratulations
        userTwitterName={this.props.candidate.twitterUser}
        handleOk={this.handleStakeOk.bind(this)}
        message={this.state.confidence ? "supported" : "opposed"}
      />
    );

    return (
      <div>
        {getStartedMenu}
        {newOpinionShow}
      </div>
    );
  }
}

export default NewOpinion;
