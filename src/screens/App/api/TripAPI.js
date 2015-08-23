const axios = require('axios');


const ROOT_PATH = '/api/trips';

/**
 * A collection of trip-related API methods.
 */
const TripAPI = {

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
