'use strict';

const mongoose = require('mongoose');


const User = mongoose.model('User');


/**
 * The controller for signup-related endpoints.
 */
const signupController = {
  /**
   * Attempt to create a new user with the given request body.
   */
  signup: function *() {
    // @TODO validate non-existing user
    let newUser = new User(this.request.body);
    newUser = yield newUser.save();
    this.body = newUser;
  }
};

module.exports = signupController;
