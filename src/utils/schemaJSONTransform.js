'use strict';

const get = require('lodash/object/get');


// @TODO docs
const getHidePathnames = function(schema) {
  const pathnames = [];

  schema.eachPath(function(pathname, schemaType) {
    if (get(schemaType, ['options', 'hideJSON'])) {
      pathnames.push(pathname);
    }
  });

  return pathnames;
};

// @TODO docs
const transformId = function(ret) {
  if (!ret.id && ret._id) {
    ret.id = ret._id;
  }

  delete ret._id;
};

// @TODO docs
const hideFields = function(ret, hidePathnames) {
  hidePathnames.forEach(function(pathname) {
    const split = pathname.split('.');
    const propName = split[split.length - 1];
    const pathParts = split.slice(0, split.length -1);

    if (ret.hasOwnProperty(propName)) {
      delete ret[propName];
    } else {
      const nested = get(ret, pathParts);

      if (nested) {
        delete nested[propName];
      }
    }
  });
};

/**
 * Mongoose schema plugin for transforming JSON serialization to the client.
 *
 * @param {Object} schema - The schema to alter the JSON transform for.
 */
const schemaJSONTransform = function(schema) {
  const options = schema.options;
  const existingOption = options.toJSON;
  const existingTransform = existingOption ? existingOption.transform : null;

  const hidePathnames = getHidePathnames(schema);

  const newTransform = function(doc, ret, options) {
    if (existingTransform) {
      existingTransform(doc, ret, options);
    }

    delete ret.__v;
    transformId(ret);
    hideFields(ret, hidePathnames);
  };

  if (existingOption) {
    existingOption.transform = newTransform;
  } else {
    options.toJSON = { transform: newTransform };
  }
};

module.exports = schemaJSONTransform;