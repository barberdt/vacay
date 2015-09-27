import React from 'react/addons';

import connectToStores from 'alt/utils/connectToStores';
import LoginStore from './stores/LoginStore';

import Login from './Login';
import Normalize from 'components/Normalize';


// Append normalize style tag
const style = React.renderToStaticMarkup(<Normalize />);
document.head.insertAdjacentHTML('beforeEnd', style);


// Create connected entry point component and.
const ConnectedLogin = connectToStores({
  getStores() {
    return [LoginStore];
  },

  getPropsFromStores() {
    const { errorMessage, fieldErrors } = LoginStore.getState().toObject();
    return { errorMessage, fieldErrors };
  }
}, Login);

// Init react rendering after DOM has loaded.
document.addEventListener('DOMContentLoaded', () => {
  React.render(<ConnectedLogin />, document.body);
});
