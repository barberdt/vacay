const alt = require('dispatchers/alt');
const TripAPI = require('../api/TripAPI');


/**
 * Actions related to trips.
 */
class TripActions {
  constructor() {
    this.generateActions('loadSuccess', 'loadFailure');
  }

  /**
   * Load the trips. Void dispatch.
   *
   * @return {Promise} A promise that will resolve after load success.
   */
  load() {
    this.dispatch();

    return TripAPI.load()
      .then((resp) => {
        const { trips } = resp.data;
        this.actions.loadSuccess(trips);
        return Promise.resolve(trips);
      })
      .catch((resp) => {
        const { message } = resp;
        this.actions.loadFailure(message);
        return Promise.reject(message);
      });
  }
}

module.exports = alt.createActions(TripActions);
