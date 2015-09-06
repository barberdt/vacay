'use strict';

const createSchema = require('../utils/createSchema');
const mongoose = require('mongoose');


/**
 * The document schema for db.trips.
 */
const TripSchema = createSchema({
  name: { type: String, default: null }
});

mongoose.model('Trip', TripSchema);
