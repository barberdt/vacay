const alt = require('dispatchers/alt');
const TripAPI = require('../api/TripAPI');

class TripActions {
  loadTrips() {
    this.dispatch();

    TripAPI.loadTrips()
      .then(() => {
        console.log('Trip loading success.');
      })
      .catch(() => {
        console.log('Trip loading failure.');
      });
  }
}

module.exports = alt.createActions(TripActions);