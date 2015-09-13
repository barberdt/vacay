import React from 'react/addons';

import connectToStores from 'alt/utils/connectToStores';
import LoginStore from './stores/LoginStore';

import Login from './Login';


const ConnectedLogin = connectToStores({
  getStores() {
    return [LoginStore];
  },

  getPropsFromStores() {
    const { errorMessage, fieldErrors } = LoginStore.getState().toObject();
    return { errorMessage, fieldErrors };
  }
}, Login);

/**
 * Init react rendering after DOM has loaded.
 */
document.addEventListener('DOMContentLoaded', () => {
  React.render(<ConnectedLogin />, document.body);
});
