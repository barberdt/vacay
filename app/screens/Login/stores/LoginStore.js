import { fromJS, Map as IMap } from 'immutable';

import alt from 'dispatchers/alt';
import immutableStore from 'alt/utils/ImmutableUtil';
import LoginActions from '../actions/LoginActions';


/**
 * The store for the Login view.
 */
class MyStore {
  constructor() {
    this.state = IMap({ errorMessage: null, fieldErrors: null });
    this.bindActions(LoginActions);
  }

  /**
   * Handler for LoginActions.login. Null out errors.
   */
  onLogin() {
    this.setState(this.state.merge({ errorMessage: null, fieldErrors: null }));
  }

  /**
   * Handler for LoginActions.loginFailure. Set the given error state.
   *
   * @param {Object} body - The error response body from login failure.
   * @param {String} body.message - The overall error message.
   * @param {Object} body.fields - The field errors keyed by field name.
   */
  onLoginFailure(body) {
    const { message, fields } = body;

    if (fields) {
      this.setState(this.state.set('fieldErrors', fromJS(fields)));
    } else {
      this.setState(this.state.set('errorMessage', message));
    }
  }
}

export default alt.createStore(immutableStore(MyStore), 'MyStore');
