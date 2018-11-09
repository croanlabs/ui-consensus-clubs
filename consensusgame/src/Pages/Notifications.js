import React, {Component} from 'react';
import axios from 'axios';
import Notification from '../Components/Notification/Notification';
import './Notifications.scss';
{
  /* todo: need to hook up these icons to array below...
import thumbsUpIcon from "../assets/icons/notifications/thumbs-up.png";
import newIcon from "../assets/icons/notifications/new.png";
*/
}

class Notifications extends Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    // Update last seen time for the user
    await axios({
      method: 'post',
      baseURL: process.env.REACT_APP_API_URL,
      url: process.env.REACT_APP_API_UPDATE_LAST_SEEN,
      withCredentials: true,
    }).catch(err => {
      if (err.response && err.response.status == 401) {
        this.signout();
      }
    });
    this.props.markAllNotificationsAsRead();
  }

  render() {
    const {notifications} = this.props;
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
