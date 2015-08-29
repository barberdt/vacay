const mongoose = require('mongoose');


/**
 * The document schema for db.trips.
 */
const TripSchema = new mongoose.Schema({
  name: { type: String, default: null }
});

mongoose.model('Trip', TripSchema);
