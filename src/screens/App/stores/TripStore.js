const alt = require('dispatchers/alt');
const TripActions = require('../actions/TripActions');

class TripStore {
  constructor() {
    this.trips = [];
    this.loaded = false;
    this.loading = false;

    this.bindActions(TripActions);
  }

  onLoadTrips() {
    this.loading = true;
  }
}

module.exports = alt.createStore(TripStore);