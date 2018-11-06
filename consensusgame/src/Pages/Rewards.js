import React, { Component } from 'react';
import axios from 'axios';
import { Tweet } from 'react-twitter-widgets';
import TwitterUserInput from '../Components/TwitterUserInput/TwitterUserInput';
import CongratulationsRewards from '../Components/Congratulations/CongratulationsRewards';
import cancelButton from '../assets/icons/rewards/cancel-button@2x.png';
import completeIcon from '../assets/icons/rewards/rewardscomplete-icon.png';
import arrowIcon from '../assets/icons/rewards/rewardsarrow-icon.png';
import './Rewards.scss';
import { throws } from 'assert';

class Rewards extends Component {
  constructor() {
    super();
    this.handleRetweet = this.handleRetweet.bind(this);
    this.state = {
      rewards: [
        {
          id: 1,
          points: 100,
          title: 'Retweet Bonus',
          description:
            'Download consensus games to solve problems and earn airdrop prizes!'
        },
        {
          id: 2,
          points: 500,
          title: 'Direct Message',
          description:
            'Download consensus games to solve problems and earn airdrop prizes!'
        }
      ],
      tweetIds: [
        {
          tweetId: '1058000459330449408',
          active: true
        },
        {
          tweetId: '1059456655690215426',
          active: false
        }
      ],
      retweet: true,
      allSelectedUsers: [],
      retweeted: false,
      directMessaged: false
    };
    this.handleDirectMessage = this.handleDirectMessage.bind(this);
  }

  showRetweet() {
    this.setState({ retweet: true });
  }
  showDM() {
    this.setState({ retweet: false });
  }

  updateSearch(e) {
    this.setState({ search: e.target.value });
  }

  handleCandidateSelected(suggestion) {
    let allSelectedUsers = this.state.allSelectedUsers;
    let twitterUser = { id: suggestion.id, name: suggestion.screen_name };
    if (allSelectedUsers.indexOf(twitterUser) < 0) {
      allSelectedUsers.push(twitterUser);
    }
    this.setState({ allSelectedUsers });
  }

  removeSelectedUser(index) {
    let allSelectedUsers = this.state.allSelectedUsers;
    allSelectedUsers.splice(index, 1);
    this.setState({ allSelectedUsers });
  }

  handleRetweet = async (e, id) => {
    //FIX: popup does not work on Chrome
    window.open(
      `https://twitter.com/intent/retweet?tweet_id=${id}`,
      '_blank',
      'toolbar=yes,status=0,scrollbars=yes,resizable=yes,top=300,right=100,width=300,height=300'
    );

    const conf = {
      method: 'post',
      baseURL: process.env.REACT_APP_API_URL,
      url: process.env.REACT_APP_TWITTER_RETWEET,
      withCredentials: true,
      data: {
        tweetId: id
      }
    };
    e.preventDefault();
    await axios(conf);
    // set retweeted to true
    // const retweeted = this.state.tweetIds[index].active;
    this.setState({ retweeted: true });
  };

  handleDirectMessage() {
    // TODO
    console.log('DM');
    const allSelectedUsers = this.state.allSelectedUsers;
    const id = allSelectedUsers.map(user => user.id);
    const text =
      'Download%20consensus%20games%20to%20solve%20problems%20and%20earn%20airdrop%20prizes!';
    const url = `https://twitter.com/messages/compose?recipient_id=${id}&text=${text}`;
    window.open(
      url,
      '_blank',
      'toolbar=yes,status=0,scrollbars=yes,resizable=yes,top=300,right=100,width=300,height=300'
    );

    // if (this.state.allSelectedUsers.length < 1) {
    //   alert('select followers!');
    // } else {
    //   this.setState({ directMessaged: true });
    // }
  }

  handleRetweetOk() {
    this.setState({
      retweeted: false
    });
  }

  handleDMOk() {
    this.setState({
      directMessaged: false,
      allSelectedUsers: []
    });
  }

  render() {
    const {
      rewards,
      retweet,
      allSelectedUsers,
      retweeted,
      directMessaged,
      tweetIds
    } = this.state;
    const colors = ['yellow', 'teal', 'purple', 'red', 'green', 'blue'];

    let selectedTwitterUsers = (
      <ul className="selected-users">
        {allSelectedUsers.map((selectedUser, index) => (
          <li>
            <span>@{selectedUser.name}</span>
            <img
              src={cancelButton}
              alt="cancel-buton"
              className="cancel-button"
              onClick={() => this.removeSelectedUser(index)}
            />
          </li>
        ))}
      </ul>
    );

    const arrowIconImg = (
      <img src={arrowIcon} alt="arrow-icon" className="arrow-icon" />
    );
    let completeIconImg = (
      <img src={completeIcon} alt="complete-icon" className="complete-icon" />
    );
    let retweetIcon = !retweeted ? arrowIconImg : completeIconImg;

    let DmIcon = !directMessaged ? arrowIconImg : completeIconImg;

    let rewardsDetails = retweet ? (
      !retweeted ? (
        <React.Fragment>
          <div className="reward-each-detail">
            <span className="yellow">100 Merits</span>
            <h1>Tell Your Twitter Followers</h1>
            <p>
              Download consensus games to solve problems and earn airdrop
              prizes!
            </p>
          </div>
          <ul className="tweetsForRetweet">
            {tweetIds.map(tweetId => (
              <li className={tweetId.active ? 'grey-out' : ''}>
                <Tweet tweetId={tweetId.tweetId} />
                <button onClick={e => this.handleRetweet(e, tweetId.tweetId)}>
                  Retweet Now
                </button>
              </li>
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <CongratulationsRewards
          retweet={retweet}
          handleOk={this.handleRetweetOk.bind(this)}
        />
      )
    ) : !directMessaged ? (
      <React.Fragment>
        <div className="reward-each-detail">
          <span className="teal">500 Merits</span>
          <h1>DM Your Twitter Followers</h1>
          <p>
            Download consensus games to solve problems and earn airdrop prizes!
          </p>
        </div>
        <div className="rewards-button">
          {selectedTwitterUsers}
          <TwitterUserInput
            onSuggestionSelected={this.handleCandidateSelected.bind(this)}
            placeholder=" Add names here"
            searchImg="white"
          />
          {allSelectedUsers.length > 0 && (
            <button onClick={this.handleDirectMessage.bind(this)}>
              Direct Message Now
            </button>
          )}
        </div>
      </React.Fragment>
    ) : (
      <CongratulationsRewards
        retweet={retweet}
        count={allSelectedUsers.length > 0 ? allSelectedUsers.length : 0}
        handleOk={this.handleDMOk.bind(this)}
      />
    );

    return (
      <div className="rewards layout">
        <aside className="col">
          <h1 className="lg-vspace">Rewards</h1>
          <h6>Get merit points on completing the rewards</h6>
          <ul className="md-vspace">
            {rewards.map((reward, index) => (
              <li
                key={reward.points}
                className={`card ${colors[index % colors.length]}`}
                onClick={
                  reward.id == 1
                    ? this.showRetweet.bind(this)
                    : this.showDM.bind(this)
                }
              >
                <div className="card-container flex">
                  <div className={`circle ${colors[index % colors.length]}`}>
                    {reward.points}
                  </div>
                  <div className="msg">
                    <h2>{reward.title}</h2>
                    <p>{reward.description}</p>
                  </div>
                  {reward.id == 1 ? retweetIcon : DmIcon}
                </div>
              </li>
            ))}
          </ul>
        </aside>

        <section className="col">
          <div className="rewards-details">{rewardsDetails}</div>
        </section>
      </div>
    );
  }
}

export default Rewards;
