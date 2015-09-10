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
   */
  signup(user) {
    this.dispatch();
    signup(user)
      .then(() => {
        this.actions.signupSuccess();
        location.href = '/';
      })
      .catch((resp) => {
        this.actions.signupFailure(resp.data);
      });
  }
}

export default alt.createActions(SignupActions);
