import React, { Component } from "react";
import thumbsUpIcon from "../assets/icons/notifications/thumbs-up.png";
import newIcon from "../assets/icons/notifications/new.png";
import voteIcon from "../assets/icons/votetime-icon.png";
import thumbsDownIcon from "../assets/icons/thumbdown-icon.png";
import referralIcon from "../assets/icons/referralsuccess-icon.png";
import successIcon from "../assets/icons/successfulcon-icon.png";
import Notification from "../Components/Notification/Notification";
import "./Notifications.scss";
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
      notifications: []
    };
  }

  // api get notifications
  // async
  componentDidMount() {
    //   const { data: notifications } = await axios({
    //     method: "get",
    //     baseURL: process.env.REACT_APP_API_URL,
    //     url: process.env.REACT_APP_API_NOTIFICATIONS,
    //     withCredentials: true
    //   });
    //   this.setState({ notifications, numOfNotifications: notifications.length });
    let notifications = [
      {
        title: "Congrates! Successful Consensus!",
        description: "@cburniske is up 25.2%",
        time: "3 Aug",
        icon: thumbsUpIcon
      },
      {
        title: "New Poll",
        description: "It is a great time to make an impact",
        time: "10 Aug",
        icon: newIcon
      },
      {
        title: "Time to vote",
        description: "Remove @scamcoin?",
        time: "12 Aug",
        icon: voteIcon
      },
      {
        title: "Congrates! Successful Consensus!",
        description: "@cburniske is up 25.2%",
        time: "14 Aug",
        icon: successIcon
      },
      {
        title: "Oops! Weak Consensus",
        description: "@kalesamani is down 13.6%",
        time: "19 Aug",
        icon: thumbsDownIcon
      },
      {
        title: "Referral Success",
        description: "Seamus has joined - 500 merits earned",
        time: "26 Aug",
        icon: referralIcon
      },
      {
        title: "Time to vote",
        description: "Remove @scamcoin?",
        time: "12 Aug",
        icon: voteIcon
      },
      {
        title: "Congrates! Successful Consensus!",
        description: "@cburniske is up 25.2%",
        time: "14 Aug",
        icon: successIcon
      },
      {
        title: "Oops! Weak Consensus",
        description: "@kalesamani is down 13.6%",
        time: "19 Aug",
        icon: thumbsDownIcon
      },
      {
        title: "Referral Success",
        description: "Seamus has joined - 500 merits earned",
        time: "26 Aug",
        icon: referralIcon
      },
      {
        title: "Referral Success",
        description: "Seamus has joined - 500 merits earned",
        time: "26 Aug",
        icon: referralIcon
      }
    ];
    this.setState({ notifications });
  }

  render() {
    const { notifications } = this.state;
    const { length: numOfNotifications } = notifications;
    return (
      <div className="layout notifications">
        <aside className="col">
          <h1 className="lg-vspace">Notifications</h1>
          <h6>Stay updated about your recent activities</h6>
        </aside>

        <section className="col">
          {numOfNotifications > 0 ? (
            <React.Fragment>
              <div className="notifications-num">{numOfNotifications}</div>
              <div className="notifications-details">
                <ul className="messages md-vspace">
                  {notifications.map(notification => (
                    <Notification notification={notification} />
                  ))}
                </ul>
              </div>
            </React.Fragment>
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
