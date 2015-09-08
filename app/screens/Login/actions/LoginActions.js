import alt from 'dispatchers/alt';

import { login } from '../utils/loginAPI';


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
    login(username, password)
      .then(() => location.href = '/');
  }
}

export default alt.createActions(LoginActions);
