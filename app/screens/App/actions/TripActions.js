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
   * Create a new trip.
   *
   * @param {Immutable.Map} trip - The trip to create.
   * @return {Promise} A promise that will resolve after save success.
   */
  create(trip) {
    this.dispatch();

    return TripAPI.create(trip)
      .then((resp) => {
        const { data } = resp;
        this.actions.createSuccess(data);
        return Promise.resolve(data);
      })
      .catch((resp) => {
        const { message } = resp;
        this.actions.createFailure(message);
        return Promise.reject(message);
      });
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
