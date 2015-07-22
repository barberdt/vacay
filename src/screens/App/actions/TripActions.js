const alt = require('dispatchers/alt');
const TripAPI = require('../api/TripAPI');


/**
 * Actions related to trips.
 */
class TripActions {

  /**
   * Load the trips. Void dispatch.
   *
   * @return {Promise} A promise that will resolve after load success.
   */
  loadTrips() {
    this.dispatch();

    return TripAPI.loadTrips()
      .then(() => {
        this.actions.loadTripsSuccess();
      })
      .catch(() => {
        this.actions.loadTripsFailure();
      });
  }

  /**
   * Invoked after a successful load. Void dispatch.
   */
  loadTripsSuccess() {
    this.dispatch();
  }

  /**
   * Invoked after a failed load. Void dispatch.
   */
  loadTripsFailure() {
    this.dispatch();
  }
}

module.exports = alt.createActions(TripActions);
