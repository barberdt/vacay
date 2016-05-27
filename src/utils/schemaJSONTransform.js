const get = require('lodash/object/get');

// @TODO docs
const getHidePathnames = schema => {
  const pathnames = [];

  schema.eachPath((pathname, schemaType) => {
    if (get(schemaType, ['options', 'hideJSON'])) {
      pathnames.push(pathname);
    }
  });

  return pathnames;
};

// @TODO docs
const transformId = ret => {
  if (!ret.id && ret._id) {
    ret.id = ret._id; // eslint-disable-line no-param-reassign
  }

  delete ret._id; // eslint-disable-line no-param-reassign
};

// @TODO docs
const hideFields = (ret, hidePathnames) => {
  hidePathnames.forEach(pathname => {
    const split = pathname.split('.');
    const propName = split[split.length - 1];
    const pathParts = split.slice(0, split.length - 1);

    if (ret.hasOwnProperty(propName)) {
      delete ret[propName]; // eslint-disable-line no-param-reassign
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
module.exports = schema => {
  const options = schema.options;
  const existingOption = options.toJSON;
  const existingTransform = existingOption ? existingOption.transform : null;

  const hidePathnames = getHidePathnames(schema);

  const newTransform = (doc, ret, transformOptions) => {
    if (existingTransform) {
      existingTransform(doc, ret, transformOptions);
    }

    delete ret.__v; // eslint-disable-line no-param-reassign
    transformId(ret);
    hideFields(ret, hidePathnames);
  };

  if (existingOption) {
    existingOption.transform = newTransform;
  } else {
    options.toJSON = { transform: newTransform };
  }
};
