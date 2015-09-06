import alt from 'dispatchers/alt';
import { create, load } from 'utils/TripAPI';


/**
 * Actions related to trips.
 */
class TripActions {
  constructor() {
    this.generateActions('createSuccess', 'createFailure', 'loadSuccess',
        'loadFailure');
  }

  /**
   * Create a new trip.
   *
   * @param {Immutable.Map} trip - The trip to create.
   */
  create(trip) {
    this.dispatch();

    create(trip)
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
   * @return {Promise} A promise that will resolve after a successful load.
   */
  load() {
    this.dispatch();

    return load()
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

export default alt.createActions(TripActions);
