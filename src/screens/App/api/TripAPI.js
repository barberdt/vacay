const axios = require('axios');


/**
 * A collection of trip-related API methods.
 */
const TripAPI = {

  /**
   * Load the trips.
   *
   * @return {Promise} A promise that will resolve on load success.
   */
  loadTrips() {
    return axios.get('/api/trips');
  }
};

module.exports = TripAPI;
