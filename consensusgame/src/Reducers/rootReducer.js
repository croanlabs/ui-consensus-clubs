import {combineReducers} from 'redux';

const notifications = (state = [], action) => {
  switch(action.type) {
     case 'UPDATE_NOTIFICATIONS':
       return action.payload;
     default:
       return state;
  }
};

const countNewNotifications = (state = 0, action) => {
 switch(action.type) {
    case 'UPDATE_COUNT_NEW_NOTIFICATIONS':
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  notifications,
  countNewNotifications,
});
