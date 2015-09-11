import alt from 'dispatchers/alt';

import { login } from '../utils/loginAPI';


/**
 * Login actions.
 */
class LoginActions {
  /**
   * Make a login request. Void dispatch.
   *
   * @param {String} email - The email to log in with.
   * @param {String} password - The password to log in with.
   */
  login(email, password) {
    this.dispatch();
    login(email, password)
      .then(() => location.href = '/');
  }
}

export default alt.createActions(LoginActions);
