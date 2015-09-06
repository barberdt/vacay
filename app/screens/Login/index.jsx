import React from 'react/addons';

import Login from './Login';


/**
 * Init react rendering after DOM has loaded.
 */
document.addEventListener('DOMContentLoaded', () => {
  React.render(<Login />, document.body);
});
