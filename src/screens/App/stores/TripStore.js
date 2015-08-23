const Immutable = require('immutable');

const alt = require('dispatchers/alt');
const immutableStore = require('alt/utils/ImmutableUtil');
const TripActions = require('../actions/TripActions');


/**
 * A content store for trips.
 */
class TripStore {
  constructor() {
    this.state = Immutable.Map();

    this.bindActions(TripActions);
    this.exportPublicMethods({
      fetch: this.fetch
    });
  }

  /**
   * Handler for TripActions.loadSuccess. Put the store in a non-loading state.
   *
   * @param {Array} trips - The loaded trips.
   */
  onLoadSuccess(trips) {
    const tripMap = trips.reduce((current, trip) => {
      current[trip._id] = trip;
      return current;
    }, {});

    this.setState(Immutable.fromJS(tripMap));
  }

  /**
   * Public method used to fetch the trips. An async load will occurr if they
   * are not already loaded.
   *
   * @return {Promise} A promise that will resolve with the loaded trips.
   */
  fetch() {
    const trips = this.getState();

    if (trips.size > 0) {
      return Promise.resolve(trips);
    } else {
      return TripActions.load();
    }
  }
}

module.exports = alt.createStore(immutableStore(TripStore), 'TripStore');
