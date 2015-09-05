const React = require('react/addons');

const Login = require('./Login');


/**
 * Init react rendering after DOM has loaded.
 */
document.addEventListener('DOMContentLoaded', () => {
  React.render(<Login />, document.body);
});
