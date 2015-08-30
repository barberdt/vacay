'use strict';

const mongoose = require('mongoose');


const Trip = mongoose.model('Trip');

/**
 * DAO controller for db.trips.
 */
const tripController = {
  /**
   * Create a new trip with the given request body.
   */
  createOne: function *() {
    console.log(this.request.body);
  },

  /**
   * Get all trips.
   */
  getAll: function *() {
    const trips = yield Trip.find();
    this.body = { trips: trips };
  },

  /**
   * Get a single trip by id.
   */
  getOne: function *() {
    const id = this.params.id;
    let trip;

    try {
      trip = yield Trip.findById(id);
    } catch (error) {
      console.log(error);
    }

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
