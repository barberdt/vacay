'use strict';

const merge = require('lodash/object/merge');
const path = require('path');


const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Base config properties
const base = {
  root: path.normalize(path.join(__dirname + '/../..')),
  env: env
};

// Env-specific config properties
const envs = {
  'development': {
    port: 3000,
    name: 'Vacay Dev',
    mongoUrl: 'mongodb://localhost/vacay',
    keys: ['secretsss']
  }
};

module.exports = merge(base, envs[env]);
