import { fromJS, Map as IMap } from 'immutable';

import alt from 'dispatchers/alt';
import immutableStore from 'alt/utils/ImmutableUtil';
import TripActions from 'actions/TripActions';


/**
 * A content store for trips.
 */
class TripStore {
  constructor() {
    this.state = IMap();

    this.bindActions(TripActions);
    this.exportPublicMethods({
      fetch: this.fetch
    });
  }

  /**
   * Handler for TripActions.createSuccess. Put the created trip into the store.
   *
   * @param {Object} trip - The created trip.
   */
  onCreateSuccess(trip) {
    this.setState(this.state.set(trip.id, IMap(trip)));
  }

  /**
   * Handler for TripActions.loadSuccess. Put the store in a non-loading state.
   *
   * @param {Array} trips - The loaded trips.
   */
  onLoadSuccess(trips) {
    const tripMap = trips.reduce((current, trip) => {
      current[trip.id] = trip;
      return current;
    }, {});

    this.setState(fromJS(tripMap));
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
      return TripActions.load()
        .then(() => Promise.resolve(this.getState()))
    }
  }
}

export default alt.createStore(immutableStore(TripStore), 'TripStore');
