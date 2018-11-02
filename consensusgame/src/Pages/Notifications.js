import React, {Component} from 'react';
import axios from 'axios';
import Notification from '../Components/Notification/Notification';
import './Notifications.scss';
import thumbsUpIcon from '../assets/icons/notifications/thumbs-up.png';
import newIcon from '../assets/icons/notifications/new.png';
import voteIcon from '../assets/icons/votetime-icon.png';
import thumbsDownIcon from  '../assets/icons/thumbdown-icon.png';
import bonusIcon from '../assets/icons/bonussuccess-icon.png';
import successIcon from '../assets/icons/successfulcon-icon.png';

{
  /* todo: need to hook up these icons to array below...
import thumbsUpIcon from "../assets/icons/notifications/thumbs-up.png";
import newIcon from "../assets/icons/notifications/new.png";
*/
}

class Notifications extends Component {
  constructor() {
    super();
    this.state = {
      notifications: [],
    };

    this.icons = {
      thumbsUpIcon,
      newIcon,
      voteIcon,
      thumbsDownIcon,
      bonusIcon,
      successIcon,
    }
  }

  async componentDidMount() {
    let {data: notifications} = await axios({
      method: 'get',
      baseURL: process.env.REACT_APP_API_URL,
      url: process.env.REACT_APP_API_NOTIFICATIONS,
      withCredentials: true,
    }).catch(err => {
      if (err.response && err.response.status == 401) {
        this.signout();
      }
    });
    notifications = notifications.map(n => {
      let res = {};
      if (n.templateText) {
        res.title = n.templateText;
        if (n.text) {
          res.description = n.text;
        }
      } else {
        res.title = n.text;
      }
      res.createdAt = n.createdAt;
      res.icon = this.icons[n.icon];
      return res;
    });
    //this.setState({notifications, numOfNotifications: notifications.length});
    // let notifications = [
    //   {
    //     title: 'Congrates! Successful Consensus!',
    //     description: '@cburniske is up 25.2%',
    //     time: '3 Aug',
    //     icon: thumbsUpIcon,
    //   },
    //   {
    //     title: 'New Poll',
    //     description: 'It is a great time to make an impact',
    //     time: '10 Aug',
    //     icon: newIcon,
    //   },
    //   {
    //     title: 'Time to vote',
    //     description: 'Remove @scamcoin?',
    //     time: '12 Aug',
    //     icon: voteIcon,
    //   },
    //   {
    //     title: 'Congrates! Successful Consensus!',
    //     description: '@cburniske is up 25.2%',
    //     time: '14 Aug',
    //     icon: successIcon,
    //   },
    //   {
    //     title: 'Oops! Weak Consensus',
    //     description: '@kalesamani is down 13.6%',
    //     time: '19 Aug',
    //     icon: thumbsDownIcon,
    //   },
    //   {
    //     title: 'Referral Success',
    //     description: 'Seamus has joined - 500 merits earned',
    //     time: '26 Aug',
    //     icon: bonusIcon,
    //   },
    //   {
    //     title: 'Time to vote',
    //     description: 'Remove @scamcoin?',
    //     time: '12 Aug',
    //     icon: voteIcon,
    //   },
    //   {
    //     title: 'Congrates! Successful Consensus!',
    //     description: '@cburniske is up 25.2%',
    //     time: '14 Aug',
    //     icon: successIcon,
    //   },
    //   {
    //     title: 'Oops! Weak Consensus',
    //     description: '@kalesamani is down 13.6%',
    //     time: '19 Aug',
    //     icon: thumbsDownIcon,
    //   },
    //   {
    //     title: 'Referral Success',
    //     description: 'Seamus has joined - 500 merits earned',
    //     time: '26 Aug',
    //     icon: bonusIcon,
    //   },
    //   {
    //     title: 'Referral Success',
    //     description: 'Seamus has joined - 500 merits earned',
    //     time: '26 Aug',
    //     icon: bonusIcon,
    //   },
    // ];
    this.setState({notifications});
  }

  render() {
    const {notifications} = this.state;
    const {length: numOfNotifications} = notifications;
    return (
      <div className="layout notifications">
        <aside className="col">
          <h1 className="lg-vspace">Notifications</h1>
          <h6>Stay updated about your recent activities</h6>
        </aside>

        <section className="col">
          {numOfNotifications > 0 ? (
            <div className="notifications-details">
              <ul className="messages md-vspace">
                {notifications.map(notification => (
                  <Notification notification={notification} />
                ))}
              </ul>
            </div>
          ) : (
            <div className="notifications-details">
              <p>no notifications yet.</p>
            </div>
          )}
        </section>
      </div>
    );
  }
}

export default Notifications;
