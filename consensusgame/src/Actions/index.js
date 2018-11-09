const updateNotifications = notifications => ({
  type: 'UPDATE_NOTIFICATIONS',
  payload: notifications,
});

const updateCountNewNotifications = (countNewNotifications) => ({
  type: 'UPDATE_COUNT_NEW_NOTIFICATIONS',
  payload: countNewNotifications,
});

export {updateNotifications, updateCountNewNotifications};
