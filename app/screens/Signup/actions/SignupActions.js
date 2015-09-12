import alt from 'dispatchers/alt';

import { signup } from '../utils/signupAPI';


/**
 * Signup actions.
 */
class SignupActions {
  constructor() {
    this.generateActions('signupSuccess', 'signupFailure');
  }

  /**
   * Make a signup request. Void dispatch.
   *
   * @param {Object} user - The user object.
   * @param {String} user.email - The user's email.
   * @param {String} user.first - The user's surname.
   * @param {String} user.last - The user's family name.
   * @param {String} user.password - The user's password.
   */
  signup(user) {
    this.dispatch();
    signup(user)
      .then(() => {
        this.actions.signupSuccess();
        location.href = '/';
      })
      .catch((resp) => this.actions.signupFailure(resp.data));
  }
}

export default alt.createActions(SignupActions);
