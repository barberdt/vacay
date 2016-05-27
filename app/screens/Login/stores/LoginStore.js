import { fromJS } from 'immutable';
import immutableStore from 'alt/utils/ImmutableUtil';

import alt from 'dispatchers/alt';
import LoginActions from '../actions/LoginActions';

/**
 * The store for the Login view.
 */
class LoginStore {
  constructor() {
    this.state = fromJS({
      error: null,
      fields: {
        email: {},
        password: {},
      },
    });

    this.bindActions(LoginActions);
  }

  /**
   * Handler for LoginActions.updateField. Update the store's field entry.
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
   * Handler for LoginActions.login. Null out errors.
   */
  onLogin() {
    let fields = this.state.get('fields');
    fields = fields.map(field => field.set('error', null));

    this.setState(this.state.merge({ error: null, fields }));
  }

  /**
   * Handler for LoginActions.loginFailure. Set the given error state.
   *
   * @param {Object} data - The dispatched data.
   * @param {String} data.error - The overall error message for the form.
   * @param {Object} data.fieldErrors - The field errors keyed by field name.
   */
  onLoginFailure(data) {
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

export default alt.createStore(immutableStore(LoginStore), 'LoginStore');
