const Immutable = require('immutable');

const alt = require('dispatchers/alt');
const immutableStore = require('alt/utils/ImmutableUtil');
const VacayActions = require('../actions/VacayActions');
const TripActions = require('actions/TripActions');
const TripStore = require('stores/TripStore');


/**
 * Store specific to the App component.
 */
class VacayStore {
  constructor() {
    this.state = Immutable.Map({
      isLoading: false,
      trips: null
    });

    this.bindActions(VacayActions);
    this.bindListeners({
      onCreateTripSuccess: TripActions.createSuccess
    });
  }

  /**
   * Handler for VacayActions.reset. Set the store to an empty and loading state.
   */
  onReset() {
    this.setState(Immutable.Map({
      isLoading: true,
      trips: null
    }));
  }

  /**
   * Handler for VacayActions.resetSuccess. Retrieve the necessay data from the
   * content store.
   */
  onResetSuccess() {
    this.setState(this.state.merge({
      isLoading: false,
      trips: TripStore.getState()
    }));
  }

  /**
   * Handler for VacayActions.resetFailure. Set the store to a non-loading state.
   */
  onResetFailure() {
    this.setState(this.state.merge({
      isLoading: false
    }));
  }

  /**
   * Handler for TripActions.createSuccess. Retrieve a fresh list of trips.
   */
  onCreateTripSuccess() {
    this.waitFor(TripStore.dispatchToken);
    this.setState(this.state.merge({
      trips: TripStore.getState()
    }));
  }
}

module.exports = alt.createStore(immutableStore(VacayStore), 'VacayStore');
