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
  },

  /**
   * Get a single trip by id.
   */
  getOne: function *() {
    // @todo determine how to retrieve request params
    const trip = yield Trip.findById(id);

    if (!trip) {
      this.status = 404;
      this.body = {
        status: 404,
        message: 'Could not find trip with id ' + id + '.'
      };
    } else {
      this.body = trip;
    }
  }
};

module.exports = tripController;
