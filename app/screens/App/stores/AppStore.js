const Immutable = require('immutable');

const alt = require('dispatchers/alt');
const immutableStore = require('alt/utils/ImmutableUtil');
const AppActions = require('../actions/AppActions');
const TripActions = require('actions/TripActions');
const TripStore = require('stores/TripStore');


/**
 * Store specific to the App component.
 */
class AppStore {
  constructor() {
    this.state = Immutable.Map({
      isLoading: false,
      trips: null
    });

    this.bindActions(AppActions);
    this.bindListeners({
      onCreateTripSuccess: TripActions.createSuccess
    });
  }

  /**
   * Handler for AppActions.reset. Set the store to an empty and loading state.
   */
  onReset() {
    this.setState(Immutable.Map({
      isLoading: true,
      trips: null
    }));
  }

  /**
   * Handler for AppActions.resetSuccess. Retrieve the necessay data from the
   * content store.
   */
  onResetSuccess() {
    this.setState(this.state.merge({
      isLoading: false,
      trips: TripStore.getState()
    }));
  }

  /**
   * Handler for AppActions.resetFailure. Set the store to a non-loading state.
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

module.exports = alt.createStore(immutableStore(AppStore), 'AppStore');
