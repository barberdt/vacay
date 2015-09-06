const alt = require('dispatchers/alt');

const LoginAPI = require('../utils/LoginAPI');


/**
 * Login actions.
 */
class LoginActions {
  /**
   * Make a login request. Void dispatch.
   *
   * @param {String} username - The username to log in with.
   * @param {String} password - The password to log in with.
   */
  login(username, password) {
    this.dispatch();
    LoginAPI.login(username, password)
      .then(() => location.href = '/');
  }
}

module.exports = alt.createActions(LoginActions);
