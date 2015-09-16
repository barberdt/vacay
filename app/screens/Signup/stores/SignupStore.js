import { fromJS, Map as IMap } from 'immutable';

import alt from 'dispatchers/alt';
import immutableStore from 'alt/utils/ImmutableUtil';
import SignupActions from '../actions/SignupActions';


/**
 * The store for the Signup view.
 */
class SignupStore {
  constructor() {
    this.state = IMap({ errorMessage: null, fieldErrors: null });
    this.bindActions(SignupActions);
  }

  /**
   * Handler for SignupActions.signup. Null out errors.
   */
  onSignup() {
    this.setState(this.state.merge({ errorMessage: null, fieldErrors: null }));
  }

  /**
   * Handler for SignupActions.signupFailure. Set the given error state.
   *
   * @param {Object} body - The error response body from signup failure.
   * @param {String} body.message - The overall error message.
   * @param {Object} body.fields - The field errors keyed by field name.
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

export default alt.createStore(immutableStore(SignupStore), 'SignupStore');