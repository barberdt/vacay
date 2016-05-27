import { Map as iMap } from 'immutable';
import immutableStore from 'alt/utils/ImmutableUtil';

import alt from 'dispatchers/alt';
import VacayActions from '../actions/VacayActions';
import TripActions from 'actions/TripActions';
import TripStore from 'stores/TripStore';

/**
 * Store specific to the App component.
 */
class VacayStore {
  constructor() {
    this.state = iMap({
      isLoading: false,
      trips: null,
    });

    this.bindActions(VacayActions);
    this.bindListeners({
      onCreateTripSuccess: TripActions.createSuccess,
    });
  }

  /**
   * Handler for VacayActions.reset. Set the store to an empty and loading state.
   */
  onReset() {
    this.setState(iMap({
      isLoading: true,
      trips: null,
    }));
  }

  /**
   * Handler for VacayActions.resetSuccess. Retrieve the necessay data from the
   * content store.
   */
  onResetSuccess() {
    this.setState(this.state.merge({
      isLoading: false,
      trips: TripStore.getState(),
    }));
  }

  /**
   * Handler for VacayActions.resetFailure. Set the store to a non-loading state.
   */
  onResetFailure() {
    this.setState(this.state.merge({
      isLoading: false,
    }));
  }

  /**
   * Handler for TripActions.createSuccess. Retrieve a fresh list of trips.
   */
  onCreateTripSuccess() {
    this.waitFor(TripStore.dispatchToken);
    this.setState(this.state.merge({
      trips: TripStore.getState(),
    }));
  }
}

export default alt.createStore(immutableStore(VacayStore), 'VacayStore');
