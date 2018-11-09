import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import notificationsIcon from '../../assets/icons/svg/notifications-inactive.svg';
import thumbsUpIcon from '../../assets/icons/notifications/thumbs-up.png';
import newIcon from '../../assets/icons/notifications/new.png';
import voteIcon from '../../assets/icons/votetime-icon.png';
import thumbsDownIcon from '../../assets/icons/thumbdown-icon.png';
import bonusIcon from '../../assets/icons/bonussuccess-icon.png';
import successIcon from '../../assets/icons/successfulcon-icon.png';

class NotificationsNavBar extends Component {
  constructor() {
    super();

    this.icons = {
      thumbsUpIcon,
      newIcon,
      voteIcon,
      thumbsDownIcon,
      bonusIcon,
      successIcon,
    };
    this.state = {};
  }

  //onClick() {
  //  this.props.markAllNotificationsAsRead;
  //}

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
    let countNewNotifications = 0;
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
      res.seen = n.seen;
      if (!n.seen) {
        countNewNotifications++;
      }
      return res;
    });

    // Update notifications and count of new notifications on redux state
    this.props.onNotificationsUpdated(notifications);
    this.props.updateCountNewNotifications(countNewNotifications);

    this.setState({countNewNotifications});
  }

  render() {
    const notificationsCount = this.state.countNewNotifications ? (
      <div className="notifications-num">
        {this.state.countNewNotifications}
      </div>
    ) : null;
    return (
      <span>
        {notificationsCount}
        <Link className="nav-link" to="/notifications">
          <div className="icon">
            <img src={notificationsIcon} alt="Home" />
          </div>
          <div className="name">Notifications</div>
        </Link>
      </span>
    );
  }
}

export default NotificationsNavBar;
