import React from 'react/addons';

import Signup from './Signup';


/**
 * Init react rendering after DOM has loaded.
 */
document.addEventListener('DOMContentLoaded', () => {
  React.render(<Signup />, document.body);
});
