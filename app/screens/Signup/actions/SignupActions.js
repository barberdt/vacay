import alt from 'dispatchers/alt';
import { signup } from '../utils/signupAPI';

/**
 * Signup actions.
 */
class SignupActions {
  constructor() {
    this.generateActions('updateField', 'signupFailure');
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
      .then(() => { location.href = '/'; })
      .catch(resp => {
        const { message: error, fields: fieldErrors } = resp.data;
        this.actions.signupFailure({ error, fieldErrors });
      });
  }
}

export default alt.createActions(SignupActions);
