import { fromJS } from 'immutable';

import alt from 'dispatchers/alt';
import immutableStore from 'alt/utils/ImmutableUtil';
import SignupActions from '../actions/SignupActions';


/**
 * The store for the Signup view.
 */
class SignupStore {
  constructor() {
    this.state = fromJS({
      error: null,
      fields: {
        email: {},
        first: {},
        last: {},
        password: {}
      }
    });

    this.bindActions(SignupActions);
  }

  /**
   * Handler for SignupActions.updateField. Update the store's field entry.
   *
   * @param {Object} data - The dispatched data.
   * @param {String} data.name - The field's name.
   * @param {*} data.value - The field's value.
   */
  onUpdateField(data) {
    const { name, value } = data;
    const updatedField = fromJS({ value, error: null });
    this.setState(this.state.setIn(['fields', name], updatedField));
  }

  /**
   * Handler for SignupActions.signup. Null out errors.
   */
  onSignup() {
    let fields = this.state.get('fields');
    fields = fields.map((field) => field.set('error', null));

    this.setState(this.state.merge({
      error: null,
      fields: fields
    }));
  }

  /**
   * Handler for SignupActions.signupFailure. Set the given error state.
   *
   * @param {Object} data - The dispatched data.
   * @param {String} data.error - The overall error message for the form.
   * @param {Object} data.fieldErrors - The field errors keyed by field name.
   */
  onSignupFailure(data) {
    const { error, fieldErrors } = data;

    if (fieldErrors) {
      let fields = this.state.get('fields');
      fields = fields.map((field, name) => field.set('error', fieldErrors[name]));
      this.setState(this.state.set('fields', fields));
    } else {
      this.setState(this.state.set('error', error));
    }
  }
}

export default alt.createStore(immutableStore(SignupStore), 'SignupStore');
