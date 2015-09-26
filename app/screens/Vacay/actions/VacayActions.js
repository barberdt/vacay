import { post } from 'axios';

import alt from 'dispatchers/alt';
import TripStore from 'stores/TripStore';


/**
 * Actions specific to the App component.
 */
class VacayActions {
  constructor() {
    this.generateActions('resetSuccess', 'resetFailure');
  }

  /**
   * The reset action for the component. Fetches the data from the content
   * store.
   */
  reset() {
    TripStore.fetch()
      .then(() => this.actions.resetSuccess())
      .catch(() => this.actions.resetFaliure());
  }

  // @TODO docs
  logout() {
    post('/auth/logout')
      .then(() => location.href = '/login');
  }
}

export default alt.createActions(VacayActions);
