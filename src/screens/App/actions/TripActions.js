const alt = require('dispatchers/alt');
const TripAPI = require('../api/TripAPI');


class TripActions {
  loadTrips() {
    this.dispatch();

    TripAPI.loadTrips()
      .then(() => {
        this.actions.loadTripsSuccess();
      })
      .catch(() => {
        this.actions.loadTripsFailure();
      });
  }

  loadTripsSuccess() {
    this.dispatch();
  }

  loadTripsFailure() {
    this.dispatch();
  }
}

module.exports = alt.createActions(TripActions);
