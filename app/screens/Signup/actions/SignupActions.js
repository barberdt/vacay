import alt from 'dispatchers/alt';

import { signup } from '../utils/SignupAPI';


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
    signup(user)
      .then(() => location.href = '/');
  }
}

export default alt.createActions(SignupActions);
