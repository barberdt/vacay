const alt = require('dispatchers/alt');

const SignupAPI = require('../utils/SignupAPI');


/**
 * Signup actions.
 */
class SignupActions {
  /**
   * Make a signup request. Void dispatch.
   *
   * @param {Object} user - The user object.
   */
  signup(user) {
    this.dispatch();
    SignupAPI.signup(user);
  }
}

module.exports = alt.createActions(SignupActions);
