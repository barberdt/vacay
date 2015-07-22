const { Map } = require('immutable');

const alt = require('dispatchers/alt');
const immutableStore = require('alt/utils/ImmutableUtil');
const RootActions = require('../actions/RootActions');
const TripStore = require('./TripStore');


/**
 * Store specific to the Root component.
 */
class RootStore {
  constructor() {
    this.state = Map({
      isLoading: false,
      trips: null
    });

    this.bindActions(RootActions);
  }

  /**
   * Handler for RootActions.reset. Set the store to an empty and loading state.
   */
  onReset() {
    this.setState(Map({
      isLoading: true,
      trips: null
    }));
  }

  /**
   * Handler for RootActions.resetSuccess. Retrieve the necessay data from the
   * content store.
   */
  onResetSuccess() {
    this.setState(this.state.merge({
      isLoading: false,
      trips: TripStore.getState()
    }));
  }

  /**
   * Handler for RootActions.resetFailure. Set the store to a non-loading state.
   */
  onResetFailure() {
    this.setState(this.state.merge({
      isLoading: false
    }));
  }
}

module.exports = alt.createStore(immutableStore(RootStore), 'RootStore');
