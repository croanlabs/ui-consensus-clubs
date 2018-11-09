const updateNotifications = notifications => ({
  type: 'UPDATE_NOTIFICATIONS',
  payload: notifications,
});

const updateCountNewNotifications = () => ({
  type: 'UPDATE_COUNT_NEW_NOTIFICATIONS',
  payload: 0,
});

export {updateNotifications, updateCountNewNotifications};
