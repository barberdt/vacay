const { Map } = require('immutable');

const alt = require('dispatchers/alt');
const immutableStore = require('alt/utils/ImmutableUtil');
const TripActions = require('../actions/TripActions');

class TripStore {
  constructor() {
    this.state = Map({
      trips: [],
      loaded: false,
      loading: false
    });

    this.bindActions(TripActions);
  }

  onLoadTrips() {
    this.setState(this.state.merge({
      loading: true
    }));
  }

  onLoadTripsSuccess() {
    this.setState(this.state.merge({
      loading: false,
      loaded: true
    }));
  }

  onLoadTripsFailure() {
    this.setState(this.state.merge({
      loading: false
    }));
  }
}

module.exports = alt.createStore(immutableStore(TripStore), 'TripStore');
