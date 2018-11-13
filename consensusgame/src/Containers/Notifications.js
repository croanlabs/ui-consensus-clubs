import * as actions from '../Actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Notifications from '../Pages/Notifications';

const mapStateToProps = state => {
  return {
    notifications: state.notifications
  };
};

const mapDispatchToProps = dispatch => {
  return {
    markAllNotificationsAsRead: () => {
      dispatch(actions.updateCountNewNotifications(0));
    }
  };
};

const NotificationList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Notifications);

export default NotificationList;
