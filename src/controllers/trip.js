const mongoose = require('mongoose');

const Trip = mongoose.model('Trip');

/**
 * DAO controller for db.trips.
 */
module.exports = {
  /**
   * Create a new trip with the given request body.
   */
  createOne: function *() {
    let newTrip = new Trip(this.request.body);
    newTrip = yield newTrip.save();

    this.body = newTrip;
  },

  /**
   * Get all trips.
   */
  getAll: function *() {
    const trips = yield Trip.find();
    this.body = { trips };
  },

  /**
   * Get a single trip by id.
   */
  getOne: function *() {
    const id = this.params.id;
    const trip = yield Trip.findById(id);
    this.assert(trip, 404, `Could not find trip with id ${id}.`);
    this.body = trip;
  }
};
