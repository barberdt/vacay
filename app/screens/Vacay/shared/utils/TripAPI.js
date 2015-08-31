const axios = require('axios');


const ROOT_PATH = '/api/trips';

/**
 * A collection of trip-related API methods.
 */
const TripAPI = {

  /**
   * Create a new trip.
   *
   * @param {Object} trip - The trip to create.
   * @return {Promise} A promise that will resolve on save success.
   */
  create(trip) {
    return axios.post(`${ROOT_PATH}`, trip);
  },

  /**
   * Load the trips.
   *
   * @return {Promise} A promise that will resolve on load success.
   */
  load() {
    return axios.get(`${ROOT_PATH}`);
  }
};

module.exports = TripAPI;
