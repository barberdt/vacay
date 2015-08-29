'use strict';

const mongoose = require('mongoose');


const Trip = mongoose.model('Trip');

/**
 * DAO controller for db.trips.
 */
const tripController = {
  /**
   * Get all trips.
   */
  getAll: function *() {
    const trips = yield Trip.find().exec();
    this.body = { trips: trips };
  }
};

module.exports = tripController;
