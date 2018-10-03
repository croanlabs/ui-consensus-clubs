import React, {Component} from 'react';
import './NewOpinion.scss';
import infoIcon from '../../assets/icons/info-icon.png';
import downArrow from '../../assets/icons/polls/down-arrow.png';
import upArrow from '../../assets/icons/polls/up-arrow.png';
import MeritsSlider from '../MeritsSlider/MeritsSlider';
import 'react-rangeslider/lib/index.css';
import axios from 'axios';

class NewOpinion extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      amountMerits: 50,
      confidence: true,
    };
  }

  updateMeritsSlider = value => {
    this.setState({amountMerits: value});
  };

  updateMeritsInput = e => {
    this.setState({amountMerits: parseInt(e.target.value)});
  };

  handleStakeCandidate = async e => {
    const conf = {
      method: 'post',
      baseURL: process.env.REACT_APP_API_URL,
      url:
        process.env.REACT_APP_API_POLLS +
        '/' +
        this.props.poll.id +
        '/candidates/' +
        this.props.candidate.id +
        '/express-opinion',
      withCredentials: true,
      data: {
        commitmentMerits: this.state.amountMerits,
        confidence: this.state.confidence,
      },
    };
    e.preventDefault();
    await axios(conf);
  };

  onClickChangeConfidence() {
    this.setState({ confidence: !this.state.confidence })
  }

  render() {
    return (
      <div
        className={`opinion-expression ${
          this.state.confidence ? 'opinion-support' : 'opinion-opposition'
        }`}>
        <p className="info">{this.props.candidate.description}</p>
        <p className="info">
          <i>
            <img src={infoIcon} alt="Info" />
          </i>
          <span>
            The default merit points are set to 50, do you want to change below?
          </span>
        </p>
        <div className="candidate">
          <form onSubmit={this.handleStakeCandidate}>
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
                  alt={this.state.confidence ? 'Rating up' : 'Rating down'}
                />
              </i>
            </p>
            <button onClick={this.handleStakeCandidate.bind(this)}>
              I {this.state.confidence ? 'support' : 'oppose'}{' '}
              {this.props.candidate.twitter_user}
            </button>
          </form>

          <p className={this.state.confidence ? 'oppose' : 'oppose'}>
            <i>
              <img
                src={this.state.confidence ? downArrow : upArrow }
                alt={this.state.confidence ? 'Rating down' : 'Rating up'}
              />
            </i>
            <span onClick={this.onClickChangeConfidence.bind(this)}>
              Do you {this.state.confidence ? 'oppose' : 'support'}{' '}
              {this.props.candidate.twitter_user}
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default NewOpinion;
