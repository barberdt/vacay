import React from 'react/addons';

import connectToStores from 'alt/utils/connectToStores';
import SignupStore from './stores/SignupStore';

import Signup from './Signup';


const ConnectedSignup = connectToStores({
  getStores() {
    return [SignupStore];
  },

  getPropsFromStores() {
    const { errorMessage, fieldErrors } = SignupStore.getState().toObject();
    return { errorMessage, fieldErrors };
  }
}, Signup);

/**
 * Init react rendering after DOM has loaded.
 */
document.addEventListener('DOMContentLoaded', () => {
  React.render(<ConnectedSignup />, document.body);
});
