import { fromJS, Map as ImmutableMap } from 'immutable';

import alt from 'dispatchers/alt';
import immutableStore from 'alt/utils/ImmutableUtil';
import SignupActions from '../actions/SignupActions';


/**
 * The store for the Signup view..
 */
class SignupStore {
  constructor() {
    this.state = ImmutableMap({ error: null });

    this.bindActions(SignupActions);
  }

  /**
   * Handler for SignupActions.signup. Set the error state to null.
   */
  onSignup() {
    this.setState(this.state.set('error', null));
  }

  /**
   * Handler for SignupActions.signupFailure. Set the given error state.
   *
   * @param {Object} error - Error response from failure.
   */
  onSignupFailure(error) {
    this.setState(this.state.set('error', fromJS(error)));
  }
}

module.exports = alt.createStore(immutableStore(SignupStore), 'SignupStore');
