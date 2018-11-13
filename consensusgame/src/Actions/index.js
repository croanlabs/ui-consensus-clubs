const updateNotifications = notifications => ({
  type: 'UPDATE_NOTIFICATIONS',
  payload: notifications
});

const updateCountNewNotifications = countNewNotifications => ({
  type: 'UPDATE_COUNT_NEW_NOTIFICATIONS',
  payload: countNewNotifications
});

const updateUnopinionatedMerits = unopinionatedMerits => ({
  type: 'UPDATE_UNOPINIONATED_MERITS',
  payload: unopinionatedMerits
});

export {
  updateNotifications,
  updateCountNewNotifications,
  updateUnopinionatedMerits
};
