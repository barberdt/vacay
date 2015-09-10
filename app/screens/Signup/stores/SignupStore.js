import { fromJS, Map as ImmutableMap } from 'immutable';

import alt from 'dispatchers/alt';
import immutableStore from 'alt/utils/ImmutableUtil';
import SignupActions from '../actions/SignupActions';


/**
 * The store for the Signup view..
 */
class SignupStore {
  constructor() {
    this.state = ImmutableMap({ errorMessage: null, fieldErrors: null });
    this.bindActions(SignupActions);
  }

  /**
   * Handler for SignupActions.signup. Null out field errors.
   */
  onSignup() {
    this.setState(this.state.merge({ errorMessage: null, fieldErrors: null }));
  }

  /**
   * Handler for SignupActions.signupFailure. Set the given error state.
   *
   * @param {Object} body - The error response body from signup failure.
   */
  onSignupFailure(body) {
    const { message, fields } = body;

    if (fields) {
      this.setState(this.state.set('fieldErrors', fromJS(fields)));
    } else {
      this.setState(this.state.set('errorMessage', message));
    }
  }
}

module.exports = alt.createStore(immutableStore(SignupStore), 'SignupStore');
