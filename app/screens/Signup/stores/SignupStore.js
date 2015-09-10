import { fromJS, Map as ImmutableMap } from 'immutable';

import alt from 'dispatchers/alt';
import immutableStore from 'alt/utils/ImmutableUtil';
import SignupActions from '../actions/SignupActions';


/**
 * The store for the Signup view..
 */
class SignupStore {
  constructor() {
    this.state = ImmutableMap({ fieldErrors: null });

    this.bindActions(SignupActions);
  }

  /**
   * Handler for SignupActions.signup. Null out field errors.
   */
  onSignup() {
    this.setState(this.state.set('fieldErrors', null));
  }

  /**
   * Handler for SignupActions.signupFailure. Set the given error state.
   *
   * @param {Array} fieldErrors - Field errors from the failed signup.
   */
  onSignupFailure(fieldErrors) {
    this.setState(this.state.set('fieldErrors', fromJS(fieldErrors)));
  }
}

module.exports = alt.createStore(immutableStore(SignupStore), 'SignupStore');
