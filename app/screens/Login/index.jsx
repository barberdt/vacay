import React from 'react';
import connectToStores from 'alt/utils/connectToStores';

import LoginStore from './stores/LoginStore';
import Login from './Login';

// Create connected entry point component and.
const ConnectedLogin = connectToStores({
  getStores() {
    return [LoginStore];
  },

  getPropsFromStores() {
    const { error, fields } = LoginStore.getState().toObject();
    return { error, fields };
  },
}, Login);

// Init react rendering after DOM has loaded.
document.addEventListener('DOMContentLoaded', () => {
  React.render(<ConnectedLogin />, document.body);
});
