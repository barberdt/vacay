'use strict';

const co = require('co');
const mongoose = require('mongoose');


const User = mongoose.model('User');

/**
 * Authentication strategy implementation for passport. Authenticate the
 * given password against the user matching the given email.
 *
 * @param {String} email - The email of the user to authenticate.
 * @param {String} password - The candidate password to authenticate with.
 * @param {Function} done - The function to call after completing authentication.
 */
module.exports = function(email, password, done) {
  const verifyPassword = function *() {
    return yield User.verifyPassword(email, password);
  };

  co(verifyPassword)
    .then(function(user) {
      done(null, user);
    })
    .catch(function(error) {
      done(error, null);
    });
};
