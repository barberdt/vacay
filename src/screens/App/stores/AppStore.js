const Immutable = require('immutable');

const alt = require('dispatchers/alt');
const immutableStore = require('alt/utils/ImmutableUtil');
const AppActions = require('../actions/AppActions');
const TripStore = require('./TripStore');


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
}

module.exports = alt.createStore(immutableStore(AppStore), 'AppStore');
