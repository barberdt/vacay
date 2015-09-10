import React from 'react/addons';

import connectToStores from 'alt/utils/connectToStores';
import Signup from './Signup';
import SignupStore from './stores/SignupStore';

const ConnectedSignup = connectToStores({
  getStores() {
    return [SignupStore];
  },

  getPropsFromStores() {
    return { fieldErrors: SignupStore.getState().get('fieldErrors') };
  }
}, Signup);

/**
 * Init react rendering after DOM has loaded.
 */
document.addEventListener('DOMContentLoaded', () => {
  React.render(<ConnectedSignup />, document.body);
});
