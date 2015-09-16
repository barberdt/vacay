import { fromJS, Map as IMap } from 'immutable';

import alt from 'dispatchers/alt';
import immutableStore from 'alt/utils/ImmutableUtil';
import SignupActions from '../actions/SignupActions';

import reduceFieldErrors from 'utils/reduceFieldErrors';


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
   * @param {Object} data - The dispatched data.
   * @param {String} data.message - The overall error message.
   * @param {Object} data.fields - The field errors keyed by field name.
   */
  onSignupFailure(data) {
    const { message, fields } = data;

    if (fields) {
      this.setState(this.state.set('fieldErrors', fromJS(reduceFieldErrors(fields))));
    } else {
      this.setState(this.state.set('errorMessage', message));
    }
  }
}

export default alt.createStore(immutableStore(SignupStore), 'SignupStore');
