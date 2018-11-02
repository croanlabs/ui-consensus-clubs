import React, {Component} from 'react';
import './Notification.scss';
import timeago from 'timeago.js';

class Notification extends Component {
  constructor() {
    super();
    this.state = {
      read: null,
    };
  }

  componentDidMount() {
    this.setState({read: false});
  }

  // for all notifications
  handleRead() {
    let currentTime = new Date();
    this.setState({read: true});
  }

  // new poll
  handleAddPoll() {
    console.log('add poll!');
  }

  // time to vote
  handleVote() {
    console.log('time to vote!');
  }

  //successful or weak consensus
  goToProfile() {
    console.log('go to profile page');
  }

  // notification time
  //   getTime() {
  //     const notificationGetTime = this.props.notification.time;
  //     let currentTime = new Date();
  //     let instance;
  //     const minutes = instance.getSeconds() / 60;
  //     const hours = instance.getSeconds() / 60 / 60;
  //     const days = instance.getHours() / 24;
  //     var minutes = Math.round(Math.floor(timeDiff / 60) % 60);
  //     var hours = Math.round(Math.floor(timeDiff / 60) % 24);
  //     if (minutes > 59) {
  //       if (hours > 23) {
  //       }
  //     }
  //     return Math.round(
  //       (currentTime.getTime() - notificationGetTime.getTime()) / 1000
  //     );
  //   }

  render() {
    const {notification} = this.props;
    const {read} = this.state;

    return (
      <li
        key={notification.title}
        className={`card yellow ${read || read == null ? null : 'unread'}`}>
        <div className="card-container" onClick={this.handleRead.bind(this)}>
          <div className="flex">
            <i>
              <img src={notification.icon} alt="icon" />
            </i>
            <div className="msg-details">
              <h2>{notification.title}</h2>
              <h3>{notification.description}</h3>
            </div>
          </div>
        </div>
        <h4>{timeago().format(notification.createdAt)}</h4>
      </li>
    );
  }
}

export default Notification;
