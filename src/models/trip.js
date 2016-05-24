const mongoose = require('mongoose');

const createSchema = require('../utils/createSchema');

/**
 * The document schema for db.trips.
 */
const TripSchema = createSchema({
  name: { type: String, default: null }
});

mongoose.model('Trip', TripSchema);
