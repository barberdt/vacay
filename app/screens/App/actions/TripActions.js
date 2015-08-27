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
  load() {
    this.dispatch();

    return TripAPI.load()
      .then((resp) => {
        this.actions.loadSuccess(resp.data.results);
        return Promise.resolve();
      })
      .catch((resp) => {
        this.actions.loadFailure(resp.message);
        return Promise.reject();
      });
  }

  /**
   * Invoked after a successful load. Dispatches the loaded trips.
   *
   * @param {Array} trips - The loaded trips.
   *
   */
  loadSuccess(trips) {
    this.dispatch(trips);
  }

  /**
   * Invoked after a failed load. Dispatches the error message.
   *
   * @param {String} message - The error message.
   */
  loadFailure(message) {
    this.dispatch(message);
  }
}

module.exports = alt.createActions(TripActions);
