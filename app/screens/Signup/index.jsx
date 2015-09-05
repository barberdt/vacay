const React = require('react/addons');

const Signup = require('./Signup');


/**
 * Init react rendering after DOM has loaded.
 */
document.addEventListener('DOMContentLoaded', () => {
  React.render(<Signup />, document.body);
});
