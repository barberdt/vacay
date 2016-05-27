import React from 'react';
import connectToStores from 'alt/utils/connectToStores';

import SignupStore from './stores/SignupStore';
import Signup from './Signup';

const ConnectedSignup = connectToStores({
  getStores() {
    return [SignupStore];
  },

  getPropsFromStores() {
    const { error, fields } = SignupStore.getState().toObject();
    return { error, fields };
  },
}, Signup);

/**
 * Init react rendering after DOM has loaded.
 */
document.addEventListener('DOMContentLoaded', () => {
  React.render(<ConnectedSignup />, document.body);
});
