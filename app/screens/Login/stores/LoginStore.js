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
   * @param {Object} data - The dispatched data.
   * @param {String} data.message - The overall error message.
   * @param {Object} data.fields - The field errors keyed by field name.
   */
  onLoginFailure(data) {
    const { message, fields } = data;

    if (fields) {
      this.setState(this.state.set('fieldErrors', fromJS(fields)));
    } else {
      this.setState(this.state.set('errorMessage', message));
    }
  }
}

export default alt.createStore(immutableStore(MyStore), 'MyStore');
