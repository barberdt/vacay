const axios = require('axios');

const TripAPI = {
  loadTrips() {
    return axios.get('/api/trips');
  }
};

module.exports = TripAPI;