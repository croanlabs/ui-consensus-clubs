import * as actions from '../Actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import NotificationsNavBar from '../Components/Notification/NotificationsNavBar';

const mapStateToProps = state => {
  return {
    notifications: state.notifications,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onNotificationsUpdated: notifications => {
      dispatch(actions.updateNotifications(notifications));
    },
    updateCountNewNotifications: () => {
      dispatch(actions.updateCountNewNotifications());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationsNavBar);
