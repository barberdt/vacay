'use strict';

const mongoose = require('mongoose');
const schemaJSONTransform = require('./schemaJSONTransform');


/**
 * Method used to create all model schemas.
 *
 * @param {Objcet} fields - The schema fields.
 * @return {Object} The newly created schema.
 */
const createSchema = function(fields, options) {
  const schema = new mongoose.Schema(fields, options);
  schema.plugin(schemaJSONTransform);
  return schema;
};

module.exports = createSchema;
