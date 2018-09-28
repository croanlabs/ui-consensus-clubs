import React, { Component } from "react";
import "./OpinionOpposition.scss";
import infoIcon from "../../assets/icons/info-icon.png";
import downArrow from '../../assets/icons/polls/down-arrow.png';
import upArrow from '../../assets/icons/polls/up-arrow.png';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

class OpinionOpposition extends Component {

  onClickSupport() {
    this.props.showFormSupport();
  }

  render() {
    return (
      <div className="opinion-opposition">
          <p className="info">{this.props.candidate.description}</p>
          <p className="info">
              <i><img src={infoIcon} alt="Info" /></i><span>The default merit points are set to 50, do you want to change below?</span>
          </p>
          <div className="slider">
              <Slider />
              <div className="merits-box">
                  <span className="large-text">50</span> <span className="small-text">Merits</span>
              </div>
          </div>
          <p className="arrow-opinion">
            <i>
              <img src={downArrow} alt="Rating Down" />
            </i>
          </p>
          <button>I oppose @melt_Dem</button>

          <p className="support">
            <i>
              <img src={upArrow} alt="Rating Up" />
            </i>
            <span onClick={this.onClickSupport.bind(this)}>Do you support {this.props.candidate.twitter_user}</span>
          </p>
      </div>
    );
  }
};

export default OpinionOpposition;
