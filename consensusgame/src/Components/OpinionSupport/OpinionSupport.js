import React, {Component} from 'react';
import './OpinionSupport.scss';
import infoIcon from "../../assets/icons/info-icon.png";
import downArrow from '../../assets/icons/polls/down-arrow.png';
import upArrow from '../../assets/icons/polls/up-arrow.png';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

class OpinionSupport extends Component {
  /*
   * Express support opinion.
   */
  onClickSupport() {
    console.log('SUPPORT!');
    // TODO
  }

  onClickOpposition() {
    this.props.showFormOpposition();
  }

  render() {
    return (
      <div className="opinion-support">
        <p className="info">{this.props.candidate.description}</p>
        <p className="info">
          <i><img src={infoIcon} alt="Info" /></i><span>The default merit points are set to 50, do you want to change below?</span>
        </p>
        <div className="candidate">
          <div className="slider">
              <Slider />
              <div className="merits-box">
                  <span className="large-text">50</span> <span className="small-text">Merits</span>
              </div>
          </div>
          <p className="arrow-opinion">
            <i>
              <img src={upArrow} alt="Rating Up" />
            </i>
          </p>
          <button onClick={this.onClickSupport.bind(this)}>I support {this.props.candidate.twitter_user}</button>
          <p className="oppose">
            <i>
              <img src={downArrow} alt="Rating Down" />
            </i>
            <span onClick={this.onClickOpposition.bind(this)}>Do you oppose {this.props.candidate.twitter_user}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default OpinionSupport;
